const zlib = require('zlib');
const fs = require('fs');

let zip = zlib.createGzip();

let read = fs.createReadStream('file.txt');
let write = fs.createWriteStream('file.txt.gz');

read.pipe(zip).pipe(write);
