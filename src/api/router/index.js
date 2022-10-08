const express = require('express')
const HttpStatus = require('../../constant/HttpStatus')
const Message = require('../../constant/Message')
const {ApiError, ErrorException} = require('../../middleware/Error')

const router = express.Router()

function NotFound(req, res) {
  const err = new ApiError({
    status: HttpStatus.NOT_FOUND,
    message: Message.NOT_FOUND
  })

  return ErrorException(err, req, res)
}

router.use('/news', require('./news'))

router.use(NotFound)

module.exports = router