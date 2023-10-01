const express = require("express")
const {registerUser} = require("../Controllers/UserController")
const app = express.Router()

app.post("/register",registerUser)


module.exports = app