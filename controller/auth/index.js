const {authService} =require("./../../service")


async function signupService(req,res){
    try {
        const data={
            name:req.body?.name,
            email:req.body?.email,
            password:req.body?.password,
        }
        const response= await authService.signup(data)
        return  res.status(200).send(response)
        
    } catch (error) {
        return {error}
    }
}
async function signinService(data){
    try {
        const response= await authService.signin(data)
        return response
        
    } catch (error) {
        return {error}
    }
}

module.exports={
    signupService,
    signinService
}