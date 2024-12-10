import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const newUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (email === "null") {
      return res
        .status(400)
        .json({ message: "Some required information is missing" });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      role: 1012,
    });

    await newUser.save();
    res.status(200).json({ message: "user added successfully" });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Error adding user", error });
  }
};
