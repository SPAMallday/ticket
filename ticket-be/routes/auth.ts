import express, { Request, Response } from "express";
import { getTokenHandler } from "../controllers/authController";

const router = express.Router();

router.get("/", getTokenHandler);

export default router;
