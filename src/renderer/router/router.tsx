import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Four04 from '../pages/404'
import App from '../pages/App'

export default () => {
	return (
		<HashRouter hashType="noslash">
			<Switch>
				<Route exact path="/" component={App} />
				<Route component={Four04} />;
			</Switch>
		</HashRouter>
	)
}