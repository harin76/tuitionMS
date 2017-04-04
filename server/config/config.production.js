'use strict';

let config = require('./config.global');

config.env = "production";
config.mongo.dbName = "etrm_prod";

module.exports = config;
