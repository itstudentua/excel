const textAreaInput = document.getElementById("textArInput");
let resultArray = [];

function getWords(arr1, arr2) {
    Array.prototype.diff = function (a) {
        return this.filter(function (i) { return a.indexOf(i) < 0; });
    };

    return arr2.diff(arr1);
}

function processWords() {
    readExcel();
    const textAreaInputContent = textAreaInput.value;

    const splitString = textAreaInputContent.split("\n").join(" ").split(",").join("").split(".").join("").split("!").join("").split(`"`).join("").split(")").join("").split("(").join("").split("?").join("").split(":").join("").split(";").join("").toLowerCase().split(' '); // remove . , ! ? :

    while (splitString.indexOf("\r") !== -1 || splitString.indexOf('') !== -1) {
        splitString.splice(splitString.indexOf(""), 1); // deleting of an empty elements
    }

    const makeUniq = (arr) => {
        const uniqSet = new Set(arr); // unique list
        return [...uniqSet];
    }

    const newArr = makeUniq(splitString);

    resultArray = getWords(readFile, newArr)
    console.log(resultArray);



}
