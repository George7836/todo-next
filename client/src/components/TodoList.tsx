'use client'

import { List, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import { useTodos } from '@/store/store'
import axios from 'axios'

export default function TodoList() {
  const todos = useTodos((state) => state.filteredTodos)

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
        : <Typography sx={{ padding: '10px' }}>There is no any task</Typography>
      }
    </List>
  )
}
