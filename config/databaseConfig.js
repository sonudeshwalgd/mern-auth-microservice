const mongoose =require("mongoose")
const config =require("./config.js")

async function mongooseConfig(){

  const db=await  mongoose.connect(config.MONGO_URI)
    console.log("success connected to "+db.connection.host)

}

module.exports=mongooseConfig


