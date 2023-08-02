'use client'

import { Checkbox, IconButton, ListItem, ListItemText, TextField } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import React, { useState } from 'react'

type TodoItemProps = {
  id: number
  text: string
  done: boolean
}

export default function TodoItem({id, text, done}: TodoItemProps) {
  const [checked, setChecked] = useState(done)
  const [todoText, setTodoText] = useState(text)
  const [editMode, setEditMode] = useState(false)

  const lineThrough = checked ? {'textDecoration': 'line-through'} : {'textDecoration': 'none'}

  const handleToggle = () => {
    setChecked((prev) => !prev)
  }
 
  return (
    <ListItem
      key={id}
      disablePadding
      sx={{ padding: '5px' }}
    >
      <Checkbox
        checked={checked}
        inputProps={{ 'aria-labelledby': String(id) }}
        onClick={handleToggle}
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
      <IconButton onClick={() => setEditMode((prev) => !prev)}>
        {editMode
          ? <DoneIcon/>
          : <EditIcon />
        }
      </IconButton>
      <IconButton>
        <ClearIcon />
      </IconButton>
    </ListItem>
  )
}
