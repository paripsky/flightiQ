/**
 * @param {Express.Response} res
 * @param {any} data
 * @param {number} status
 */
const dataResponse = (res, data, status = 200) => {
  res.status(status).send({
    data,
    error: null
  });
};

module.exports = {
  dataResponse
};
