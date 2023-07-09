const mongoose =require("mongoose")
const bcrypt=require("bcrypt")
const jwt= require("jsonwebtoken")


const authSchema= new mongoose.Schema({
  name:{
    type:String,
    required: [true, 'User name is required'],
    validate: {
        validator: function(v) {
          return /^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(v);
        },
        message: props => `${props.value} is not a valid name`
      },
  },
    password:{
      type:String,
      minLength:[8,"minimun 8 charactes long"],
      required:[true, "passwors is required"],
      select:false
    },
    email:{
      type:String,
      required:[true,"email is required"],
      validate:{
        validator:function(v){
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
          
        },
        message:props=>props+"is not a valid email"

      }
    },
    token:String,
})

authSchema.pre("save",async function(next){
  if (!this.isModified('password')) return next();
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
    next()
})


authSchema.methods.getToken=function(){
    const token = jwt.sign({_id:this._id},'secretkey')
    this.token=token
    return token
}

authSchema.methods.compare= async function({password}){
  return await bcrypt.compare(password, this.password)

}

module.exports =mongoose.model("auth",authSchema)