"use strict";
const koaBody = require('koa-body')()
const to = require('await-to-js').default
const Fee = require('../../models/fee')
const _ = require('lodash')

const createFee = async function (ctx, next) {
    const [error, result] = await to(Fee.create(ctx, ctx.params, ctx.request.body))
    if (error) {
      ctx.status = 400
      ctx.body = {error}
    } else {
      ctx.status = 201
      ctx.body = result
    }
    return next()
};

const getFees = async function (ctx, next) {
  const [error, result] = await to(Fee.find(ctx, ctx.params, {}))

  if (error) {
    ctx.status = 400
    ctx.body = {error}
  } else {
    ctx.status = 200
    ctx.body = result
  }
  return next()
};

const getFee = async function (ctx, next) {
  const [error, result] = await to(Fee.findById(ctx, ctx.params))

  if (error) {
    ctx.status = 400
    ctx.body = {error}
  } else {
    ctx.status = 200
    ctx.body = result
  }
  return next()
};

const updateFee = async function (ctx, next) {
  const [error, result] = await to(Fee.update(ctx, ctx.params, ctx.request.body))
  if (error) {
    ctx.status = 400
    ctx.body = {error}
  } else {
    ctx.status = 200
    ctx.body = result
  }
  return next()
};

const deleteFee = async function (ctx, next) {
  const [error, result] = await to(Fee.delete(ctx, ctx.params))
  if (error) {
    ctx.status = 400
    ctx.body = {error}
  } else {
    ctx.status = 200
    ctx.body = result
  }
  return next()
};


const register = exports.register = function (router) {
  // POST api/v1/fees
  router.post('/fees', koaBody, createFee);

  // GET api/v1/fees
  router.get('/fees', getFees);

  // GET api/v1/fees/:id
  router.get('/fees/:id', getFee);

  // PUT api/v1/fees/:id
  router.put('/fees/:id', koaBody, updateFee);

  // DELETE api/v1/fees/:id
  router.delete('/fees/:id', deleteFee);

};
