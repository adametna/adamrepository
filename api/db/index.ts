import * as mongoose from "mongoose";

const server = "mongodb://127.0.0.1:27017/database";
mongoose.set("strictQuery", true);

export async function connect() {
  const connection = await mongoose.connect(server);
  console.log("Database connected");
  return connection;
}
