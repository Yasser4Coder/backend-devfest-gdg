import express from "express";
import { addStatment } from "../controllers/statmentControllers.js";

const router = express.Router();

router.post("/statment", addStatment);

export default router;
