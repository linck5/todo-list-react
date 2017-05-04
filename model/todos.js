
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  text: String,
  isComplete: Boolean,
  createdAt: { type: Date }
});


module.exports = mongoose.model('Todo', TodoSchema);
