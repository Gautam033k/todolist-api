import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@todolist.ijot0kj.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.set("strictQuery", false); //for deprication warning removal
  mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
  mongoose.connection.on("connected", () => {
    console.log("Database connection sucessfull");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Databse connection disconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("error connecting with DataBase");
  });
};

export default Connection;
