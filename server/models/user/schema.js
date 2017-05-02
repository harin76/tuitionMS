'use strict'

const Joi = require('joi')

const schema = exports.schema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  firstName: Joi.string().min(3).max(50).required(),
  lastName: Joi.string().min(3).max(50).required(),
  title: Joi.string(),
  roles: Joi.array().items(Joi.string()).default(['*'])
})

exports.validate = (data) => Joi.validate(data, schema)
