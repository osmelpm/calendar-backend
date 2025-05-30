/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from "express";
import { body } from "express-validator";

import { createUser, loginUser, refreshToken } from "../controllers";
import { fieldValidator, verifyToken } from "../middlewares";

export const router = Router();

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").notEmpty().withMessage("Password is required"),
    fieldValidator,
  ],
  loginUser,
);

router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").notEmpty().withMessage("Password is required"),
    fieldValidator,
  ],
  createUser,
);

router.get("/refresh-token", verifyToken, refreshToken);

export default router;
