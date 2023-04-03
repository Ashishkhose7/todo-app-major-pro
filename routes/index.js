// route class for todo application

const express = require('express');
const router = express.Router();
const homeController = require('../controller/homecontroller');
router.get('/',homeController.home)
router.post('/create_todo',homeController.createTodo) //controller for creating todo list
router.get('/delete/:id',homeController.deleteTodo) // controller for deleting the todo list
console.log('router is loaded')
module.exports = router;