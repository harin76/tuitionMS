'use strict'

// Put some global  / default configurations here
const config = {app:{}, mongo:{}}
config.env = "development"

config.app.port = process.env.port || 3000

config.mongo.host = "localhost"
config.mongo.dbName = "tuitionMS"

config.secret = 'L3TM3!N'
module.exports = config;
