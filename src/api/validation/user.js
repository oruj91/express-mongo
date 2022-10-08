const Joi = require('joi')

exports.create = Joi.object({
  title: Joi.string().required(),
  text: Joi.string().required(),
  image: Joi.string().required(),
})
