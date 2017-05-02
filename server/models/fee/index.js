const to = require('await-to-js').default
const _ = require('lodash')
const Schema = require('./schema')
const DB = require('../../db')
const Errors = require('./errors')

const COLLECTION = 'fees'

class Fee {
  static create (ctx, params, data) {
    return new Promise( async (resolve, reject) => {
      const {error, value} = Schema.validate(data)
      if (error) {
        return reject(error)
      }

      const [saveError, newFee] = await to(DB.insert(ctx.tenant, COLLECTION, value))

      if (fetchError) {
        return reject(fetchError)
      }

      resolve(newFee)
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
        return reject(Errors.FEE_NOT_FOUND)
      }

      return resolve(result)
    })
  }

  static update (ctx, params, data) {
    return new Promise(async (resolve, reject) => {
      const [fetchError, fee] = await to(DB.findById(ctx.tenant, COLLECTION, params.id))

      if (fetchError) {
        return reject(fetchError)
      }

      if (!fee) {
        return reject(Errors.FEE_NOT_FOUND)
      }
      // cannot update the id
      data = _.omit(data, ['_id'])
      const [updateError, updatedFee] = await to(DB.update(ctx.tenant, COLLECTION, params.id, data))

      if (updateError) {
        return reject(updateError)
      }

      return resolve(updatedFee)
    })
  }

  static delete (ctx, params) {
    return new Promise(async (resolve, reject) => {
      const [fetchError, fee] = await to(DB.findById(ctx.tenant, COLLECTION, params.id))

      if (fetchError) {
        return reject(fetchError)
      }

      if (!fee) {
        return reject(Errors.FEE_NOT_FOUND)
      }

      const [deleteError] = await to(DB.delete(ctx.tenant, COLLECTION, params.id))

      if (deleteError) {
        return reject(deleteError)
      }

      return resolve(params.id)
    })
  }
}

module.exports = Fee
