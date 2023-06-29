const {Router} =require("express")
const authRouterv1  = require("./v1")

const authRouter=Router()

authRouter.use("/v1/api",authRouterv1)

module.exports=authRouter
