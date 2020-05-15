const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const mongoConfig = require('./config/database')

class App {
  constructor () {
    this.express = express()
    this.server = http.Server(this.express)
    this.io = socketio(this.server)

    this.database()
    this.sockets()
    this.middlewares()
    this.routes()
  }

  database () {
    mongoose.connect(mongoConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  sockets () {
    const connectedUsers = {}

    this.io.on('connection', socket => {
      const { user } = socket.handshake.query

      connectedUsers[user] = socket.id
    })

    this.express.use((req, res, next) => {
      req.io = this.io
      req.connectedUsers = connectedUsers

      next()
    })
  }

  middlewares () {
    this.express.use(cors())
    this.express.use(express.json())
  }

  routes () {
    this.express.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    )
    this.express.use(require('./routes'))
  }
}

module.exports = new App().server
