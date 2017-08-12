'use strict'

const Joi = require('joi')

const contact = Joi.object().keys({
  name: Joi.string(),
  mobile: Joi.string(),
  email: Joi.string()
})

const schema = exports.schema = Joi.object().keys({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  dateOfBirth: Joi.date().iso(),
  school: Joi.string().required(),
  standard: Joi.string().required(),
  father: contact,
  mother: contact,
  guardian: contact,
  address: Joi.string()
})

exports.validate = (data) => Joi.validate(data, schema)
