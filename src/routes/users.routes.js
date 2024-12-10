import express from "express";
import { getUserById, getUsers } from "../controllers/usersController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);

export default router;