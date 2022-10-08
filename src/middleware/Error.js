const {env} = require('../config/env')
const HttpStatus = require('../constant/HttpStatus')
const Message = require('../constant/Message')

class ApiError extends Error {
  constructor({message, status = HttpStatus.INTERNAL_SERVER_ERROR}) {
    super(message)
    this.message = message
    this.status = status
  }
}

exports.ErrorException = (err, req, res) => {
  const isInternalError = err.status === undefined

  const response = {
    code: err.status || HttpStatus.INTERNAL_SERVER_ERROR,
    message: isInternalError ? Message.INTERNAL_SERVER_ERROR : err.message,
  }

  if (env === 'development') {
    response.stack = err.stack
  }

  res.status(response.code).json(response)
  res.end()
}

exports.ApiError = ApiError