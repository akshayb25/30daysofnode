const express = require('express');
const route = express.Router();

route.get('/login',(req,res,next)=>{
    console.log('in login');
    res.send('Welcome');
});

module.exports = route;