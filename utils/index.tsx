import mongoose from "mongoose";
import { NextResponse } from "next/server";

const URI = process.env.MONGO_URI;

declare global {
  var mongoose: any;
}

let cached = global.mongoose;

const connectToMongo = async () => {
  if (!URI) throw new Error("Missing MongoDB URI");

  if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      maxPoolSize: 2,
      maxIdleTimeMS: 60000,
      bufferCommands: false,
      serverSelectionTimeoutMS: 8000, //Stay within Vercel's 10 second function limit
      heartbeatFrequencyMS: 10000, //Attempting to see if this reduces query timeouts
    };

    console.log("---Connecting to MongoDB---");

    try {
      cached.promise = mongoose
        .connect(process.env.MONGO_URI || "", opts)
        .then((mongoose) => {
          console.log("---Connected!---");
          return mongoose;
        });
    } catch (e) {
      console.log("---Error connecting to MongoDB---", e);
      throw new Error("Error connecting to database");
    }
  }
};

export default connectToMongo;
