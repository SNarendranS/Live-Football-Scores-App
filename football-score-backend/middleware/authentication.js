const jwt=require('jsonwebtoken')

const authMiddleware=(request,response,next)=>{
    const authToken=request.headers.authorization
    if(!authToken || !authToken.startsWith('Bearer')){
        console.log(authToken)
        next(response.status(401).json({"message":"not authorized"}))
    }

    try {
        const token=authToken.split(' ')[1]
        const decoded=jwt.verify(token,process.env.JSON_SECRETKEY)
        const {username,email,role}=decoded
        request.user={username,email,role}
        next()
    } catch (error) {
        next(response.status(401).json({"message":"not valid auth"}))
    }
}

module.exports=authMiddleware