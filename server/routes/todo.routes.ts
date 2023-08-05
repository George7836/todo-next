const Router = require('express')
const router = new Router()
const todoController = require('../controllers/todo.controllers')

router.post('/todo', todoController.addTodo)
router.delete('/todo/:id', todoController.removeTodo)
router.get('/todo', todoController.getAllTodos)
router.put('/todo/:id', todoController.updateTodo)

module.exports = router