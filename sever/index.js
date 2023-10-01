const express = require("express")
const { PORT } = require("./Configuration/config")
const ConnectToMongo = require("./Configuration/connect")
const UserRouter = require("./Routes/UserRouter")
const cors = require('cors')
const app = express()


app.use(cors({
    origin : ['http://localhost:5173'],
    credentials : true,
}))

ConnectToMongo()


app.use(express.json())
app.use("/api/v1/",UserRouter)
app.get("/",(req ,res ) => {
    res.send("Hello World !")
})

app.use((error , req , res , next) => {
    let status = 500
    const data = {message : "Internal Server Error ! "}


    if(error.status){
        status = error.status
    }
    if(error.message){
        data.message = error.message
    }


    return res.status(status).json(data)
})


app.listen(PORT,console.log("Server is Running ! "))