const { Router } = require('express')
const router = Router()
const controller = require('../controllers/home.controller')
const { isLoggedIn } =require('../lib/auth');

router.get('/home', isLoggedIn, controller.List)

module.exports = router