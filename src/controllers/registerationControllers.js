import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const newUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      cpassword,
      phoneNumber,
      driveLicense,
      vehicleRegistrations,
      authorization,
    } = req.body;

    if (password !== cpassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = new User({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      role: 1012,
      driveLicense,
      vehicleRegistrations,
      authorization,
    });

    // Save the new user to the database
    await newUser.save();
    res.status(201).json({
      message: "User added successfully",
    });
  } catch (error) {
    console.error("Error adding user:", error.message);
    res
      .status(500)
      .json({ message: "Error adding user", error: error.message });
  }
};
