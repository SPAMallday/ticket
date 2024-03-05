import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Brand } from "./models/Brand";
import { Partner } from "./models/Partner";
import { User } from "./models/User";
import { Center } from "./models/Center";
import { Freeze } from "./models/Freeze";
import { Ticket } from "./models/Ticket";
import { Visit } from "./models/Visit";

dotenv.config();

export const DBOptions = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,
    database: "db",
};

export const AppDataSource = new DataSource({
    type: "mysql",
    synchronize: true,
    logging: false,
    entities: [User, Brand, Partner, Center, Freeze, Ticket, Visit], // 사용할 엔티티 목록
    migrations: [],
    subscribers: [],
    ...DBOptions,
});
