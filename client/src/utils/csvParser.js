const validateCsv = () => true;

/**
 * parses a csv string to a two dimentional array
 * @param {string} csvText
 */
export const csvParser = csvText => {
  if (typeof csvText !== 'string') {
    throw new Error('the csv sent to the csvParse must be of type string');
  }

  const lines = csvText.split('\n');
  const csvArray = lines.map(line => line.split(','));
  const csvValidated = validateCsv(csvArray);

  if (!csvValidated) {
    throw new Error('the CSV is not in the correct format');
  }

  return csvArray;
};

export const csvToFlight = csvText => {
  const csvArray = csvParser(csvText);

  return csvArray.filter(Boolean).map(line => {
    const [id, origin, destination, capacity] = line;

    return {
      id,
      origin,
      destination,
      capacity
    };
  });
};

export const csvToPNR = csvText => {
  const csvArray = csvParser(csvText);

  return csvArray.filter(Boolean).map(line => {
    const [id, passengers, origin, destination] = line;

    return {
      id,
      passengers,
      origin,
      destination
    };
  });
};
