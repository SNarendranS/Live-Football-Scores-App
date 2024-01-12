const express=require('express')
const { register, login } = require('../controllers/user-controller')

const route=express.Router()

route.post('/',register)
route.post('/login',login)

module.exports=route