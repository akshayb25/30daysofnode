const fs = require('fs');
const {Console} = require('console');
const output = fs.createWriteStream('./stdout.log');
const err = fs.createWriteStream('./stderr.log');

const print = new Console(output,err);
const demo = 'Demo';
print.log('Demo Value: '+ demo);
