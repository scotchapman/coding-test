const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')

const fertilizers = require('./fertilizers');

const port = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.options('*', cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/api/fertilizers', fertilizers.getFertilizers);
app.post('/api/fertilizers/order', fertilizers.orderFertilizer);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});