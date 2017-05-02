const jwt = require('jsonwebtoken')

exports.jwt = function (options) {
  return async function auth (ctx, next) {
    const authHeader = ctx.get('Authorization')
    if (authHeader) {
      const elements = authHeader.split(' ')
      if (elements.length === 2) {
        const scheme = elements[0]
        if (scheme === 'Bearer') {
          const token = elements[1]
          try {
            ctx.user = jwt.verify(token, options.secret)
          } catch (err) {
            console.error(err)
          }
        }
      }
    }
    await next()
  }
}
