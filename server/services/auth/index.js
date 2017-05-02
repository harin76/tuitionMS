'use strict'
const koaBody = require('koa-body')()
const Router = require('koa-router')
const router = new Router()
const to = require('await-to-js').default
const jwt = require('jsonwebtoken')
const config = require('../../config')
const User = require('../../models/user')

const login = async function (ctx, next) {
  const [error, result] = await to(User.checkPassword(ctx, ctx.params, ctx.request.body))

  if (error || result.error) {
    ctx.status = 400
    ctx.body = error || result.error
  } else {
    ctx.body = {token: jwt.sign({id: result._id, roles: result.roles}, config.secret)}
  }
  return next()
}

const createUser = async function (ctx, next) {
  const [error, result] = await to(User.create(ctx, ctx.params, ctx.request.body))

  if (error) {
    ctx.status = 400
    ctx.body = {error}
  } else {
    ctx.body = result
  }
  return next()
}

const register = (router) => {
  // POST /auth/login
  router.post('/login', koaBody, login)

  // POST /auth/register
  router.post('/register', koaBody, createUser)
}

register(router)
module.exports = router.middleware()
