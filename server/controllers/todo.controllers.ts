const db = require('../db')
import { Request, Response } from "express"

class TodoController {
  async addTodo(req: Request, res: Response) {
    const { content, done } = req.body
    const newTodo = await db.query('INSERT INTO todo (content, done) values ($1, $2) RETURNING *', [content, done])
    res.json(newTodo.rows[0])
  }
  async removeTodo(req: Request, res: Response) {
    const id = req.params.id
    const todo = await db.query('DELETE FROM todo where id = $1', [id])
    res.json(todo.rows[0])
  }
  async getAllTodos(req: Request, res: Response) {
    const todos = await db.query('SELECT * FROM todo')
    res.json(todos.rows)
  }
  async updateTodo(req: Request, res: Response) {
    const { id, content, done } = req.body
    const updatedTodo = await db.query('UPDATE todo set content = $1, done = $2 where id = $3 RETURNING *', [content, done, id])
    res.json(updatedTodo.rows[0])
  }
}

module.exports = new TodoController()