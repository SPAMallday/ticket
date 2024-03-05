import express, { Express } from "express";
import TicketRouter from "./routes/ticket";
import ScheduleRouter from "./routes/schedule";
import AuthRouter from "./routes/auth";
import dotenv from "dotenv";
import cors from "cors";
import { AppDataSource, DBOptions } from "./db";
import session from "express-session";
const MySQLStore = require("express-mysql-session")(session);

dotenv.config();

const app: Express = express();
const ticketRoute = TicketRouter;
const port = process.env.SERVER_PORT;

app.use(express.json()); // 클라이언트 요청 body를 json으로 파싱

// TODO [배포 시] CORS 설정 변경 필요
let corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};
app.use(cors(corsOptions));

// 서버 가동 시 메세지
app.listen(port, () => {
    console.log(`[SERVER]: Server is running at port ${port}`);
});

// DB 연결
// TypeORM
AppDataSource.initialize()
    .then(async () => {
        console.log("[DB]: Data Source has been initialized!");
    })
    .catch((error) => console.log(error));

// AuthSession
const sessionStore = new MySQLStore({
    clearExpired: true, // 만료 세션 자동 삭제
    checkExpirationInterval: 1800000, // 세션 만료 삭제 주기 = 30분 (milliseconds)
    expiration: 86400000 * 3, // 세션 유효 기간 = 3일 (milliseconds)
    ...DBOptions,
});

app.use(
    session({
        secret: process.env.SESSION_SECRET!,
        store: sessionStore,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
        },
    })
);

sessionStore
    .onReady()
    .then(() => {
        console.log("[DB]: AuthSession MySQLStore ready!");
    })
    .catch((error: any) => console.log(error));

// 라우터
app.use("/ticket", ticketRoute); // ticket 라우터 연결
app.use("/schedule", ScheduleRouter); // schedule 라우터 연결
app.use("/auth", AuthRouter); // schedule 라우터 연결
