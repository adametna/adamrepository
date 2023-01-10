import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  adress: String,
  dateOfBirth: Date,
  createdAt: Date,
  updatedAt: Date,
});

export default model("User_data", UserSchema);
