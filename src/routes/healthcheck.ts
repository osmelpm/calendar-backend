import { Router } from "express";
import { health } from "../controllers";

const router = Router();

router.get("/", health);

export default router;
