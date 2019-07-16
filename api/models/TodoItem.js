// TodoItem.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for TodoItem
let TodoItem = new Schema({
  todo_name: {
    type: String
  },
  todo_description: {
    type: String
  }
},{
    collection: 'todoitem'
});

module.exports = mongoose.model('TodoItem', TodoItem);