var express = require('express');
var router = express.Router();
var exchangeRates = require('../model/currencyDB');
const fixer = require('fixer-api');

fixer.latest()
.then((data) => {
  console.log(data);
});

// fixer.latest({ base: 'USD', symbols: ['JPY'] })
//   .then((data) => {
//     console.log(data);
//   });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/convert', function(req, res, next){
  var amount = req.query.amount;
  var toCurrency = req.query.to_currency;
  var fromCurrency = req.query.from_currency;
  var exchRate;
  var fromCur;
  var toCur;

if (fromCurrency === "EUR" && toCurrency === "USD") {
  exchRate = "EtD";
  fromCur = "Euros";
  toCur = "Dollars";
} else
if (fromCurrency === "EUR" && toCurrency === "JPY") {
    exchRate = "EtY";
    fromCur = "Euros";
    toCur = "Yen";
} else
if (fromCurrency === "EUR" && toCurrency === "EUR") {
    exchRate = "EtE";
    fromCur = "Euros";
    toCur = "Euros";
} else
if (fromCurrency === "USD" && toCurrency === "USD") {
    exchRate = "DtD";
    fromCur = "Dollars";
    toCur = "Dollars";
} else
if (fromCurrency === "USD" && toCurrency === "JPY") {
    exchRate = "DtY";
    fromCur = "Dollars";
    toCur = "Yen";
} else
if (fromCurrency === "USD" && toCurrency === "EUR") {
    exchRate = "DtE";
    fromCur = "Dollars";
    toCur = "Euro";
} else
if (fromCurrency === "JPY" && toCurrency === "USD") {
    exchRate = "YtD";
    fromCur = "Yen";
    toCur = "Dollars";
} else
if (fromCurrency === "JPY" && toCurrency === "JPY") {
    exchRate = "YtY";
    fromCur = "Yen";
    toCur = "Yen";
} else
if (fromCurrency === "JPY" && toCurrency === "EUR") {
    exchRate = "YtE";
    fromCur = "Yen";
    toCur = "Euro";
}

var converted = amount * exchangeRates [exchRate];

// console.log(fromCurrency);
// console.log(toCurrency);
// console.log(amount);
// console.log(converted);
// console.log(exchRate);

res.render('results', {
  amount: amount,
  toCurrency: toCurrency,
  toCur: toCur,
  fromCurrency: fromCurrency,
  fromCur: fromCur,
  converted: converted}
);
});

router.get('/about', function(req, res, next){
  res.render('about', { name: 'Jeff', description: 'Currency converter using Node JS'});
});

module.exports = router;
