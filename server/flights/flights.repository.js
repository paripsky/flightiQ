let flights, PNR;

const getFlights = () => flights;
const setFlights = _flights => (flights = _flights);

const getPNR = () => PNR;
const setPNR = _PNR => (PNR = _PNR);

module.exports = {
  getFlights,
  getPNR,
  setFlights,
  setPNR
};
