import express from "express";
import { loginController, registerController } from "../controllers/authController";

const authRoutes = express.Router();

authRoutes.post("/login", loginController);
authRoutes.post("/register", registerController);

export { authRoutes };
