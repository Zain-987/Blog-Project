const dotenv = require("dotenv").config()


const PORT = process.env.PORT
const MONGO_STRING = process.env.MONGO_STRING


module.exports = {
    PORT,MONGO_STRING
}