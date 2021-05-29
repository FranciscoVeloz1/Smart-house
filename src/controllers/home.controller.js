const pool = require('../lib/database')

class HomeController {
    List(req, res) {
        res.render('home/home')
    }
}

module.exports = new HomeController()