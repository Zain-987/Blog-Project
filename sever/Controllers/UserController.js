const { hashSync, compareSync } = require("bcrypt")
const UserModel = require("../Models/UserModel")
const jwt = require("jsonwebtoken")
const {SECRET_KEY} = require("../Configuration/config")
const USERDTO = require("../DTO/USERDTO")
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

         user = new USERDTO(user)
        return res.status(201).json({user})
    }catch(error){
        return next(error)
    }
}


const loginUser = async (req , res , next) => {
    try{

        const {username , password} = req.body
        

        const isUserExists = await UserModel.findOne({username})

        if(!isUserExists){
            return next({
                status :400,
                message : "No User Found !"
            })
        }

        const isPasswordMatches = compareSync(password , isUserExists.password)

        if(!isPasswordMatches){
            return next({
                status : 403,
                message : "Invalid Credentials ! ",
            })
        }


        const token = jwt.sign({payload : isUserExists._id},SECRET_KEY )

        res.cookie("accesstoken",token,{httpOnly : true , secure : true})

        const user = new USERDTO(isUserExists)
        return res.status(200).json({
user
        })

    }catch(error){
        return next(error)
    }
}

module.exports = {
    registerUser , loginUser
}