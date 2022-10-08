const {Schema, Types, model} = require('mongoose')
const HttpStatus = require('../../constant/HttpStatus')
const Message = require('../../constant/Message')
const {ApiError} = require('../../middleware/Error')

const News = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
    trim: true,
  },
  isPublished: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
  },
  deletedAt: {
    type: Date,
  },
})

News.method({
  transform() {},
})

News.statics = {
  async get(id) {
    if (!Types.ObjectId.isValid(id)) {
      throw new ApiException({
        message: Message.VALIDATION_ERROR,
        status: HttpStatus.NOT_FOUND,
      })
    }

    const user = await this.findById(id).exec()
    if (!user) throw new ApiError({message: Message.NO_RECORD_FOUND, status: HttpStatus.NOT_FOUND})
    return user
  },
}

module.exports = model('news', News)