const {authService} = require("../../controller")
const {Router} =require("express")


const authRouterv1=Router()

authRouterv1.post("/signup",authService.signupService)
authRouterv1.post("/signin",authService.signinService)

module.exports=authRouterv1
