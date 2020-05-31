const express = require('express');
const router = express.Router();
const { errorResponse } = require('../utils/errorResponse');
const { dataResponse } = require('../utils/dataResponse');

const flightsService = require('./flights.service');

/**
 * POST /api/flights/
 */
router.post('/', (req, res) => {
  const flights = req.body;

  flightsService.setFlights(flights);
  dataResponse(res, true);
});

router.post('/PNR', (req, res) => {
  const PNR = req.body;

  flightsService.setPNR(PNR);
  dataResponse(res, true);
});

router.get('/assignment', (req, res) => {
  try {
    const assignment = flightsService.calculateAssignedFlights();
    dataResponse(res, assignment);
  } catch (error) {
    errorResponse(res, error.message);
  }
});

module.exports = router;
