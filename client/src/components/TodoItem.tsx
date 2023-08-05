'use client'

import { Checkbox, IconButton, ListItem, ListItemText, TextField } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import React, { useState } from 'react'
import { Todo } from '@/types/types';
import { useTodos } from '@/store/store';
import { updateTodo } from '@/api/updateTodo';
import { removeTask } from '@/api/removeTask';

export default function TodoItem({id, content, done}: Todo) {
  const [todoText, setTodoText] = useState(content)
  const [editMode, setEditMode] = useState(false)
  const filterTodos = useTodos((state) => state.filterTodos)
  const getTodos = useTodos((state) => state.getTodos)

  const lineThrough = done ? {'textDecoration': 'line-through'} : {'textDecoration': 'none'}
 
  const updateTodoText = async () => {
    await updateTodo({id: id, content: todoText, done: done})
    await getTodos()
    filterTodos()
    setEditMode((prev) => !prev)
  }

  const deleteTask = async () => {
    await removeTask(id)
    await getTodos()
    filterTodos()
  }

  const setCompleted = async () => {
    await updateTodo({id: id, content: content, done: !done})
    await getTodos()
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
