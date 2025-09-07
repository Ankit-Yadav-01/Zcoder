import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;

const URL = `mongodb+srv://${user}:${pass}@cluster0.qtemtuf.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const connection = async () => {
  try {
    await mongoose.connect(URL);
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.log("❌ Database connection failed:", error.message);
  }
};

export default connection;
