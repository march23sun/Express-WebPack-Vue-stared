var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/vue', function(req, res, next) {
    res.render('vue');
});

module.exports = router;
