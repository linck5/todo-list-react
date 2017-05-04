'use strict'

var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var path = require('path')
var config = require('../webpack.config.js')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var Todo = require('../model/todos')
var bodyParser = require('body-parser')

mongoose.connect('mongodb://felipe:felipe@ds129651.mlab.com:29651/xapps-todo')

var app = express()

var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('./dist'))

app.use('/', router)

router.get('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'))
})

router.get('/api', function(req, res) {
  res.json({ message: 'API Initialized!'})
})

router.route('/api/todos')

.get(function(req, res) {

  Todo.find(function(err, todos) {
    if (err) res.send(err)
    res.json(todos)
  })
})

.post(function(req, res) {
  var newTodo = new Todo()
  newTodo.text = req.body.text
  newTodo.isComplete = req.body.isComplete
  newTodo.createdAt = req.body.createdAt

  newTodo.save(function(err, todo) {
    if (err) res.send(err)

    res.json({ message: 'Todo successfully added!', todo: todo })
  })
})

router.route('/api/todos/:todo_id')

.put(function(req, res) {
  Todo.findById(req.params.todo_id, function(err, todo) {
    if (err)
      res.send(err)


    console.log("todo>>>")
    console.log(todo)

    (req.body.text != null) ? todo.text = req.body.text : null
    (req.body.isComplete != null) ? todo.isComplete = req.body.isComplete : null

    todo.save(function(err) {
      if (err)
        res.send(err)
      res.json({ message: 'Comment has been updated' })
    })
  })
})

.delete(function(req, res) {

  Todo.remove({ _id: req.params.todo_id }, function(err, todo) {
    if (err){
      console.log("ERROR >>")
      console.log(err)
      res.send(err)
    }

    res.json({ message: 'Comment has been deleted' })
  })
})



var port = 3000

app.listen(port, function(error) {
  if (error) throw error
  console.log("Express server listening on port", port)
})
