import React from 'react'
import ReactDOM from 'react-dom'

import Router from './router/router'

const render = (Component: any) => {
	ReactDOM.render(
		<Component />,
		document.getElementById('app')
	)
}

render(Router)