'use client'

import { Checkbox, IconButton, ListItem, ListItemText, TextField } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import React, { useState } from 'react'
import { Todo } from '@/types/types';
import { useTodos } from '@/store/store';

export default function TodoItem({id, text, done}: Todo) {
  const [todoText, setTodoText] = useState(text)
  const [editMode, setEditMode] = useState(false)
  const removeTodo = useTodos((state) => state.removeTodo)
  const setDone = useTodos((state) => state.setDone)
  const setUpdated = useTodos((state) => state.setUpdated)
  const filterTodos = useTodos((state) => state.filterTodos)

  const lineThrough = done ? {'textDecoration': 'line-through'} : {'textDecoration': 'none'}
 
  const updateTodoText = () => {
    setUpdated(id, todoText)
    filterTodos()
    setEditMode((prev) => !prev)
  }

  const deleteTask = () => {
    removeTodo(id)
    filterTodos()
  }

  const setCompleted = () => {
    setDone(id)
    filterTodos()
  }

  return (
    <ListItem
      key={id}
      disablePadding
      sx={{ padding: '5px' }}
    >
      <Checkbox
        checked={done}
        onClick={setCompleted}
      />
      {editMode 
        ? <TextField 
            variant='standard' 
            value={todoText} 
            onChange={(e) => setTodoText(e.target.value)}
            fullWidth
            inputProps={{ style: { paddingTop: 5 } }}
          />
        : <ListItemText 
            primary={todoText}
            style={lineThrough}
          />
      }
      {editMode
        ? 
          <IconButton onClick={updateTodoText}>
            <DoneIcon />
          </IconButton>
        : 
          <IconButton onClick={() => setEditMode((prev) => !prev)}>
            <EditIcon />
          </IconButton>
      }
      <IconButton onClick={deleteTask}>
        <ClearIcon />
      </IconButton>
    </ListItem>
  )
}
