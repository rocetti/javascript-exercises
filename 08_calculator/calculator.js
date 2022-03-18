const add = function(a,b) {
  a = typeof a === typeof 0? a : "ERROR";
  b = typeof b === typeof 0? b : "ERROR";
  if (a == "ERROR" || b == "ERROR") {
    return "ERROR";
  }
	return a+b;
};

const subtract = function(a,b) {
  a = typeof a === typeof 0? a : "ERROR";
  b = typeof b === typeof 0? b : "ERROR";
  if (a == "ERROR" || b == "ERROR") {
    return "ERROR";
  }
  return a-b;
};

const sum = function(nums) {
  nums.push(0)
  nums.forEach((num) => {if (typeof num !== typeof 0) {
    return "ERROR";
  }})  
	return nums.reduce((prevNum, num) => {return prevNum+num;});
};

const multiply = function(nums) {
  nums.forEach((num) => {if (typeof num !== typeof 0) {
    return "ERROR";
  }})
  if (nums.length < 1) {
    return 0;
  }
	return nums.reduce((prevNum, num) => {return prevNum*num;});
};

const power = function(num, power) {
  num = typeof num === typeof 0? num : "ERROR";
  power = typeof power === typeof 0? power : "ERROR";
  if (num == "ERROR" || power == "ERROR") {
    return "ERROR";
  }
	return num**power;
};

const factorial = function(num) {
  num = typeof num === typeof 0? num : "ERROR";
  num = num === 0? 1 : num;
  if (num == "ERROR" || num < 0) {
    return "ERROR";
  }
  let limit = num;
	for (let i = 2; i < limit; i++) {
    num *= i;
  }
  
  return num;
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
