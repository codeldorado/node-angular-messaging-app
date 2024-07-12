import { Application, Request, Response } from "express";

const chatbotPlugin = (app: Application): void => {
  app.post("/chatbot", (req: Request, res: Response) => {
    // We can add any chatbot logic here

    res.json({ message: "Chatbot response" });
  });
};

export default chatbotPlugin;
