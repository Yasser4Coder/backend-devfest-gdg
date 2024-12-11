import mongoose from "mongoose";

const statementSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  client: {
    type: String,
  },
  type: {
    type: String,
  },
  location: {
    type: String,
  },
  time: {
    type: String,
  },
  insurance: { type: String },
  status: {
    type: String,
  },
  description: {
    type: String,
  },
  images: {
    type: [String],
  },
  vehicleR: {
    type: String,
  },
  VehicleStatus: {
    type: String,
  },
  Wilaya: {
    type: String,
  },
});

const Statement = mongoose.model("Statement", statementSchema);

export default Statement;
