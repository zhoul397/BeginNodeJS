var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('wishing_wall', { title: 'wishing_wall' });
});

module.exports = router;