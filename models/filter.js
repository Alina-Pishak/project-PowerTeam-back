const { Schema, model } = require("mongoose");

const typesSchema = new Schema({
  filter: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
});

const Filters = model("filter", typesSchema);

module.exports = Filters;
