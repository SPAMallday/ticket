import { Request, Response } from "express";
import { getAuth } from "../services/authService";

export async function getTokenHandler(req: Request, res: Response) {
    const code = req.query.code as string;
    const result = await getAuth(code);

    return res.json({ msg: "END", result: result });
}
