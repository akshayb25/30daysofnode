const crypto = require('crypto');
const fs = require('fs');

var hash = crypto.createHash('sha256');

var fileData = fs.ReadStream('data.txt');

fileData.on('data',(data)=>{
    hash.update(data);
});

fileData.on('end',()=>{
    let hashData = hash.digest('hex');
    fs.writeFileSync('data_hash.txt',hashData);
})