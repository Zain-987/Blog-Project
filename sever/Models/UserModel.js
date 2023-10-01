const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username : {type : String , required : true , unique : true},
    email : {type : String , required : true , unique : true},
    password : {type : String , required : true },
    photo : {type : String },
    createdAt : {type : Date , default : Date.now}
})


const UserModel = mongoose.model("User",UserSchema)

module.exports = UserModel