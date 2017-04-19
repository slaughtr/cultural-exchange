const countryAbbreviation1 = require('./../js/website-interface.js').countryAbbreviation1;
const countryAbbreviation2 = require('./../js/website-interface.js').countryAbbreviation2;

  function getExchange(country) {

    $.get(`http://api.fixer.io/latest?base=${countryAbbreviation1}&symbols=${countryAbbreviation1},${countryAbbreviation2}`).then(function(response) {
      $('#infoBox').text(response.rates.countryAbbreviation1);
    }).fail(function(error) {
      $('#infoBox').text('There was an error');
    });
  }



exports.getExchange = getExchange();
