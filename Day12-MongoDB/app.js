const express = require('express');
const app  = express();
require('./DB');

app.get('/',(req,res,next)=>{
    console.log('welcome');
    res.send('Hello World!');
}).listen(3000,()=>{
    console.log('Server running on port 3000');
})