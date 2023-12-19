import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    user_id!: number;

    @Column("bigint")
    kakao_id!: number;

    // TODO 사용할 함수들 모두 작성
}
