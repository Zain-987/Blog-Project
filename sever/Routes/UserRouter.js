const express = require("express")
const {registerUser, loginUser, googleAuth} = require("../Controllers/UserController")
const app = express.Router()

app.post("/register",registerUser)
app.post("/login",loginUser)
app.post("/google",googleAuth)


module.exports = app