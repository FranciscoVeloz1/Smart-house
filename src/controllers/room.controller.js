class RoomController {
    ListPrincipal(req, res) {
        res.render('rooms/principal')
    }

    ListSon(req, res) {
        res.render('rooms/son')
    }

    ListExtra(req, res) {
        res.render('rooms/extra')
    }

    ListLiving(req, res) {
        res.render('rooms/living')
    }

    ListSensor(req, res) {
        res.render('rooms/sensor')
    }
}

module.exports = new RoomController()