const express=require("express")
const authRouter  = require("./router")

const app=express()
app.use(express.json())

app.use("/",authRouter)


module.exports={app}