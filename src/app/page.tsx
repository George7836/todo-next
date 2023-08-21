'use client'

import AddTodoBlock from '@/components/AddTodoBlock'
import Header from '@/components/Header'
import TodoList from '@/components/TodoList'
import { Container, styled } from '@mui/material'

export default function Home() {
	return (
		<>
			<Header />
			<StyledContainer maxWidth="lg">
				<AddTodoBlock />
				<TodoList />
			</StyledContainer>
		</>
	)
}

const StyledContainer = styled(Container)`
	display: flex;
	justify-content: center;
	flex-direction: column;
`
