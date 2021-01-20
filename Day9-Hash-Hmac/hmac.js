const crypto = require('crypto');
const fs = require('fs');

let hmac = crypto.createHmac('md5','1234567890');

let fileData = fs.ReadStream('data.txt');

fileData.on('data',(data)=>{
    hmac.update(data);
});

fileData.on('end',()=>{
    let hmacData = hmac.digest('hex');
    fs.writeFileSync('dat_hmac.txt',hmacData);
})