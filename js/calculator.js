function calculate(income, expenses, timeLength, homeCountry, destCountry) {

  costConvert = (costOfLiving[homeCountry])/(costOfLiving[destCountry])
  netPerMonthAtHome = (income/12)-expenses
  neededPerMonthForTrip = timeLength * (expenses * costConvert)
  saveTimeForTrip = neededPerMonth/netPerMonth
  spendingMoneyOnTrip = expenses * costConvert

}
