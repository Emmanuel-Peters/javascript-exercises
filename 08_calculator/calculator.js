const add = function(int1, int2) {
	return(int1+int2);
};

const subtract = function(int1, int2) {
	return(int1-int2);
};

const sum = function(array1) {
  let sum = 0;
	for(let i = 0; i < array1.length; i++)
  {
    sum += array1[i];
  }
  return(sum);
};

const multiply = function(array1) {
  let product = 1;
	for(let i = 0; i < array1.length; i++)
  {
    product *= array1[i];
  }
  return(product);
};

const power = function(base, exponent) {
	return(base ** exponent);
};

const factorial = function(input) {
	product = 1
  for (let i = input; i>0; i--)
  {
    product *= i
  }
  return(product);
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
