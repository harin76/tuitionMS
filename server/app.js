'use strict';

const Koa = require('koa');
const mount = require('koa-mount');
const mongo = require('koa-mongo');

const config = require('./config');
const app = new Koa();
const domains = ['alpha', 'beta', 'gamma'];

async function validateDomain (ctx, next){
  const domain = ctx.subdomains[4];
  if (!domains.includes(domain)) {
    ctx.throw(404, 'tenant not found', {domain});
  }
  ctx.tenant = domain;
  await next();
}

app.use(mongo({
  host: config.mongo.host,
  max: 5,
  min: 1,
  timeout: 30000,
  logout: false
}));

app.use(validateDomain);

const v1 = new Koa();
v1.use(require('./services').v1)

// mount the v1 services
app.use(mount('/api/v1', v1));
module.exports = app;
