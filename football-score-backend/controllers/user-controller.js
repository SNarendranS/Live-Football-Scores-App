
const User=require('../models/user')
const jwt=require('jsonwebtoken')

const register=async (request,response)=>{
    try{
        const userDetails=request.body
        const user=await User.create(userDetails)
        response.status(200).json(user)
    }catch(error){
        response.status(500).json(error)
    }
}

const login=async (request,response)=>{
    try{
        const credentials=request.body
        const user=await User.findOne({'username':credentials.username,'password':credentials.password})
        if(!user){
            response.status(401).json({'message':'inavlid login credentials'})
        }
        else{
            const {username,email,role}=user
            const token=jwt.sign({username,email,role},process.env.JSON_SECRETKEY,{expiresIn:'1800s'})
            response.status(200).json(token)
            console.log('login sucess')

        }
    }catch(error){
        response.status(500).json(error)
    }
}

module.exports={register,login}