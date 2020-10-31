import React, { useState } from 'react';
import './App.css';

const units = [
	'zero',
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten',
	'eleven',
	'twelve',
	'thirteen',
	'fourteen',
	'fifteen',
	'sixteen',
	'seventeen',
	'eighteen',
	'nineteen'
];

const tens = [ null, null, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];

export const numbersToWordsHelper = (num) => {
	if (num < 0) return 'Number not within range';
	if (num < 20) {
		return units[num];
	}
	if (num < 100) {
		const remainder = num % 10;
		if (!remainder) {
			return tens[Math.floor(num / 10)];
		}
		return tens[Math.floor(num / 10)] + '-' + numbersToWordsHelper(remainder);
	} else return 'Number not within range';
};

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
				<label>Enter any number from zero to below a million</label>
				<input className="number-input" type="number" name="name" />
				<input className="submit-button" type="submit" value="Submit" />
			</form>
			<div>{num2Word}</div>
		</div>
	);
}

export default App;
