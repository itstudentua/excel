const fs = require('fs');

const someString = fs.readFileSync('./text/text.txt', 'utf8');

const splitString = someString.split("\n").join(" ").split(",").join("").split(".").join("").split("!").join("").split(`"`).join("").split(")").join("").split("(").join("").split("?").join("").split(":").join("").split(";").join("").toLowerCase().split(' '); // remove . , ! ? :

//https://code.mu/ru/javascript/manual/string/charCodeAt/#:~:text=%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%20charCodeAt%20%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D1%82%20%D0%BA%D0%BE%D0%B4%20%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%B0,%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8%2C%20%D1%82%D0%BE%20%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%20%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D1%82%20NaN%20.

while (splitString.indexOf("\r") !== -1 || splitString.indexOf('') !== -1) {
    splitString.splice(splitString.indexOf("\r"), 1); // deleting of an empty elements
}

for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].charCodeAt(splitString[i].length - 1) === 13) {
        splitString[i] = splitString[i].slice(0, -1); // deleting symbol "\r" in every words
    }
}

const makeUniq = (arr) => {
    const uniqSet = new Set(arr); // unique list
    return [...uniqSet];
}

const newArr = makeUniq(splitString);

const wordCount = splitString.length;
const uniqWordsCount = newArr.length;

//console.log(newArr);

console.log(`Text document consists of ${wordCount} words in total, of which ${uniqWordsCount} are unique`);

console.log(`Total words: ${wordCount}`);
console.log(`Unique words: ${uniqWordsCount}`);


module.exports.newArr = newArr;