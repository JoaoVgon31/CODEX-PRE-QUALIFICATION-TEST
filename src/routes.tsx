import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Exercise1 from './exercises/exercise_1/components/Exercise1';
import Exercise2 from './exercises/exercise_2/components/Exercise2';
import Exercise3 from './exercises/exercise_3/components/Exercise3';
import Exercise4 from './exercises/exercise_4/components/Exercise4';
import Exercise5 from './exercises/exercise_5/components/Exercise5';
import Exercise6 from './exercises/exercise_6/components/Exercise6';
import Exercise7 from './exercises/exercise_7/components/Exercise7';
import Exercise8 from './exercises/exercise_8/components/Exercise8';
import Home from './pages/Home';

function routes(): JSX.Element {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/exercise1" component={Exercise1} />
				<Route exact path="/exercise2" component={Exercise2} />
				<Route exact path="/exercise3" component={Exercise3} />
				<Route exact path="/exercise4" component={Exercise4} />
				<Route exact path="/exercise5" component={Exercise5} />
				<Route exact path="/exercise6" component={Exercise6} />
				<Route exact path="/exercise7" component={Exercise7} />
				<Route exact path="/exercise8" component={Exercise8} />
			</Switch>
		</Router>
	);
}

export default routes;
