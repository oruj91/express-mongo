const http = require('http')
const app = require('./config/express')
const {port} = require('./config/env.js')
const {ConnectMongo} = require('./config/mongoose.js')

const server = http.createServer(app)

server.listen(port);

server.on('listening', () => {
  ConnectMongo()
})

module.exports = server