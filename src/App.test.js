import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App, { numbersToWordsHelper } from './App';

test('renders form without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

// test data type
test('return type is equal to string', () => {
	const result = numbersToWordsHelper(17);
	expect(typeof result).toBe('string');
});

////// Test cases for values below 20

// Normal mid point value under 20
test('10 to equal ten', () => {
	const result = numbersToWordsHelper(10);
	expect(result).toBe('ten');
});

// not equal to value
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
// test('20 to equal Number not within range', () => {
// 	const result = numbersToWordsHelper(20);
// 	expect(result).toBe('Number not within range');
// });

////// Test cases for between 20 - 100

// Normal mid point value without -
test('50 to equal fifty', () => {
	const result = numbersToWordsHelper(50);
	expect(result).toBe('fifty');
});

// Normal mid point value with -
test('55 to equal fifty-five', () => {
	const result = numbersToWordsHelper(55);
	expect(result).toBe('fifty-five');
});

// Lower Boundary
test('20 to equal twenty', () => {
	const result = numbersToWordsHelper(20);
	expect(result).toBe('twenty');
});

// Upper Boundary under 100
test('99 to equal ninety-nine', () => {
	const result = numbersToWordsHelper(99);
	expect(result).toBe('ninety-nine');
});

// Extends Boundary
test('100 to equal Number not within range', () => {
	const result = numbersToWordsHelper(100);
	expect(result).toBe('Number not within range');
});
