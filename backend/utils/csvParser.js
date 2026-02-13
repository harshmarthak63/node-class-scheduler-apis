const fs = require('fs');
const csv = require('csv-parser');

exports.parseCSV = (filePath) => {
  return new Promise((resolve) => {
    const rows = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', data => rows.push(data))
      .on('end', () => resolve(rows));
  });
};
