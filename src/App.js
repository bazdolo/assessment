import logo from './logo.svg';
import './App.css';

function App() {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('working');
	};

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<label>Enter any number below 1 milion</label>
				<input className="number-input" type="number" name="name" />
				<input className="submit-button" type="submit" value="Submit" />
			</form>
		</div>
	);
}

export default App;
