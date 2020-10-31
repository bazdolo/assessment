import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App, { numbersToWordsHelper } from './App';

test('renders form without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

// Normal mid point value under 20
test('10 to equal ten', () => {
	const result = numbersToWordsHelper(10);
	expect(result).toBe('ten');
});

test('10 to NOT equal eleven', () => {
	const result = numbersToWordsHelper(10);
	expect(result).not.toBe('eleven');
});

// Lower Boundary under 20
test('0 to equal zero', () => {
	const result = numbersToWordsHelper(0);
	expect(result).toBe('zero');
});

// Upper Boundary under 20
test('19 to equal nineteen', () => {
	const result = numbersToWordsHelper(19);
	expect(result).toBe('nineteen');
});

// Extends Boundary
test('-1 to equal Number not within range', () => {
	const result = numbersToWordsHelper(-1);
	expect(result).toBe('Number not within range');
});

// Extends Boundary
test('20 to equal Number not within range', () => {
	const result = numbersToWordsHelper(20);
	expect(result).toBe('Number not within range');
});
