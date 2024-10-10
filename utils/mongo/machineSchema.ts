import mongoose from "mongoose";

const machineSchema = new mongoose.Schema({
  ID: { type: String, required: true },
  available: { type: Boolean, required: true },
  unavailable: { type: Boolean, required: true },
  inUse: { type: Boolean, required: true },
  reserved: { type: Boolean, required: true },
  duration: { type: Date },
  reserveTime: { type: Date },
});

const MachineSchema =
  mongoose.models.Machine || mongoose.model("Machine", machineSchema);

export default MachineSchema;
