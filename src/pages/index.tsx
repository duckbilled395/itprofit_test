import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Form from 'pages/Form'

const Pages: React.FC = () => (
	<Routes>
		<Route index element={<Form />} />
	</Routes>
)

export default Pages
