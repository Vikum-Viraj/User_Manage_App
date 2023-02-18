const mongoose = require("mongoose")
//const validator = require("validator")

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trime:true
    },
    lname:{
        type:String,
        required:true,
        trime:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        ValidityState(value){
            if(!validator.isEmail(value)){
                throw Error("not valid error")
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        minLength:10,
        maxLength:10
    },
    gender:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    profile:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    datecreated:Date,
    dateupdated:Date

});

const users = new mongoose.model("users",userSchema);
module.exports = users