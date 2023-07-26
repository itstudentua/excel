// https://zetcode.com/javascript/exceljs/

function writeFile(resultArr) {
    const Excel = require('exceljs');

    const wb = new Excel.Workbook();
    const ws = wb.addWorksheet('English words');

    for (const item of resultArr) {
        ws.addRow([item]);
    }


    wb.xlsx
        .writeFile("./excel/subtitles.xlsx")
        .then(() => {
            console.log('file created');
        })
        .catch(err => {
            console.log(err.message);
        });
}

module.exports.writeFile = writeFile;