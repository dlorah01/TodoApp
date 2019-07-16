// todoitem.route.js

const express = require('express');
const app = express();
const todoitemRoutes = express.Router();

// Require Business model in our routes module
let TodoItem = require('../models/TodoItem');

// Defined store route
todoitemRoutes.route('/add').post(function (req, res) {
  let todoitem = new TodoItem(req.body);
  todoitem.save()
    .then(todoitem => {
      res.status(200).json({'todoitem': 'todoitem in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
todoitemRoutes.route('/').get(function (req, res) {
    TodoItem.find(function (err, todoitems){
    if(err){
      console.log(err);
    }
    else {
      res.json(todoitems);
    }
  });
});

// Defined edit route
todoitemRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  TodoItem.findById(id, function (err, todoitem){
      res.json(todoitem);
  });
});

//  Defined update route
todoitemRoutes.route('/update/:id').post(function (req, res) {
    TodoItem.findById(req.params.id, function(err, todoitem) {
    if (err){
      res.json(err);
    }
    else {
        todoitem.todo_name = req.body.todo_name;
        todoitem.todo_description = req.body.todo_description;

        todoitem.save().then(todoitem => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
todoitemRoutes.route('/delete/:id').get(function (req, res) {
    TodoItem.findByIdAndRemove({_id: req.params.id}, function(err, todoitem){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = todoitemRoutes;