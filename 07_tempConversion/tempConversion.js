const convertToCelsius = function(f_to_c) {
  return(Math.round((f_to_c-32)*10/1.8)/10);
  
};

const convertToFahrenheit = function(c_to_f) {
  return(Math.round(((c_to_f*1.8)+32)*10)/10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
