import joi from "joi";
import "dotenv/config";

interface IEnvConfig {
  PORT: number;
  NODE_ENV: "development" | "production";
  DB_CNN: string;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
    NODE_ENV: joi.string().valid("development", "production").required(),
    DB_CNN: joi.string().required(),
    JWT_SECRET: joi.string().required(),
    JWT_EXPIRES_IN: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const envs: IEnvConfig = value;
