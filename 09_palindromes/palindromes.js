const palindromes = function (string) {
    const aString = string.split("");
    // get away with spaces and punctuation
    let aCleaned = aString.filter(str => (/[a-zA-Z0-9]/).test(str));
    // make it all lowercase
    aCleaned = aCleaned.map(str => str.toLowerCase());
    const sOriginal = aCleaned.join("");
    const sReversed = (aCleaned.reverse()).join("");
    if (sOriginal == sReversed) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
