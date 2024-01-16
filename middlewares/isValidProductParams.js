const { HttpError } = require("../helpers");
const { isValidObjectId } = require("mongoose");

const isValidProductParams = async (req, res, next) => {
  const { productId } = req.params;
  if (!isValidObjectId(productId)) {
    next(HttpError(400, `${productId} is not valid product ID`));
  }
  next();
};
module.exports = isValidProductParams;
