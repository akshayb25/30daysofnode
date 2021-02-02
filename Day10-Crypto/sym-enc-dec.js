const crypto = require('crypto');
//iv const of type Buffer and length 16
const iv = Buffer.alloc(16, 0);
//256 bit key of length 32
const key  = crypto.createHash('sha256').update(String('1234567890')).digest('base64').substr(0, 32);

function encrypt(text){
    const cipher = crypto.createCipheriv('aes-256-ctr',key,iv);
    let encData =   cipher.update(text,'utf8','hex');
    encData += cipher.final('hex');
    return encData;  
}

function decrypt(text){
    const cipher = crypto.createDecipheriv('aes-256-ctr',key,iv);
    var decData = cipher.update(text,'hex','utf8');
    decData += cipher.final('utf8');
    return decData; 
}

const text = 'Hi, How are you doing?';

let enc = encrypt(text);
console.log(enc);
let dec = decrypt(enc);
console.log(dec);