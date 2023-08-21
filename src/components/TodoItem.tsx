'use client'

import {
	Checkbox,
	IconButton,
	ListItem,
	ListItemText,
	TextField,
} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import EditIcon from '@mui/icons-material/Edit'
import DoneIcon from '@mui/icons-material/Done'
import React, { useState } from 'react'
import { Todo } from '@/store/store'
import { useTodos } from '@/store/store'

export default function TodoItem({ id, text, done }: Todo) {
	const [todoText, setTodoText] = useState(text)
	const [editMode, setEditMode] = useState(false)
	const removeTodo = useTodos((state) => state.removeTodo)
	const setDone = useTodos((state) => state.setDone)
	const setUpdated = useTodos((state) => state.setUpdated)

	const lineThrough = done ? 'line-through' : 'none'

	const updateTodoText = () => {
		setUpdated(id, todoText)
		setEditMode(false)
	}

	return (
		<ListItem key={id} disablePadding sx={{ padding: 0.625 }}>
			<Checkbox checked={done} onClick={() => setDone(id)} />
			{editMode ? (
				<TextField
					variant="standard"
					value={todoText}
					onChange={(e) => setTodoText(e.target.value)}
					fullWidth
					inputProps={{ sx: { paddingTop: '6px' } }}
				/>
			) : (
				<ListItemText
					primary={todoText}
					sx={{ textDecoration: lineThrough, wordBreak: 'break-all' }}
				/>
			)}
			{editMode ? (
				<IconButton onClick={updateTodoText}>
					<DoneIcon />
				</IconButton>
			) : (
				<IconButton onClick={() => setEditMode((prev) => !prev)}>
					<EditIcon />
				</IconButton>
			)}
			<IconButton onClick={() => removeTodo(id)}>
				<ClearIcon />
			</IconButton>
		</ListItem>
	)
}
