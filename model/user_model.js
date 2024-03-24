const mongoose = require('mongoose')
const Schema =mongoose.Schema({
    email:String,
    password:String,
    fname:String,
    lname:String
})
const User=mongoose.model('User',Schema);
module.exports= User