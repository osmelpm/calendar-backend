import jwt from "jsonwebtoken";
import { envs } from "../config";

export type JwtPayload = {
  uid: string;
  name: string;
  email: string;
};

export const generateJWT = (payload: JwtPayload) => {
  return jwt.sign(payload, envs.JWT_SECRET, {
    expiresIn: envs.JWT_EXPIRES_IN as jwt.SignOptions["expiresIn"],
  });
};
