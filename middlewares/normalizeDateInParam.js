const { dateToShortFormat } = require("../helpers");

const normalizeDateInParam = async (req, res, next) => {
  const { date } = req.params;

  req.params.date = dateToShortFormat(date);
  next();
};

module.exports = normalizeDateInParam;
