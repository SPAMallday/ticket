"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ticket_1 = __importDefault(require("./routes/ticket"));
const schedule_1 = __importDefault(require("./routes/schedule"));
const auth_1 = __importDefault(require("./routes/auth"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db");
const express_session_1 = __importDefault(require("express-session"));
const MySQLStore = require("express-mysql-session")(express_session_1.default);
dotenv_1.default.config();
const app = (0, express_1.default)();
const ticketRoute = ticket_1.default;
const port = process.env.SERVER_PORT;
app.use(express_1.default.json()); // 클라이언트 요청 body를 json으로 파싱
// TODO [배포 시] CORS 설정 변경 필요
let corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
// 서버 가동 시 메세지
app.listen(port, () => {
    console.log(`[SERVER]: Server is running at port ${port}`);
});
// DB 연결
// TypeORM
db_1.AppDataSource.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("[DB]: Data Source has been initialized!");
}))
    .catch((error) => console.log(error));
// AuthSession
const sessionStore = new MySQLStore(Object.assign({ clearExpired: true, checkExpirationInterval: 1800000, expiration: 86400000 * 3 }, db_1.DBOptions));
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
    },
}));
sessionStore
    .onReady()
    .then(() => {
    console.log("[DB]: AuthSession MySQLStore ready!");
})
    .catch((error) => console.log(error));
// 라우터
app.use("/ticket", ticketRoute); // ticket 라우터 연결
app.use("/schedule", schedule_1.default); // schedule 라우터 연결
app.use("/auth", auth_1.default); // schedule 라우터 연결
