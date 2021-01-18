const fs = require('fs');
let str = fs.readFileSync('index.html').toString();
const pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
const result = str.match(pattern);
console.log("Length"+ result.length);