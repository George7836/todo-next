import { List, Typography } from '@mui/material'
import React from 'react'
import TodoItem from './TodoItem'

type Todo = {
  id: number
  text: string
  done: boolean
}

const todos: Todo[] = [
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
      {todos.length > 0
        ?
        todos.map((todo) => (
          <TodoItem 
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />
        ))
        : <Typography sx={{ padding: '10px' }}>You haven't added any todo yet</Typography>
      }
    </List>
  )
}
