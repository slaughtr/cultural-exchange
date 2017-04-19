const getExchange = require('./../js/exchange.js').getExchange;
const getCurrencyAbbreviation = require('./../node_modules/country-currency-map').getCurrencyAbbreviation;

let countryName1;
let countryAbbreviation1;
let countryName2;
let countryAbbreviation2;


$(function() {
  $('#countrySearch').submit(function(event) {
    event.preventDefault();
    countryName1 = $('#country1Input').val();
    countryAbbreviation1 = getCurrencyAbbreviation(`${countryName1}`);
    countryName2 = $('#country2Input').val();
    countryAbbreviation2 = getCurrencyAbbreviation(`${countryName2}`);

    console.log(countryName2);
    console.log(countryName1);
    console.log(countryAbbreviation2);
    console.log(countryAbbreviation1);

  })
});

exports.countryAbbreviation1 = countryAbbreviation1;
exports.countryAbbreviation2 = countryAbbreviation2;
