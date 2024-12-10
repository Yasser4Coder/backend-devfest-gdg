import express from "express";
import { newUser } from "../controllers/registerationControllers.js";
import { loginUser } from "../controllers/loginController.js";

const router = express.Router();

router.post("/newUser", newUser);
router.post("/login", loginUser);

export default router;
