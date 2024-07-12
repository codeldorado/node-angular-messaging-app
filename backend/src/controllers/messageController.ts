import { Request, Response } from "express";

const messages: { message: string; user: string; timestamp: string }[] = [];

export const getMessages = (req: Request, res: Response): void => {
  res.json(messages);
};

export const postMessage = (req: Request, res: Response): void => {
  const { message, user } = req.body;
  const timestamp = new Date().toISOString();
  messages.push({ message, user, timestamp });
  res.json({ message: "Message sent successfully" });
};
