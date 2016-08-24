'use strict'

const express = require('express')

// Constants
const PORT = 8080

// App
const app = express()

app.locals.broke = false

app.use(function (req, res, next) {
  if (app.locals.broke) {
    jon()
  }
  next()
})

app.get('/', function (req, res) {
  res.sendFile('index.html', {'root': __dirname + '/static'})
})

app.get('/break', function (req, res) {
  app.locals.broke = true
  res.sendFile('broken.html', {'root': __dirname + '/static'})
})

app.listen(PORT)
console.log('Running on http://localhost:' + PORT)
