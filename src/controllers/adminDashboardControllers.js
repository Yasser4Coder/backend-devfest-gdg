export const filterByName = async (req, res) => {
  const { name } = req.params;
  try {
    const selectedName = await "here".find({ fullName: name });
    res.status(200).json(selectedName);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
