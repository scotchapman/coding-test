const { readFile, writeFile } = require('./dataAccess');

// Returns a list of fertilizers from the db.json file
const getFertilizers = (req, res) => {
  let fertilizers = readFile();
  return res.send(fertilizers);
}

// Given a fertilizer id, the quantity will be decreased by one.
const orderFertilizer = (req, res) => { 
  let fertilizers = readFile();

  let newQuantity;
  const modified = fertilizers.map((fertilizer) => {
    if (req.body.id === fertilizer.id) {
      newQuantity = fertilizer.quantity - 1;
      fertilizer.quantity = newQuantity;
    }
    return fertilizer;
  })

  writeFile(modified);
  return res.send({id: req.body.id, quantity: newQuantity});
}

exports.getFertilizers = getFertilizers;
exports.orderFertilizer = orderFertilizer;