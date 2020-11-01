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

////// Test cases for between 20 - 100

// mid point value with 'tens'
test('50 to equal fifty', () => {
	const result = numbersToWordsHelper(50);
	expect(result).toBe('fifty');
});

// mid point value with 'tens' and 'units
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

////// Test cases for between 100 - 1999

// Flat 12 hundred
test('1200 to equal twelve hundred', () => {
	const result = numbersToWordsHelper(1200);
	expect(result).toBe('twelve hundred');
});

// mid point value with 'thousands' 'hundreds' and 'unit'
test('1206 to equal twelve hundred and six', () => {
	const result = numbersToWordsHelper(1206);
	expect(result).toBe('twelve hundred and six');
});

//  mid point value with 'thousands' 'hundreds' and 'tens'
test('1150 to equal eleven hundred and fifty', () => {
	const result = numbersToWordsHelper(1150);
	expect(result).toBe('eleven hundred and fifty');
});

//  mid point value with 'thousands' 'hundreds' 'tens' and 'units'
test('1255 to equal twelve hundred and fifty-five', () => {
	const result = numbersToWordsHelper(1255);
	expect(result).toBe('twelve hundred and fifty-five');
});

// Lower Boundary
test('100 to equal one hundred', () => {
	const result = numbersToWordsHelper(100);
	expect(result).toBe('one hundred');
});

// Upper Boundary under 2000
test('1999 to equal nineten hundred and ninety-nine', () => {
	const result = numbersToWordsHelper(1999);
	expect(result).toBe('nineteen hundred and ninety-nine');
});

////// Test cases for between 2000 - 9999

// Lower Boundary and Flat thousands
test('2000 to equal two thousand', () => {
	const result = numbersToWordsHelper(2000);
	expect(result).toBe('two thousand');
});

// mid point value with 'thousands' and 'unit'
test('5005 to equal five thousand and five', () => {
	const result = numbersToWordsHelper(5005);
	expect(result).toBe('five thousand and five');
});

// mid point value with 'thousands' and 'tens'
test('5050 to equal five thousand and fifty', () => {
	const result = numbersToWordsHelper(5050);
	expect(result).toBe('five thousand and fifty');
});

// mid point value with 'thousands' 'tens' and 'units'
test('5055 to equal five thousand and fifty-five', () => {
	const result = numbersToWordsHelper(5055);
	expect(result).toBe('five thousand and fifty-five');
});

// mid point value with 'thousands' 'hundreds' 'tens' and 'units'
test('5555 to equal five thousand five hundred and fifty-five', () => {
	const result = numbersToWordsHelper(5555);
	expect(result).toBe('five thousand five hundred and fifty-five');
});

// mid point value with 'thousands' 'hundreds'
test('5500 to equal five thousand five hundred', () => {
	const result = numbersToWordsHelper(5500);
	expect(result).toBe('five thousand five hundred');
});

////// Test cases for between 10000 - 99999

// Flat ten thousands
test('30000 to equal thirty thousand', () => {
	const result = numbersToWordsHelper(30000);
	expect(result).toBe('thirty thousand');
});

// mid point value with 'ten thousands' and 'units'
test('30007 to equal thirty thousand and seven', () => {
	const result = numbersToWordsHelper(30007);
	expect(result).toBe('thirty thousand and seven');
});

// mid point value with 'ten thousands' 'tens 'and 'units'
test('30077 to equal thirty thousand and seventy-seven', () => {
	const result = numbersToWordsHelper(30077);
	expect(result).toBe('thirty thousand and seventy-seven');
});

// mid point value with 'ten thousands' 'hundreds' 'tens 'and 'units'
test('30777 to equal thirty thousand seven hundred and seventy-seven', () => {
	const result = numbersToWordsHelper(30777);
	expect(result).toBe('thirty thousand seven hundred and seventy-seven');
});

// mid point value with 'ten thousands' 'thousands' 'hundreds' 'tens 'and 'units'
test('37777 to equal thirty-seven thousand seven hundred and seventy-seven', () => {
	const result = numbersToWordsHelper(37777);
	expect(result).toBe('thirty-seven thousand seven hundred and seventy-seven');
});

// mid point value with 'ten thousands' 'thousands' 'hundreds' and 'tens'
test('37770 to equal thirty-seven thousand seven hundred and seventy', () => {
	const result = numbersToWordsHelper(37770);
	expect(result).toBe('thirty-seven thousand seven hundred and seventy');
});

// mid point value with 'ten thousands' 'thousands' and 'hundreds'
test('37700 to equal thirty-seven thousand seven hundred', () => {
	const result = numbersToWordsHelper(37700);
	expect(result).toBe('thirty-seven thousand seven hundred');
});

// mid point value with 'ten thousands' and 'thousands'
test('37000 to equal thirty-seven thousand', () => {
	const result = numbersToWordsHelper(37000);
	expect(result).toBe('thirty-seven thousand');
});

// Upper Boundary
test('99999 to equal ninety-nine thousand nine hundred and ninety-nine', () => {
	const result = numbersToWordsHelper(99999);
	expect(result).toBe('ninety-nine thousand nine hundred and ninety-nine');
});

// extends upper boundary

test('1000000 to equal Number not within range', () => {
	const result = numbersToWordsHelper(1000000);
	expect(result).toBe('Number not within range');
});
