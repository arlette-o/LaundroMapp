import mongoose from "mongoose";
import { NextResponse } from "next/server";

const URI = process.env.MONGO_URI;

const connectToMongo = async () => {
  if (!URI) throw new Error("Missing MongoDB URI");

  if (mongoose.connections[0].readyState) return true;
  try {
    await mongoose.connect(URI, { connectTimeoutMS: 50000 });
    console.log("Successful connection to database");
    return true;
  } catch (error: any) {
    console.error("Error: Mongo connection error", error.message);
  }
};

export default connectToMongo;
