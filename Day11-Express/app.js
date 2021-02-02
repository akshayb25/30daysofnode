const express = require('express');
const app = express();
const route  = require('./routes.js');

app.get('/',(req,res,next)=>{
    console.log('Welcome');
    res.send('Please login');
});

app.use('/app',route);

app.listen(3000,()=>{
    console.log('server running on port 3000');
});