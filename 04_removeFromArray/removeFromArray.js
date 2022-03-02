const removeFromArray = function(userArray, ...args) {
    let newArray = userArray.slice() || [];
    args = args || [];

    if (userArray.length <= 0 || args.length <= 0) {
        return "ERROR";
    }

    for (const argK in args) {
        for (const key in newArray) {
            if (newArray[key] === args[argK]) {
                newArray.splice(key,1);
                break;
            }
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
