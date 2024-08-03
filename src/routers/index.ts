import { Router } from "express";
import send from "../routers/sendemail.router.js";

const router = Router();

router.use("/", send);

export default router;
