import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { AppDataSource } from "../db";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    user_id!: number;

    @Column("bigint")
    kakao_id!: number;
}
