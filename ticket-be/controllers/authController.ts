import axios, { Axios, AxiosRequestConfig } from "axios";
import { Request, Response } from "express";
import { getToken } from "../services/authService";

export async function getTokenHandler(req: Request, res: Response) {
    const code = req.query.code as string;
    const result = await getToken(code);

    return res.json({ msg: "END", result: result });
}
