import { Box, Button, TextField } from '@mui/material'
import React from 'react'

export default function AddTodoBlock() {
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
        inputProps={{ style: { padding: '10px' } }}
      />
      <Button 
        variant="contained"
        sx={{
          alignSelf: 'flex-end',
          marginTop: '10px'
        }}
      >
        Add Task
      </Button>
    </Box>
  )
}
