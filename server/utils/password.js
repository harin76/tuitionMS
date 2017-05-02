'use strict'
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

exports.generate = (secret, saltRounds, password) => {
  return new Promise((resolve, reject) => {
    saltRounds = saltRounds || SALT_ROUNDS
    bcrypt.genSalt(saltRounds, function(saltErr, salt){
      if (saltErr) {return reject(saltErr)}

      bcrypt.hash(password, salt, function (hashErr, hash) {
        if (hashErr) {return reject(hashErr)}
        return resolve (hash)
      })
    })
  })
}


exports.compare = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, function (err, res){
      if (err) { return reject(err) }
      return resolve(res)
    })
  })
}
