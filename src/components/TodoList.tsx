import { List } from '@mui/material'
import React from 'react'
import TodoItem from './TodoItem'

const todos = [
  {
    id: 1,
    done: false,
    text: 'Todo1'
  },
  {
    id: 2,
    done: false,
    text: 'Todo1'
  },
  {
    id: 3,
    done: false,
    text: 'Todo1'
  }
]

export default function TodoList() {
  return (
    <List sx={{ 
      width: '100%', 
      bgcolor: 'background.paper', 
      marginTop: '70px'
    }}>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </List>
  )
}
