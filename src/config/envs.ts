import joi from "joi";
import "dotenv/config";

interface IEnvConfig {
  DB_CNN: string;
  JWT_EXPIRES_IN: string;
  JWT_SECRET: string;
  NODE_ENV: "development" | "production";
  PORT: number;
}

const envSchema = joi
  .object({
    DB_CNN: joi.string().required(),
    JWT_EXPIRES_IN: joi.string().required(),
    JWT_SECRET: joi.string().required(),
    NODE_ENV: joi.string().valid("development", "production").required(),
    PORT: joi.number().required(),
  })
  .unknown(true);

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const envs: IEnvConfig = value as IEnvConfig;
