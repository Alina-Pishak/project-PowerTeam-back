const { HttpError } = require("../helpers");
const { isValidObjectId } = require("mongoose");

const isValidProductParams = async (req, res, next) => {
  const { _id } = req.params;
  if (!isValidObjectId(_id)) {
    next(new HttpError(400, `${_id} is not valid _id`));
  }
  next();
};
module.exports = isValidProductParams;
