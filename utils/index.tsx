import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

const connectToMongo = async () => {
  if (!URI) throw new Error("Missing MongoDB URI");

  if (mongoose.connections[0].readyState) return true;
  try {
    await mongoose.connect(URI);
    console.log("Successful connection to database");
    return true;
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
