const palindromes = function (string) {
    string = string.toLowerCase()
    let nopunct = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let nospaces = nopunct.replace(/\s/g,"");
    let reversed = "";
    let result = false;
    for (let i = nospaces.length - 1; i >= 0; i--) {
        reversed += nospaces[i];
    }
    return result = nospaces === reversed? true:false;
};

// Do not edit below this line
module.exports = palindromes;
