import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Brand } from "./models/Brand";
import { Partner } from "./models/Partner";
import { User } from "./models/User";
import { Center } from "./models/Center";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,
    database: "db",
    synchronize: true,
    logging: false,
    entities: [User, Brand, Partner, Center], // 사용할 엔티티 목록
    migrations: [],
    subscribers: [],
});
