const repeatString = function(text, num) {
    text = text || "";
    num = num || 0;
    let finalText = "";

    if (num === 0 || text === "") {
        return ""
    } else if (num < 0){
        return "ERROR"
    }

    for (let i = 0; i < num; i++) {
        finalText += text;
        
    }
    return finalText;
};

// Do not edit below this line
module.exports = repeatString;
