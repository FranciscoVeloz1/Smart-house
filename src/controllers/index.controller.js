class IndexController {
    List(req, res) {
        res.render('index');
    }
}

module.exports = new IndexController();