import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./src/config/database.js";
import registerationRoute from "./src/routes/registeration.routes.js";
import statmentRoutes from "./src/routes/statments.routes.js";
import usersRoute from "./src/routes/users.routes.js";
import fs from "fs";
import bodyParser from "body-parser";

// Ensure that the upload directory exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Load environment variables
dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to the database
connectDatabase();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

app.use("/api/users", usersRoute);
app.use("/api/register", registerationRoute);
app.use("/api/statments", statmentRoutes);

// Default route for undefined endpoints
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
