const { hashSync } = require("bcrypt")
const UserModel = require("../Models/UserModel")

const registerUser = async (req , res , next) => {
    try{

        let {username , email , password} = req.body

        let isUserExists = await UserModel.findOne({email})



        if(isUserExists){
            return next({
                status : 409,
                message : "User Already Exists !"
            })
        }


        let hashPassword = hashSync(password,10)
        let user = await UserModel.create({username , email , password : hashPassword})

        console.log(user);

        return res.status(201).json({user})
    }catch(error){
        return next(error)
    }
}


module.exports = {
    registerUser
}