const convertToCelsius = function (fahrenheit) {
  // Formula: x °C ≘ (x × 9/5 + 32) °F
  let celsius = 0;
  celsius = (fahrenheit - 32) * (5 / 9);
  // Round one number after the comma
  const rounded = Math.round(celsius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function (celsius) {
  // Formula: x °F ≘ (x − 32) × 5/9 °C 
  let fahrenheit = 0;
  fahrenheit = celsius * (9 / 5) + 32;
  const rounded = Math.round(fahrenheit * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
