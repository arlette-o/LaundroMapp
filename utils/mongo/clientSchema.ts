import mongoose from "mongoose";

const Schema = mongoose.Schema;

const client = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
});

const Client = mongoose.model("Client", client);

export default Client;
