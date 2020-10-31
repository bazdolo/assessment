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

export const numbersToWordsHelper = (num) => {
	if (num < 20 && num >= 0) {
		return units[num];
	} else return 'Number not within range';
};

function App() {
	const handleSubmit = (e) => {
		e.preventDefault();
		const parsedString = parseInt(e.target[0].value);
		console.log(numbersToWordsHelper(parsedString));
	};

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<label>Enter any number from 0 to below a million</label>
				<input className="number-input" type="number" name="name" />
				<input className="submit-button" type="submit" value="Submit" />
			</form>
		</div>
	);
}

export default App;
