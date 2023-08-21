'use client'

import { List, Typography, styled } from '@mui/material'
import React from 'react'
import TodoItem from './TodoItem'
import { useTodos } from '@/store/store'

export default function TodoList() {
	const filteredTodos = useTodos((state) => state.filteredTodos)

	if (filteredTodos.length === 0)
		return (
			<StyledList>
				<Typography sx={{ padding: '10px' }}>There is no task</Typography>
			</StyledList>
		)

	return (
		<StyledList>
			{filteredTodos.map((todo) => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</StyledList>
	)
}

const StyledList = styled(List)`
	width: 100%;
	background-color: ${({ theme }) => theme.palette.background.paper};
	margin-top: 15px;
`
