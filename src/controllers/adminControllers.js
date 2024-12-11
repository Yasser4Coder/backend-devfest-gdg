import User from "../models/User.js";

export const giveExpertAccess = async (req, res) => {
  try {
    const { id } = req.params;
    const selectedUser = await User.findById(id);

    if (!selectedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "this user now is Expert" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
