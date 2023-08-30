const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(aNumber) {
  let sum = 0;
  for (number of aNumber)	{
    sum = sum + number;
  }
  return sum;
};

const multiply = function(aNumber) {
  let result = 1;
  for (number of aNumber) {
    result = result * number;
  }
  return result;
};

const power = function(a, b) {
	// a * b times a
  let counter = 0;
  while (counter < b) {
    a = a * a;
    counter++;
  }
  return a;
};

const factorial = function(a) {
  while (a > 0)
  {
    a = a * a -1;
    a--;
  }	
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

// debug

add(2,3,4);
