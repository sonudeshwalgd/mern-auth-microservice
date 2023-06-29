// const {auth}=require("./../../modal")

// async function create(data){
//     console.log(data)
//     try {
//         const response= await auth.auth.create(data)
//         return response
        
//     } catch (error) {
//         return {error}
//     }
// }
// async function get(data){
//     try {
//         const response= await auth.auth.findOne(data)
//         return response
        
//     } catch (error) {
//         return {error}
//     }
// }

// module.exports={
//     create,
//     get
// }

















const curdRepositor=require("./../curd.js")
const {auth}=require("./../../modal")


class authRepository extends curdRepositor{
    constructor(){
        super(auth.auth)
    }
 

}

module.exports=authRepository

