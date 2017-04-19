function getExchange(countryAbbreviation1, countryAbbreviation2) {

  $.get('http://api.fixer.io/latest?base='+countryAbbreviation1+'&symbols='+countryAbbreviation1+','+countryAbbreviation2).then(function(response) {
    let testVar = countryAbbreviation1
    $('#infoBox').text('There are '+Object.values(response.rates)+' '+countryAbbreviation1+' to every '+countryAbbreviation2);
  }).fail(function(error) {
    $('#infoBox').text('There was an error');
  });
};


exports.exchangeModule = getExchange;
