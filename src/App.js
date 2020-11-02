import React, { useState } from 'react';
import './App.css';

import { numbersToWordsHelper } from './numberHelper.js';

function App() {
	const [ num2Word, setNum2Word ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const parsedString = parseInt(e.target[0].value);
		const result = numbersToWordsHelper(parsedString);
		setNum2Word(result);
	};

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<label>Enter any number from 0 - 99999</label>
				<input className="number-input" type="number" autoComplete="off" />
				<input className="submit-button" type="submit" value="Submit" />
			</form>
			<div className="word-container">{num2Word}</div>
		</div>
	);
}

export default App;
