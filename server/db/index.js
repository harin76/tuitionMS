'use strict'
const ObjectID = require('mongodb').ObjectID
const to = require('await-to-js').default
const ConnectionMgr = require('./connectionMgr')

exports.find = (tenant, coll, query, page, limit) => {
  return new Promise(async (resolve, reject) => {
    // Acquire a connection
    const conn = ConnectionMgr.acquire()

    // When the connection is available, use it
    conn.then(async (mongo) => {
      limit = limit || 10
      page = page || 1
      query = query || {}
      const skip = page > 0 ? ((page - 1) * limit) : 0
      try {
        const collection = mongo.db(tenant).collection(coll)
        let error, result, count
        [error, count] = await to(collection.count(query))

        if (error) {
          return reject(error)
        }

        [error, result] = await to(collection.find(query)
                                .sort({_id: -1})
                                .skip(skip)
                                .limit(limit)
                                .toArray())
        if (error) {
          return reject(error)
        } else {
          return resolve({
            cursor: {
              currentPage: page,
              perPage: limit,
              totalRecords: count,
              totalPages : Math.floor(count/limit) + 1
            },
            data: result
          })
        }
      } catch (error) {
        reject(error)
      } finally {
        // Release the connection after  us
        ConnectionMgr.release(mongo)
      }
    })
  })
}

const findOne = exports.findOne = (tenant, coll, query) => {
  return new Promise(async(resolve, reject) => {
    // Acquire a connection
    const conn = ConnectionMgr.acquire()
    conn.then(async (mongo) => {
      try {
        const collection = mongo.db(tenant).collection(coll)
        const [error, result] = await to(collection.findOne(query))
        if (error) {
          return reject(error)
        } else {
          resolve(result)
        }
      } catch (error) {
        console.log("ERROR", error, tenant, coll)
        reject(error)
      } finally {
        // Release the connection after  us
        ConnectionMgr.release(mongo)
      }
    })
  })
}

exports.findById = (tenant, coll, id) => {
  return findOne(tenant, coll, {_id: ObjectID(id)})
}

exports.insert = (tenant, coll, payload) => {
  return new Promise((resolve, reject) => {
    // Acquire a connection
    const conn = ConnectionMgr.acquire()
    conn.then(async (mongo) => {
      try {
        console.log(tenant, coll)
        const collection = mongo.db(tenant).collection(coll)
        const [error, result] = await to(collection.insert(payload))

        if (error) {
          return reject(error)
        } else {
          return resolve(result)
        }
      } catch (error) {
        console.log(error)
        reject(error)
      } finally {
        ConnectionMgr.release(mongo)
      }
    })
  })
}

exports.update = (tenant, coll, id, payload, returnOriginal = false) => {
  return new Promise((resolve, reject) => {
    // Acquire a new connection
    const conn = ConnectionMgr.acquire()
    conn.then(async (mongo) => {
      try {
        const collection = mongo.db(tenant).collection(coll)
        const [error, result] = await to(collection
                                        .findOneAndUpdate(
                                          {_id: ObjectID(id)},
                                          {$set: payload},
                                          {returnOriginal}
                                        ))
        if (error) {
          return reject(error)
        } else {
          return resolve(result)
        }
      } catch (error) {
        reject(error)
      } finally {
        ConnectionMgr.release(mongo)
      }
    })
  })
}

exports.delete = (tenant, coll, id) => {
  return new Promise((resolve, reject) => {
    // Acquire a new connection
    const conn = ConnectionMgr.acquire()
    conn.then(async (mongo) => {
      try {
        const collection = mongo.db(tenant).collection(coll)
        const [error, result] = await to(collection.findOneAndDelete({_id: ObjectID(id)}))

        if (error) {
          return reject(error)
        } else {
          return resolve(result)
        }
      } catch (error) {
        reject(error)
      } finally {
        ConnectionMgr.release(mongo)
      }
    })
  })
}
