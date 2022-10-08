const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('../api/router')
const {ErrorException} = require('../middleware/Error')
const {env} = require('./env')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.use('/', router)

app.use(ErrorException)

console.log(env)

module.exports = app
