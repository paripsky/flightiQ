/**
 * @param {Express.Response} res
 * @param {string} message
 * @param {number} status
 */
const errorResponse = (res, message, status = 500) => {
  res.status(status).send({
    data: null,
    error: message
  });
};

module.exports = {
  errorResponse
};
