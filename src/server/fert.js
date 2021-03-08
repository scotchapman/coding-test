const path = require('path');
const fs = require('fs');

const getFert = (req, res) => {
  let rawdata = fs.readFileSync(path.join(__dirname, 'sample.json'));
  let student = JSON.parse(rawdata);
  return res.send(student);
}

exports.getFert = getFert;