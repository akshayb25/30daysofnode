require('./DB');
const { json } = require('express');
const express = require('express');
const app = express();
const path = require('path'); 
const User = require('./model/user');
app.use('/public', express.static(__dirname + '/public'));
app.get('/',(req,res,next)=>{
    res.set({
		'Access-Control-Allow-Origin' : '*'
	});
	return res.redirect('/public/index.html');
});

app.post('/signup',(req,res,next)=>{
    console.log("one")
    console.log(JSON.stringify(req.body));

    User.CreateUser(req.body,(err,data)=>{
        if(err){
            throw err;
        }
        res.set({
            'Access-Control-Allow-Origin' : '*'
        });
        return res.redirect('/public/home.html');
    });
   
})

app.listen(3000,(err,data)=>{
    if(err){
        throw err;
    }
    console.log('App runnning on port 3000');
})
