import mongoose from "mongoose";

const uri = process.env.Mongo_DB;

export const connectMongoDb = () => {
  try {
    mongoose.connect(uri);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
