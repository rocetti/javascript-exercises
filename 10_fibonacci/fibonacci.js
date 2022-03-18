const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    if (typeof n === typeof "") {
        n = parseInt(n);
    }
    let prevNum = 1;
    let result = 0;
    for (let i = 0; i < n; i++) {
        let temp = result;
        result += prevNum;
        prevNum = temp;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;