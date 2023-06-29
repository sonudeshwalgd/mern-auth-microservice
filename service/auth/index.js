const {authRepository}=require("./../../repository")
const authRepo=new authRepository()

async function signup(data){
    try {
        const response= await authRepo.create(data)
        return response
        
    } catch (error) {
        return {error}
    }
}
async function signin(data){
    try {
        const response= await authRepo.findOne(data)
        return response
        
    } catch (error) {
        return {error}
    }
}

module.exports={
    signup,
    signin
}

















