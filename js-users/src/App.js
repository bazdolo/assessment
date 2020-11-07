import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditUser from './pages/EditUser';

import UserList from './components/UserList/UserList';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/edit/:id">
						<EditUser />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
