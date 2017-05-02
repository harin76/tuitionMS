const to = require('await-to-js').default
const _ = require('lodash')
const Schema = require('./schema')
const DB = require('../../db')
const Password = require('../../utils/password')
const config = require('../../config')
const Errors = require('./errors')

const COLLECTION = 'users'

class User {
  static create (ctx, params, data) {
    return new Promise(async (resolve, reject) => {
      const {error, value} = Schema.validate(data)

      if (error) {
        return reject(error)
      }

      const [findErr, user] = await to(DB.findOne(ctx.tenant, COLLECTION, {email: value.email}))
      if (findErr) {return reject (findErr)}

      if (user) {
        return reject(Errors.EMAIL_ALREADY_TAKEN)
      }

      const [hashErr, hashedPassword] = await to(Password.generate(
                                                            config.secret,
                                                            10,
                                                            value.password
                                                          )
                                                )
      if (hashErr) { return reject(hashErr)}
      value.password = hashedPassword

      // Create the user
      const [createErr, newUser] = await to(DB.insert(ctx.tenant, COLLECTION, value))
      if (createErr) {return reject (createErr)}

      return resolve(value)

    })
  }

  static checkPassword (ctx, params, data) {
    return new Promise(async (resolve, reject) => {
      const [findErr, user] = await to(DB.findOne(ctx.tenant, COLLECTION, {email: data.email}))

      if (findErr) {return reject (findErr)}

      if (!user) {
        return reject(Errors.INVALID_EMAIL_OR_PASSWORD)
      }

      const [compareErr, result] = await to(Password.compare(data.password, user.password))
      if (compareErr) {return reject (compareErr)}

      if (!result) {
        return reject(Errors.INVALID_EMAIL_OR_PASSWORD)
      }
      resolve(user)
    })
  }
}

module.exports = User
