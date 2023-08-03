'use client'

import { useTodos } from '@/store/store'
import { Box, Button, TextField } from '@mui/material'
import React, { useState, useId } from 'react'

export default function AddTodoBlock() {
  const addTodo = useTodos((state) => state.addTodo)
  const todos = useTodos((state) => state.todos)
  const [text, setText] = useState('')

  const createUniqId = () => {
    let id = Math.random();
    const check = todos.find((el) => el.id === id);
    if (check) {
      createUniqId();
    }
    return id;
  }

  const addTask = () => {
    addTodo({
      id: createUniqId(),
      done: false,
      text: text
    })
    setText('')
  }

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        marginTop: '15px',
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
