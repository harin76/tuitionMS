'use strict'
const UserSchema = require('../models/user/schema')
const assert = require('chai').assert

describe('Schema', function() {
  describe('#User validation', function (){
    it('should return validation errors for invalid user', function() {
      const {error, value} = UserSchema.validate({
        firstName: 'hari',
        email: 'hari@test.com',
        password: '123'
      })

      assert.isNotNull(error, 'Got an error ' + typeof error)
    })

    it('should return errors as null for valid user', function() {
      const {error, value} = UserSchema.validate({
        firstName: 'hari',
        lastName: 'narasimhan',
        email: 'hari@test.com',
        password: '123'
      })

      assert.isNull(error, 'Got an error ' + typeof error)
      assert.isNotNull(value)
    })
  })
})
