import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const users: { username: string; password: string }[] = []; // In-memory user store

export const register = (req: Request, res: Response): void => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });
  res.json({ message: "User registered successfully" });
};

export const login = (req: Request, res: Response): void => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ id: user.username }, "your_jwt_secret", {
      expiresIn: 86400,
    });
    res.json({ auth: true, token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
};
