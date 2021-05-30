const { Router } = require('express')
const router = Router()
const controller = require('../controllers/home.controller')
const { isLoggedIn } =require('../lib/auth');

router.get('/home', isLoggedIn, controller.List)
router.get('/home/edit', isLoggedIn, controller.Edit)

module.exports = router