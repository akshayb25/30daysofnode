const zlib = require('zlib');
const fs = require('fs');

let zip = zlib.createGunzip();

let read = fs.createReadStream('file.txt.gz');
let write = fs.createWriteStream('unzip.txt');

read.pipe(zip).pipe(write);

