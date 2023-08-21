'use client'
import { CssBaseline, styled } from '@mui/material'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<CssBaseline />
				<Wrapper>{children}</Wrapper>
			</body>
		</html>
	)
}

const Wrapper = styled('div')`
	min-height: 100vh;
	background-color: #f7f3f3;
	overflow: hidden;
	padding: 0;
`
