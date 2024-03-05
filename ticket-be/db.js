"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.DBOptions = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const Brand_1 = require("./models/Brand");
const Partner_1 = require("./models/Partner");
const User_1 = require("./models/User");
const Center_1 = require("./models/Center");
const Freeze_1 = require("./models/Freeze");
const Ticket_1 = require("./models/Ticket");
const Visit_1 = require("./models/Visit");
dotenv_1.default.config();
exports.DBOptions = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,
    database: "db",
};
exports.AppDataSource = new typeorm_1.DataSource(Object.assign({ type: "mysql", synchronize: true, logging: false, entities: [User_1.User, Brand_1.Brand, Partner_1.Partner, Center_1.Center, Freeze_1.Freeze, Ticket_1.Ticket, Visit_1.Visit], migrations: [], subscribers: [] }, exports.DBOptions));
