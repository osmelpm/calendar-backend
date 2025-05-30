import {
  createEvent,
  deleteEvent,
  updateEvent,
  getAllEvents,
} from "../controllers";
import { Router } from "express";
import { body, param } from "express-validator";
import { fieldValidator, verifyToken } from "../middlewares";

const router = Router();

router.use(verifyToken);

router.get("/events", getAllEvents);

router.post(
  "/events",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("notes").notEmpty().optional(),
    body("start")
      .notEmpty()
      .isISO8601({ strict: true })
      .withMessage("Invalid date format"),
    body("end")
      .notEmpty()
      .isISO8601({ strict: true })
      .withMessage("Invalid date format"),
    fieldValidator,
  ],
  createEvent,
);

router.put(
  "/events/:id",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("notes").notEmpty().optional(),
    body("start")
      .notEmpty()
      .isISO8601({ strict: true })
      .withMessage("Invalid date format"),
    body("end")
      .notEmpty()
      .isISO8601({ strict: true })
      .withMessage("Invalid date format"),
    param("id").isMongoId().withMessage("Invalid mongoId format"),
    fieldValidator,
  ],
  updateEvent,
);

router.delete(
  "/events/:id",
  [
    param("id").isMongoId().withMessage("Invalid mongoId format"),
    fieldValidator,
  ],
  deleteEvent,
);

export default router;
