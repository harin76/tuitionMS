'use strict';

const Router = require('koa-router');
const router = new Router();

require('./measures').register(router);

module.exports = router.middleware(); 
