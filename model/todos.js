
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
 text: String,
 isComplete: Boolean
});

//TodoSchema.post('save', function(doc) {
//  console.log('MYWONMESSAGE Todo has been saved', doc._id);
//});

module.exports = mongoose.model('Todo', TodoSchema);
