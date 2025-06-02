import { compareSync, hashSync } from "bcrypt";
import { Request, Response } from "express";

import { generateJWT } from "../helpers/jwt";
import { User } from "../models";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: `User with email ${email} already exists`,
      });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    newUser.password = hashSync(password, 10);

    await newUser.save();

    const token = generateJWT({ name: newUser.name, uid: newUser.id, email });

    res.json({
      uid: newUser.id,
      name,
      email,
      token,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: `User with email ${email} not found`,
      });
    }

    if (!compareSync(password, user.password)) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    const token = generateJWT({ name: user.name, uid: user.id, email });

    res.json({
      uid: user.id,
      name: user.name,
      email,
      token,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  const { uid, name, email } = req.user!;

  const token = generateJWT({ name, uid, email });

  res.json({ uid, name, email, token });
};
