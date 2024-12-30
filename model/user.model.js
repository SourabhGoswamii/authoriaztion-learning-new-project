const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Miniproject",).then("connected to db").catch("error in connecting to db");


const userSchema = new mongoose.Schema({
    username:String,
    name:String,
    age:Number,
    email:String,
    password:String,

});

module.exports=mongoose.model("User",userSchema);
