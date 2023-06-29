const {authService} = require("../../controller")
const {Router} =require("express")


const authRouterv1=Router()

authRouterv1.post("/signup",authService.signupService)

module.exports=authRouterv1
