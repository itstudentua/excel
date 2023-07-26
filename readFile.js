// https://zetcode.com/javascript/exceljs/

const ExcelJS = require('exceljs');

const importUniqueArr = require("./js/uniqueWords");
const uniqueArray = importUniqueArr.newArr;
const importNewUniqueWords = require("./js/newUniqueWords");
const getWords = importNewUniqueWords.getWords;
const importWriteFile = require("./js/writeFile");
const writeFile = importWriteFile.writeFile;



const wb = new ExcelJS.Workbook();
const fileName = "./excel/iknow.xlsx";

let readArr;

wb.xlsx.readFileSync(fileName).then(() => {

    const ws = wb.getWorksheet('English words');
    const c1 = ws.getColumn(1);

    const content = [];

    c1.eachCell(c => {
        content.push(c.value);
    });

    fillArray(content);


}).catch(err => {
    console.log(err.message);
});

function fillArray(content) {
    readArr = content;
};


// here should be async/await but i don't know how to do it yet 


setTimeout(() => {
    const finalResultArr = getWords(readArr, uniqueArray);
    const newWordsCount = finalResultArr.length;
    console.log(`New words for me: ${newWordsCount}`);
    writeFile(finalResultArr);
}, 1000);
