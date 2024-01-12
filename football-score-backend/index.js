const express=require('express')
const cors=require('cors')
const app=express()

require('dotenv').config()

const database=require('./util/database.js')
const userRoute=require('./routes/user-routes.js')
const scoreRoute=require('./routes/api-routes.js')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use('/user',userRoute)
app.use('/live',scoreRoute)

const server=async ()=>{
    try{
        const databaseConnection=await database()
        console.log(databaseConnection)
        app.listen(process.env.PORT,()=>{console.log('server is active')})
    }catch(error){
        console.log(error)
    }
}
server()