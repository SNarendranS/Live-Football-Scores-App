const express=require('express')

const { score, standings, allLeagues, getTeams } = require('../controllers/api-controller')
const authMiddleware = require('../middleware/authentication')

const route=express.Router()

route.get('/league',authMiddleware,allLeagues)
route.get('/scores',authMiddleware,score)
route.get('/standings/:id',authMiddleware,standings)
route.get('/team/:id',authMiddleware,getTeams)

module.exports=route