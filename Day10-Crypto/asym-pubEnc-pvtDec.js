const CRYPTO = require('crypto');
const fs = require('fs');
//reading public key to enc
let pubK =  fs.readFileSync('pub.key').toString();
//creating message buffer
let msg = 'Hi, How are you';
let buff = Buffer.from(msg,'utf8');
//Encrypting text
let secretData = CRYPTO.publicEncrypt(pubK,buff);
console.log(secretData);

//reading private key
pvtK = {
    key: fs.readFileSync('pvt.key').toString(),
    passphrase: 'nodejsera'
};
//decrypting message
let decData = CRYPTO.privateDecrypt(pvtK,secretData);
console.log(decData.toString());