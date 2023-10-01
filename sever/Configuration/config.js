const dotenv = require("dotenv").config()


const PORT = process.env.PORT
const MONGO_STRING = process.env.MONGO_STRING
const SECRET_KEY = process.env.SECRET_KEY


module.exports = {
    PORT,MONGO_STRING , SECRET_KEY
}