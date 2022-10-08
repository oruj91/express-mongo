const {ErrorException} = require('./Error')
const {ApiError} = require('../middleware/Error')
const {UNPROCESSABLE_ENTITY} = require('../constant/HttpStatus')

module.exports = function(schema) {
  if (!schema) {
    throw new Error(`Schema is not passed in validator argument`)
  }

  return async function(req, res, next) {
    try {
      await schema.validateAsync(req.body, {abortEarly: false})
      next()
    } catch (err) {
      if (err.isJoi) {
        const error = new ApiError({
          message: err.message,
          status: UNPROCESSABLE_ENTITY,
        })
        return ErrorException(error, req, res)
      }

      return ErrorException(err, req, res)
    }
  }
}