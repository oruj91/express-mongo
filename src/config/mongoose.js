const mongoose = require('mongoose')
const {env, mongo} = require('./env')

mongoose.set('debug', env === 'development')

mongoose.connection.on('error', err => {
  console.error(`MongoDB Connection Error ${err}`) // TODO implement logger
})

exports.ConnectMongo = () => {
  mongoose.connect(mongo.uri)
  return mongoose.connection
}