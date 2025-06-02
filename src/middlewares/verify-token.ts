import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { envs } from "../config";
import { JwtPayload } from "../helpers/jwt";

declare global {
  namespace Express {
    interface Request {
      user?: { uid: string; name: string; email: string };
    }
  }
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const bearerToken = req.header("authorization");

  if (!bearerToken) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  const token = bearerToken.split(" ")[1];

  try {
    const { uid, name, email } = jwt.verify(
      token,
      envs.JWT_SECRET,
      {},
    ) as JwtPayload;

    req.user = { uid, name, email };

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};
