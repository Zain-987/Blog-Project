const mongoose = require("mongoose");
const { MONGO_STRING } = require("./config");

const ConnectToMongo = async () => {
    try{

        await mongoose.connect(MONGO_STRING)
        console.log("Mongo Connected !");
    }catch(error){
        console.log("Mongo Error ! ",error.message);
    }
}

module.exports = ConnectToMongo