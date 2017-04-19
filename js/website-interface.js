const getExchange = require('./../js/exchange.js').exchangeModule;
const getCurrencyAbbreviation = require('./../node_modules/country-currency-map').getCurrencyAbbreviation;

var test = require('../js/exchange.js').test;

let countryName1;
let countryAbbreviation1;
let countryName2;
let countryAbbreviation2;

$(function() {
  $('#submitButton').click(function(event) {
    event.preventDefault();

    countryName1 = $('#country1Input').val();
    countryAbbreviation1 = getCurrencyAbbreviation(countryName1);
    countryName2 = $('#country2Input').val();
    countryAbbreviation2 = getCurrencyAbbreviation(countryName2);

    getExchange(countryAbbreviation1, countryAbbreviation2);
  })
});
