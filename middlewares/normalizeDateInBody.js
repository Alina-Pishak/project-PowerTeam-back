const { dateToShortFormat } = require("../helpers");

const normalizeDateInBody = async (req, res, next) => {
  const { date } = req.body;

  req.body.date = dateToShortFormat(date);
  next();
};

module.exports = normalizeDateInBody;
