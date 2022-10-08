const {post, getList, getOne} = require('../repository/news')
const HttpStatus = require('../../constant/HttpStatus')
const Message = require('../../constant/Message')
const {ErrorException} = require('../../middleware/Error')

exports.create = async (req, res) => {
  const data = {
    ...req.body,
    createdAt: new Date(),
  }

  try {
    const response = await post(data)
    return res.status(HttpStatus.CREATED).json({data: response, message: Message.CREATED})
  } catch (e) {
    return ErrorException(e, req, res)
  }
}

exports.getList = async (req, res) => {
  const data = await getList()
  return res.json({data})
}

exports.getOne = async (req, res) => {
  const {newsId} = req.params
  const data = await getOne(newsId)
  return res.json({data})
}
