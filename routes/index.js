var express = require('express');
var router = express.Router();
var exchangeRates = require('../model/currencyDB')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/convert', function(req, res, next){
  var dollars = req.query.dollars;
  var toCurrency = req.query.to_currency;
  var converted = dollars * exchangeRates [toCurrency];
res.render('results', {
  dollars: dollars,
  toCurrency: toCurrency,
  converted: converted}
);
});

router.get('/about', function(req, res, next){
  res.render('about', { name: "My awesome site"});
});

module.exports = router;
