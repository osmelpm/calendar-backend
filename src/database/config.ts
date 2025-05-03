import mongoose from "mongoose";
import { envs } from "../config";

export const dbConnection = async () => {
  try {
    await mongoose.connect(envs.DB_CNN);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error("Error connecting to the database");
  }
};
