import Statement from "../models/Statement.js";

export const addStatment = async (req, res) => {
  try {
    const {
      location,
      Wilaya,
      date,
      time,
      VehicleStatus,
      description,
      vehicleR,
      images,
      type,
    } = req.body;

    const newStatment = new Statement({
      location,
      Wilaya,
      date,
      time,
      VehicleStatus,
      description,
      vehicleR,
      images,
      type,
    });

    await newStatment.save();
    res.status(201).json({
      message: "Statment added successfully",
    });
  } catch (error) {
    console.error("Error adding Statment:", error.message);
    res
      .status(500)
      .json({ message: "Error adding Statment", error: error.message });
  }
};
