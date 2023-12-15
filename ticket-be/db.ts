import { DataSource } from "typeorm";
import dotenv from "dotenv";

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
    entities: [], // 사용할 엔티티 목록
    migrations: [],
    subscribers: [],
});
