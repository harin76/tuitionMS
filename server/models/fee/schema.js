'use strict'

const Joi = require('joi')

const schema = exports.schema = Joi.object().keys({
  studentId: Joi.string().required(),
  studentName: Joi.string().required(),
  academicYear: Joi.string().required(),
  feeMonth: Joi.string().required(),
  date: Joi.date().iso(),
  amount: Joi.number().required().default(0),
  remarks: Joi.string()
})

exports.validate = (data) => Joi.validate(data, schema)
