const pool = require('../lib/database')

class HomeController {
    List(req, res) {
        res.render('home/home')
    }

    Edit(req, res) {
        res.render('home/edit')
    }
}

module.exports = new HomeController()