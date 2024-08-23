import mongoose from "mongoose";

const clientInfoSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String, required: true },
});

const ClientInfoModel =
  mongoose.models.ClientInfo || mongoose.model("ClientInfo", clientInfoSchema);

export default ClientInfoModel;
