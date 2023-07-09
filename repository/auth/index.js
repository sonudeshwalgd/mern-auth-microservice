
const curdRepositor=require("./../curd.js")
const {auth}=require("./../../modal")

class authRepository extends curdRepositor{
    constructor(){
        super(auth)
    }
}

module.exports=authRepository

