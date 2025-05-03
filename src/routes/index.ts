import { Router } from "express";
import authRouter from "./auth";
import calendarRouter from "./calendar";

const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/calendar", calendarRouter);

export default apiRouter;
