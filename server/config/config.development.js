"use strict";

const config = require('./config.global');

config.env = "development";
config.mongo.dbName = "etrm_dev";

module.exports = config;
