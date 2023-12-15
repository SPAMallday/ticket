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
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
dotenv_1.default.config();
const app = (0, express_1.default)();
const ticketRoute = ticket_1.default;
const port = process.env.SERVER_PORT;
app.use(express_1.default.json()); // 클라이언트 요청 body를 json으로 파싱
app.listen(port, () => {
    console.log(`[SERVER]: Server is running at port ${port}`);
});
// 테스트 완료 지우기
app.get("/", (req, res) => {
    res.send("Typescript + Node.js + Express Server 라우터 테스트");
});
// DB 연결
db_1.AppDataSource.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("[DB]: Data Source has been initialized!");
}))
    .catch((error) => console.log(error));
app.use("/ticket", ticketRoute); // ticket 라우터 연결
app.use("/schedule", schedule_1.default); // schedule 라우터 연결
