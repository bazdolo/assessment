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

export const numbersToWordsHelper = (num, and = '') => {
	let remainder = 0;
	switch (true) {
		case num < 0:
			return 'Number not within range';
		case num < 20:
			return and + units[num];
		case num < 100:
			remainder = num % 10;
			if (!remainder) return and + tens[Math.floor(num / 10)];
			return and + tens[Math.floor(num / 10)] + '-' + numbersToWordsHelper(remainder);
		case num < 2000:
			remainder = num % 100;
			if (!remainder) return units[Math.floor(num / 100)] + ' hundred';
			return units[Math.floor(num / 100)] + ' hundred ' + numbersToWordsHelper(remainder, 'and ');
		case num < 100000:
			remainder = num % 1000;
			if (!remainder) return numbersToWordsHelper(Math.floor(num / 1000)) + ' thousand';
			return (
				numbersToWordsHelper(Math.floor(num / 1000)) + ' thousand ' + numbersToWordsHelper(remainder, 'and ')
			);
		default:
			return 'Number not within range';
	}
};
