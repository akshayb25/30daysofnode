const fs = require('fs');
let str = fs.readFileSync('data.txt').toString();
const pattern = /man/gim;
const match = str.match(pattern);
console.log('Length'+ match.length);