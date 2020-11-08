import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditUser from './pages/EditUser';
import NewUser from './pages/NewUser';

import './App.css';

function App() {
	return (
		<div className="App">
			<header>
				<h1>Retro User List</h1>
			</header>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/edit/:id">
						<EditUser />
					</Route>
					<Route exact path="/new">
						<NewUser />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
