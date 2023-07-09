const { auth } = require("../../modal")
const {authRepository}=require("./../../repository")
const authRepo=new authRepository()


async function signup(data){
    try {
        const isUserExist=await auth.find({email:data.email})
        if(isUserExist.length){
            return {message:"user already exist"}
        }
        const response= await authRepo.create(data)
        return response
    } catch (error) {
        return {error}
    }
}
async function signin(data){
    try {
        const isUserExist= await authRepo.get({email:data.email})
        if(isUserExist==null){
            return {message:"something is wrong with email or password"}
        }else{
          const response= await isUserExist.compare({password:data.password})
            if(response){
                return{token: isUserExist.getToken()}
            }else{
            return {message:"something is wrong with email or password"}
            }
        }
    } catch (error) {
        return {error}
    }
}

module.exports={
    signup,
    signin
}

















