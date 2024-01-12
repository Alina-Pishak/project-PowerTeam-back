import { Schema, model } from "mongoose";

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

export default Filters;
