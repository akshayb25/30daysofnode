const crypto = require('crypto');
const fs = require('fs');

//import pvt key
const pvtKey = {
    key: fs.readFileSync('pvt.key').toString(),
    passphrase: 'nodejsera'
};
//import public key
const pubKey = fs.readFileSync('pub.key').toString();

//create message buffer
let msg = 'Hi, How are you?';
let buff = Buffer.from(msg,'utf8');

//enctrypting msg
const secret = crypto.privateEncrypt(pvtKey,buff);
console.log(secret.toString('utf8'));

//decrypt msg
const decMsg = crypto.publicDecrypt(pubKey,secret);
console.log(decMsg.toString());