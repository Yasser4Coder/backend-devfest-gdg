import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },

    role: {
      type: [Number],
      default: [1012], // Default role value, if applicable
    },
    driveLicense: {
      type: String,
      required: true, // File path is required
    },
    vehicleRegistrations: {
      type: String,
      required: true, // File path is required
    },
    authorization: {
      type: String,
      required: true, // File path is required
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set the creation timestamp
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  }
);

const User = mongoose.model("User", userSchema);

export default User;
