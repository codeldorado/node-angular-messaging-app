import { Router } from "express";
import { getMessages, postMessage } from "../controllers/messageController";
import verifyToken from "../middlewares/authMiddleware";

const router: Router = Router();

router.get("/", getMessages);
router.post("/", verifyToken, postMessage);

export default router;
