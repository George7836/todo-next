'use client'

import React, { useEffect, useState } from 'react'
import { InputBase, alpha, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useTodos } from '@/store/store'
import { useDebounce } from '@/hooks/useDebounce'

export default function SearchBar() {
	const [text, setText] = useState('')
	const filterTodos = useTodos((state) => state.filterTodos)
	const debouncedValue = useDebounce(text, 300)
	const todos = useTodos((state) => state.todos)

	useEffect(() => {
		filterTodos(text)
	}, [debouncedValue, todos])

	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder="Search…"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
		</Search>
	)
}

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 6),
	},
}))
