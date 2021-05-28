const { Router } = require('express')
const router = Router()
const controller = require('../controllers/index.controller')
const { isLoggedIn } =require('../lib/auth');

router.get('/', controller.List)

module.exports = router