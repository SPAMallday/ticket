import express, { Express, Request, Response } from "express";
import TicketRouter from "./routes/ticket";
import ScheduleRouter from "./routes/schedule";
import dotenv from "dotenv";
import { AppDataSource } from "./db";

dotenv.config();

const app: Express = express();
const ticketRoute = TicketRouter;
const port = process.env.SERVER_PORT;

app.use(express.json()); // 클라이언트 요청 body를 json으로 파싱

app.listen(port, () => {
    console.log(`[SERVER]: Server is running at port ${port}`);
});

// 테스트 완료 지우기
app.get("/", (req: Request, res: Response) => {
    res.send("Typescript + Node.js + Express Server 라우터 테스트");
});

// DB 연결
// TODO 이대로 DataSource를 가져다 써도 되는가?
AppDataSource.initialize()
    .then(async () => {
        console.log("[DB]: Data Source has been initialized!");
    })
    .catch((error) => console.log(error));

app.use("/ticket", ticketRoute); // ticket 라우터 연결
app.use("/schedule", ScheduleRouter); // schedule 라우터 연결
