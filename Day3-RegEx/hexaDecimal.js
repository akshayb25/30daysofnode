let str = 'ABCDEF01234';
const pattern = /^[a-fA-F0-9]+$/g;

str.match(pattern) ? console.log('Its a valid string') : console.log('Invalid String');