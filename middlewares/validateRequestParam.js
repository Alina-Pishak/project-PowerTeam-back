const { HttpError } = require("../helpers");

const validateRequestParam = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.params);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = validateRequestParam;
