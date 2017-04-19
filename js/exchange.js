function getExchange(homeCountry, destCountry) {

  $.get('http://api.fixer.io/latest?base='+homeCountry+'&symbols='+homeCountry+','+destCountry).then(function(response) {
    $('#infoBox').text('There are '+Object.values(response.rates)+' '+homeCountry+' to every '+destCountry);
  }).fail(function(error) {
    $('#infoBox').text('There was an error');
  });
};


exports.exchangeModule = getExchange;
