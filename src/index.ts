import express from "express";
import cors from "cors";
import { envs } from "./config";
import apiRouter from "./routes";
import { dbConnection } from "./database/config";

const app = express();
dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRouter);

app.listen(envs.PORT, () =>
  console.log(`Server is running on port ${envs.PORT}`)
);
