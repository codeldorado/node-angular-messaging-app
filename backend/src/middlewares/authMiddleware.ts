import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers["x-access-token"] as string;
  if (!token) {
    res.status(403).json({ error: "No token provided" });
    return;
  }

  jwt.verify(token, "your_jwt_secret", (err, decoded) => {
    if (err) {
      res.status(500).json({ error: "Failed to authenticate token" });
      return;
    }
    req.userId = (decoded as any).id;
    next();
  });
};

export default verifyToken;
