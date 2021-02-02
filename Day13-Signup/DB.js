const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const User = require('./model/user');
const db = mongoose.connection;

db.on('error',()=>{
    console.log('cannot connect to database');
});

db.on('open',()=>{
    console.log('connected');
});