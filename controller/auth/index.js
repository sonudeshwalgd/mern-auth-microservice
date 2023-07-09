const {authService} =require("./../../service")


async function signupService(req,res){
    try {
        const data={
            name:req.body?.name,
            email:req.body?.email,
            password:req.body?.password,
        }
        const response= await authService.signup(data)
        console.log(response)
        if (response?.name === "ValidationError"){
            return  res.status(400).send(response)
        }
         return  res.status(200).send(response)
        
    } catch (error) {
        return  res.status(400).send(error)
    }
}
async function signinService(req,res){
    try {
        const data={
            email:req?.body?.email,
            password:req?.body?.password,
        }
        const response= await authService.signin(data)
        return res.status(200).send(response)
        
    } catch (error) {
        return {error}
    }
}

module.exports={
    signupService,
    signinService
}