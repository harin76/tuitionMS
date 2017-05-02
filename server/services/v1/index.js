'use strict';

const Router = require('koa-router');
const router = new Router();

require('./students').register(router);
require('./fees').register(router);

module.exports = router.middleware();
