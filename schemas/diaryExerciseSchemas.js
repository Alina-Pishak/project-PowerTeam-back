const Joi = require("joi");

const createExercise = Joi.object({
  exercise: Joi.string().required(),
  date: Joi.date().iso().required().messages({
    "date.base":
      "Date must have any valid ISO date format, for example YYYY-MM-DD.",
    "any.required": "missing required date field",
  }),
  time: Joi.number().min(0.01).max(3).required(),
  burnedCalories: Joi.number().required(),
});

const getDiaryByDate = Joi.object({
  date: Joi.date().iso().required().messages({
    "date.base":
      "Date must have any valid ISO date format, for example YYYY-MM-DD.",
    "any.required": "date field is required.",
  }),
});
const schemas = {
  createExercise,
  getDiaryByDate,
};

module.exports = schemas;
