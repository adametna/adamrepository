import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  name: String,
  createdAt: Date,
  updatedAt: Date,
});

export default model("Category_data", CategorySchema);
