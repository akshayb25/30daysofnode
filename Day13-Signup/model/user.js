const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email:String,
    firstname:String,
    lastname:String,
    password:String
});


exports.CreateUser = (userObj) => {
    UserModel.create(userObj,(err,data)=>{
        if(err){
            return err;
        }
        return data;
    })
}

const UserModel = mongoose.model('Users',User);