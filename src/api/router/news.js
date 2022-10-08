const router = require('express').Router()
const controller = require('../controller/news')
const {create} = require('../validation/user')
const Validate = require('../../middleware/Validator')

router.route('/')
  .get(controller.getList)
  .post(Validate(create), controller.create)

router.route('/:newsId')
  .get(controller.getOne)

module.exports = router

