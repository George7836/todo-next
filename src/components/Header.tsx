import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import SearchBar from './SearchBar'

export default function Header() {
	return (
		<Box>
			<AppBar>
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<SearchBar />
				</Toolbar>
			</AppBar>
		</Box>
	)
}
