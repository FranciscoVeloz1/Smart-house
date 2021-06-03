const { Router } = require('express')
const router = Router()
const controller = require('../controllers/room.controller')
const { isLoggedIn } =require('../lib/auth');

router.get('/home/principal', isLoggedIn, controller.ListPrincipal)
router.get('/home/son', isLoggedIn, controller.ListSon)
router.get('/home/extra', isLoggedIn, controller.ListExtra)
router.get('/home/living', isLoggedIn, controller.ListLiving)
router.get('/home/sensor', isLoggedIn, controller.ListSensor)

module.exports = router