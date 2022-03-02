const reverseString = function(text) {
    text = text || "";
    let reversed = "";

    if (text === "") {
        return "";
    }

    for (const char of text) {
        reversed = char + reversed;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
