"use strict";
const koaBody = require('koa-body')();
const JSOEE = require('jso-ee');
const ObjectID = require('mongodb').ObjectID;
const _ = require('lodash');

const createMeasure = async function (ctx, next) {
    const result = await ctx.mongo.db(ctx.tenant || 'default')
                        .collection('measures').insert(ctx.request.body);
    ctx.status = 201;
    ctx.body = result;
    return next();
};

const getMeasures = async function (ctx, next) {
  const result = await ctx.mongo.db(ctx.tenant || 'default')
                        .collection('measures').find().toArray();
  ctx.status = 200;
  ctx.body = result;
  return next();
};

const getMeasure = async function (ctx, next) {
    const result = await ctx.mongo.db(ctx.tenant || 'default')
                          .collection('measures').findOne({_id: ObjectID(ctx.params.id)});
    ctx.status = 200;
    ctx.body = result;
    return next();
};

const updateMeasure = async function (ctx, next) {
    const result = await ctx.mongo.db(ctx.tenant || 'default')
                          .collection('measures').findOneAndUpdate({_id: ObjectID(ctx.params.id)}, {$set: ctx.body});
    ctx.status = 200;
    ctx.body = result;
    return next();
};

const deleteMeasure = async function (ctx, next) {
    const result = await ctx.mongo.db(ctx.tenant || 'default')
                          .collection('measures').findOneAndDelete({_id: ObjectID(ctx.params.id)});
    ctx.body = result;
    ctx.status = 204;
    return next();
};

const calc = async function (ctx, next) {
  const code = ctx.params.code;

  // TODO implement redis cache and check the cache first
  const measure = await ctx.mongo.db(ctx.tenant || 'default')
                          .collection('measures').findOne({code: code});
  if (!measure) {
    ctx.status = 400;
    ctx.body = {error: 'could not find measure with code ' + code};
  } else {
    var result = null;
    var calculationTime = null;

    const params = ctx.request.body.parameters || {};
    const context = Object.assign({}, {
      lookupTables: measure.lookupTables
    }, params)
  
    try {
      const omitAttribs = ['lookupTables', ...Object.keys(params)]
      const start = new Date()
      result = _.omit(JSOEE.eval(measure.calculation, context), omitAttribs)
      const end = new Date()
      calculationTime = end - start
      ctx.status = 200;
    } catch (error) {
      ctx.status = 400;
      ctx.body = error;
      console.log(error);
      result = {error};
    }

    ctx.body = {result, calculationTime}
  }
  return next();
};

const register = exports.register = function (router) {
  // POST api/v1/measures
  router.post('/measures', koaBody, createMeasure);

  // GET api/v1/measures
  router.get('/measures', getMeasures);

  // GET api/v1/measures/:id
  router.get('/measures/:id', getMeasure);

  // PUT api/v1/measures/:id
  router.put('/measures/:id', updateMeasure);

  // DELETE api/v1/measures/:id
  router.delete('/measures/:id', deleteMeasure);

  // POST api/v1/measures/:code/calc
  router.post('/measures/:code/calc', koaBody, calc);
};
