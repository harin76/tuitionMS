'use strict';

let config = require('./config.global');

config.env = "test";
config.mongo.dbName = "etrm_test";

module.exports = config;
