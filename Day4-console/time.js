const fs = require('fs');
console.time('compute');
let str = fs.readFileSync('custom.js').toString();
console.timeEnd('compute');