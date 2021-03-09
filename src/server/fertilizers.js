const { readFile, writeFile } = require('./dataAccess');

// Returns a list of fertilizers from the db.json file
const getFertilizers = (req, res) => {
  let fertilizers = readFile();
  return res.send(fertilizers);
}

// Given a fertilizer id, the quantity will be decreased by one.
const orderFertilizer = (req, res) => { 
  let fertilizers = readFile();

  const modified = fertilizers.map((fertilizer) => {
    if (req.body.id === fertilizer.id) {
      fertilizer.quantity = fertilizer.quantity - 1;
    }
    return fertilizer;
  })

  writeFile(modified);
  return res.send('ordered');
}

exports.getFertilizers = getFertilizers;
exports.orderFertilizer = orderFertilizer;