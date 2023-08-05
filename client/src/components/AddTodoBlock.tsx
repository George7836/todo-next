'use client'

import { addNewTask } from '@/api/addNewTask'
import { useTodos } from '@/store/store'
import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function AddTodoBlock() {
  const todos = useTodos((state) => state.todos)
  const [text, setText] = useState('')
  const filterTodos = useTodos((state) => state.filterTodos)
  const getTodos = useTodos((state) => state.getTodos)

  const addTask = async () => {
    await addNewTask(text, false)
    await getTodos()
    filterTodos()
    setText('')
  }

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        marginTop: '70px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <TextField 
        variant='outlined' 
        fullWidth
        placeholder='Add new task ...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        inputProps={{ style: { padding: '10px' } }}
        autoFocus
        onKeyDown={(e) => e.key === 'Enter' && addTask()}
      />
      <Button 
        variant="contained"
        sx={{
          alignSelf: 'flex-end',
          marginTop: '10px'
        }}
        onClick={addTask}
      >
        Add Task
      </Button>
    </Box>
  )
}
