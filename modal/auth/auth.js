const mongoose =require("mongoose")

const authSchema= new mongoose.Schema({
    name:String,
    password:String,
    email:String
})

module.exports =mongoose.model("auth",authSchema)