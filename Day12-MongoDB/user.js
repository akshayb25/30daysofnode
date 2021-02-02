const mongoose = require('mongoose');

const User = new mongoose.Schema({
    userId: String,
    password: String,
    role:String
});

UserModel.create({userId:'12345',password:'1234567890',role:'Admin'},(err,data)=>{
    if(err){
        console.log(err);
        throw err;
    }
    console.log('Success',data);
});

const UserModel = mongoose.model('User',User);
module.exports.UserModel;