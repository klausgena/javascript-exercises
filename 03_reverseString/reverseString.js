const reverseString = function (string) {
    const stringArray = []
    for (character of string) {
        stringArray.push(character);
    }
    return stringArray.reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
