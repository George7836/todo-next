'use client'

import { List, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import { useTodos } from '@/store/store'

export default function TodoList() {
  const todos = useTodos((state) => state.filteredTodos)
  const getTodos = useTodos((state) => state.getTodos)

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <List sx={{ 
      width: '100%', 
      bgcolor: 'background.paper', 
      marginTop: '15px'
    }}>
      {todos.length > 0
        ?
        todos.map((todo) => (
          <TodoItem 
            key={todo.id}
            id={todo.id}
            content={todo.content}
            done={todo.done}
          />
        ))
        : <Typography sx={{ padding: '10px' }}>There is no task</Typography>
      }
    </List>
  )
}
