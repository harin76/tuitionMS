const to = require('await-to-js').default
const _ = require('lodash')
const Schema = require('./schema')
const DB = require('../../db')
const Errors = require('./errors')

const COLLECTION = 'students'

class Student {
  static create (ctx, params, data) {
    return new Promise( async (resolve, reject) => {
      const {error, value} = Schema.validate(data)
      if (error) {
        return reject(error)
      }

      const [fetchError, student] = await to(DB.findOne(ctx.tenant, COLLECTION, {
        firstName: data.firstName,
        lastName: data.lastName
      }))

      if (fetchError) {
        return reject(fetchError)
      }
      if (student) {
        return reject({error: Errors.STUDENT_ALREADY_EXIST})
      }

      const [saveError, newStudent] = await to(DB.insert(ctx.tenant, COLLECTION, value))

      if (fetchError) {
        return reject(fetchError)
      }

      resolve(newStudent)
    })
  }

  static find (ctx, params, query) {
    return new Promise(async (resolve, reject) => {
      const [error, result] = await to(DB.find(ctx.tenant, COLLECTION, query))
      if (error) {
        return reject(Errors.UNKNOWN)
      }
      return resolve(result)
    })
  }

  static findById (ctx, params) {
    return new Promise(async (resolve, reject) => {
      const [fetchError, result] = await to(DB.findById(ctx.tenant, COLLECTION, params.id))

      if (fetchError) {
        return reject(fetchError)
      }

      if (!result) {
        return reject(Errors.STUDENT_NOT_FOUND)
      }

      return resolve(result)
    })
  }

  static update (ctx, params, data) {
    return new Promise(async (resolve, reject) => {
      const [fetchError, student] = await to(DB.findById(ctx.tenant, COLLECTION, params.id))

      if (fetchError) {
        return reject(fetchError)
      }

      if (!student) {
        return reject(Errors.STUDENT_NOT_FOUND)
      }
      // cannot update the id
      data = _.omit(data, ['_id'])
      const [updateError, updatedStudent] = await to(DB.update(ctx.tenant, COLLECTION, params.id, data))

      if (updateError) {
        return reject(updateError)
      }

      return resolve(updatedStudent)
    })
  }

  static delete (ctx, params) {
    return new Promise(async (resolve, reject) => {
      const [fetchError, student] = await to(DB.findById(ctx.tenant, COLLECTION, params.id))

      if (fetchError) {
        return reject(fetchError)
      }

      if (!student) {
        return reject(Errors.STUDENT_NOT_FOUND)
      }

      const [deleteError] = await to(DB.delete(ctx.tenant, COLLECTION, params.id))

      if (deleteError) {
        return reject(deleteError)
      }

      return resolve(params.id)
    })
  }
}

module.exports = Student
