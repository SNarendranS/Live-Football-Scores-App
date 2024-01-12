const mongoose=require('mongoose')
//added a comment
const userSchema=new mongoose.Schema({
    "username":{type:String,required:true,unique:true},
    "email":{type:String,required:true,unique:true},
    "password":{type:String,required:true},
    "role":{type:String,enum:['admin','user'],required:true,default:'user'}
})

module.exports=mongoose.model('User',userSchema)