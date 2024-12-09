import mongoose from "mongoose";
import { NextResponse } from "next/server";

const URI = process.env.MONGO_URI;

const connectToMongo = async () => {
  if (!URI) throw new Error("Missing MongoDB URI");

  if (mongoose.connections[0].readyState) return true;
  try {
    await mongoose.connect(URI);
    console.log("Successful connection to database");
    return true;
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      error: "Mongo Connection Error",
      message: error.message,
    });
  }
};

export default connectToMongo;
