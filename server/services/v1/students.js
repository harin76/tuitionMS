"use strict";
const koaBody = require('koa-body')()
const to = require('await-to-js').default
const Student = require('../../models/student')
const _ = require('lodash')

const createStudent = async function (ctx, next) {
    const [error, result] = await to(Student.create(ctx, ctx.params, ctx.request.body))
    if (error) {
      ctx.status = 400
      ctx.body = {error}
    } else {
      ctx.status = 201
      ctx.body = result
    }
    return next()
};

const getStudents = async function (ctx, next) {
  const [error, result] = await to(Student.find(ctx, ctx.params, {}))

  if (error) {
    ctx.status = 400
    ctx.body = {error}
  } else {
    ctx.status = 200
    ctx.body = result
  }
  return next()
};

const getStudent = async function (ctx, next) {
  const [error, result] = await to(Student.findById(ctx, ctx.params))

  if (error) {
    ctx.status = 400
    ctx.body = {error}
  } else {
    ctx.status = 200
    ctx.body = result
  }
  return next()
};

const updateStudent = async function (ctx, next) {
  const [error, result] = await to(Student.update(ctx, ctx.params, ctx.request.body))
  if (error) {
    ctx.status = 400
    ctx.body = {error}
  } else {
    ctx.status = 200
    ctx.body = result
  }
  return next()
};

const deleteStudent = async function (ctx, next) {
  const [error, result] = await to(Student.delete(ctx, ctx.params))
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
  // POST api/v1/students
  router.post('/students', koaBody, createStudent);

  // GET api/v1/students
  router.get('/students', getStudents);

  // GET api/v1/students/:id
  router.get('/students/:id', getStudent);

  // PUT api/v1/students/:id
  router.put('/students/:id', koaBody, updateStudent);

  // DELETE api/v1/students/:id
  router.delete('/students/:id', deleteStudent);

};
