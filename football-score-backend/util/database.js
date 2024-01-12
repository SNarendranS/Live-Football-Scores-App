const mongoose=require('mongoose')

const database=()=>{
    return mongoose.connect(process.env.DATABASE_URL)
}

module.exports=database