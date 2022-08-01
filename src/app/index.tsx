import { BrowserRouter } from 'react-router-dom'
import React from 'react'

import Pages from 'pages'

import './styles/global.scss'

const App: React.FC = () => (
	<BrowserRouter>
		<Pages />
	</BrowserRouter>
)

export default App
