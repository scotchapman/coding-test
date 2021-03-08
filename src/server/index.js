const express = require('express');
const cors = require('cors');

const fert = require('./fert');

const port = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.options('*', cors());

app.get('/api/fert', fert.getFert);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});