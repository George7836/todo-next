'use client'

import { useTodos } from '@/store/store'
import { Box, Button, TextField, styled } from '@mui/material'
import React, { useState } from 'react'

export default function AddTodoBlock() {
	const addTodo = useTodos((state) => state.addTodo)
	const todos = useTodos((state) => state.todos)
	const [text, setText] = useState('')

	const createUniqId = () => {
		let id = Math.random()
		const check = todos.find((el) => el.id === id)
		if (check) {
			createUniqId()
		}
		return id
	}

	const addTask = () => {
		addTodo({
			id: createUniqId(),
			done: false,
			text: text,
		})
		setText('')
	}

	return (
		<StyledBox>
			<TextField
				variant="outlined"
				fullWidth
				placeholder="Add new task ..."
				value={text}
				onChange={(e) => setText(e.target.value)}
				inputProps={{ sx: { padding: '10px' } }}
			/>
			<Button
				variant="contained"
				sx={{
					alignSelf: 'flex-end',
					marginTop: '10px',
				}}
				onClick={addTask}
			>
				Add Task
			</Button>
		</StyledBox>
	)
}

const StyledBox = styled(Box)`
	background-color: #fff;
	margin-top: 70px;
	padding: 10px;
	display: flex;
	flex-direction: column;
`
