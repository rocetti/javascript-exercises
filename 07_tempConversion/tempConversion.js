const ftoc = function(temp) {
  if (typeof temp !== typeof 1) {
    return "ERROR";
  }
  let cTemp = (temp - 32)*(5/9);
  return roundDecimal(cTemp);
};

const ctof = function(temp) {
  if (typeof temp !== typeof 1) {
    return "ERROR";
  }
  let fTemp = (temp * (9/5)) + 32;
  return roundDecimal(fTemp);
};

function roundDecimal(number) {
  let rounded = Math.round(number * 10) / 10;
  return rounded;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
