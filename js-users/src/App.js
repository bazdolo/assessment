import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import UserList from './components/ListContainer/UserList';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Router>
						<UserList />
					</Router>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
