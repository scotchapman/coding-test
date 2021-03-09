const path = require('path');
const fs = require('fs');

const dbfile = path.join(__dirname, 'db.json');

const readFile = () => {
  const rawdata = fs.readFileSync(dbfile);
  let fertilizers= JSON.parse(rawdata);
  return fertilizers;
}
const writeFile = (data) => {
  let dataString = JSON.stringify(data);
  fs.writeFileSync(dbfile, dataString);
}

exports.writeFile = writeFile;
exports.readFile = readFile;