import { Router } from "express";
import { sendEmail } from "../controller/sendEmail.copntroller.js";

const router = Router();

router.post("/send-email", sendEmail);

export default router;
