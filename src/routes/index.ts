import { Router } from "express";
import authRouter from "./auth";
import calendarRouter from "./calendar";
import healthRouter from "./healthcheck";

const apiRouter = Router();

apiRouter.use("/health", healthRouter);
apiRouter.use("/auth", authRouter);
apiRouter.use("/calendar", calendarRouter);

export default apiRouter;
