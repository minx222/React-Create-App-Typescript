import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import 'tailwindcss/tailwind.css'
import '@/styles/index.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
