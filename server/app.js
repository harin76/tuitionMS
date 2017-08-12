'use strict'

const Koa = require('koa')
const mount = require('koa-mount')
const cors = require('kcors')

const authHelper = require('./utils/authHelper')
const config = require('./config')

const mongoOpts = {
  host: config.mongo.host,
  max: 5,
  min: 1,
  timeout: 30000,
  logout: false
}

// init the connection pool
require('./db/connectionMgr').init(mongoOpts)

const app = new Koa()

// Set the tenant
async function setTenant (ctx, next) {
  // only a single tenant
  ctx.tenant = config.mongo.dbName
  await next()
}
app.use(setTenant)
app.use(authHelper.jwt({secret: config.secret}))
app.use(cors())

const auth = new Koa()
auth.use(require('./services').auth)

const v1 = new Koa()
v1.use(require('./services').v1)

// mount auth services
app.use(mount('/auth', auth))

// mount the v1 services
app.use(mount('/api/v1', v1))

module.exports = app
