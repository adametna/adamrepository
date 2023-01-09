import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: String,
  price: Number,
  image: String,
  categoryName: String,
  createdAt: Date,
  updatedAt: Date,
});

export default model("Product_data", ProductSchema);
