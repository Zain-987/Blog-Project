const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username : {type : String , required : true , unique : true},
    email : {type : String , required : true , unique : true},
    password : {type : String , required : true },
    photo : {type : String , default : 'https://img.icons8.com/pastel-glyph/64/person-male--v1.png' },
    createdAt : {type : Date , default : Date.now}
})


const UserModel = mongoose.model("User",UserSchema)

module.exports = UserModel