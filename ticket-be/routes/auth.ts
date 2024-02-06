import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    let code = req.params.code;
    console.log(code);

    res.send("Auth 라우터 테스트");
});

export default router;
