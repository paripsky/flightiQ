const express = require('express');
const bodyParser = require('body-parser');
const flightsRouter = require('./flights/flights.router');

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Woosh ✈️');
});

app.use('/api/flights', flightsRouter);

app.listen(PORT, () =>
  console.log(`Rubiq flight app listening at http://localhost:${PORT}`)
);
