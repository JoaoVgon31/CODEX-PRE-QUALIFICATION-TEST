import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Exercise from './pages/Exercise';
import Home from './pages/Home';

function routes(): JSX.Element {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/exercise/:number" component={Exercise}></Route>
			</Switch>
		</Router>
	);
}

export default routes;
