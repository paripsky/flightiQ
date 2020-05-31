const flightsRepository = require('./flights.repository');

const calculateAssignedFlights = () => {
  const flights = flightsRepository.getFlights();
  const PNR = flightsRepository.getPNR();

  if (!flights || !PNR) {
    throw new Error(`flights or PNR weren't uploaded yet`);
  }

  return {
    flights,
    PNR
  };
};

const setFlights = flightsRepository.setFlights;
const setPNR = flightsRepository.setPNR;

module.exports = {
  calculateAssignedFlights,
  setPNR,
  setFlights
};
