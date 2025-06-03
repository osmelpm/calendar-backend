import { Request, Response } from "express";
import { matchedData } from "express-validator";
import { Event } from "../models/calendar-event";

type Event = {
  title: string;
  notes?: string;
  start: string;
  end: string;
};

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find().populate("user", "name");

    res.json(events);
  } catch (error) {
    console.error(error);
  }
};

export const createEvent = async (req: Request, res: Response) => {
  const data = matchedData<Event>(req);
  const event = new Event({ ...data, user: req.user!.uid });

  try {
    await event.save();

    res.json(event);
  } catch (error) {
    console.error(error);
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  const { id } = matchedData<{ id: string }>(req);
  const data = matchedData<Event>(req);
  const userId = req.user?.uid;

  try {
    const event = await Event.findById(id);

    if (!event) return res.status(404).json({ message: "Event not found" });

    if (event.user.toString() !== userId)
      return res
        .status(403)
        .json({ message: `You don't have privileges to update this event` });

    const updatedEvent = await Event.findByIdAndUpdate(id, data, { new: true });

    res.json(updatedEvent);
  } catch (error: any) {
    console.error(error);
    res.json({ message: error.message });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  const { id } = matchedData<{ id: string }>(req);
  const userId = req.user?.uid;

  try {
    const event = await Event.findById(id);

    if (!event) return res.status(404).json({ message: "Event not found" });

    if (event.user.toString() !== userId)
      return res
        .status(403)
        .json({ message: `You don't have privileges to delete this event` });

    const deletedEvent = await Event.findByIdAndDelete(id);

    res.json(deletedEvent);
  } catch (error: any) {
    console.error(error);
    res.json({ message: error.message });
  }
};
