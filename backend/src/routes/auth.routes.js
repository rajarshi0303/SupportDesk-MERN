import express from "express";

import {
  login,
  register,
  getMe,
  refreshTokenHandler,
  logout,
} from "../controllers/authController.js";

import { authenticate } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/refresh", refreshTokenHandler);
router.get("/me", authenticate, getMe);

export default router;
