const sumAll = function(fromNum, toNum) {
    fromNum = fromNum || 0;
    toNum = toNum || 0;
    
    if (fromNum < 0 || toNum < 0) {
        return "ERROR";
    } else if (typeof fromNum !== typeof 1 || typeof toNum !== typeof 1) {
        return "ERROR";
    }

    let n = Math.abs(toNum - fromNum) + 1;
    let sum = (n/2)*(fromNum + toNum);

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
