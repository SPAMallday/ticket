import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
} from "typeorm";
import { Brand } from "./Brand";
import { User } from "./User";

@Entity()
export class Ticket extends BaseEntity {
    @PrimaryGeneratedColumn({ comment: "회원권 ID" })
    ticket_id!: number;

    @Column("varchar", { length: 2, comment: "형태" })
    type!: string;

    @Column({ type: "tinyint", comment: "기간", nullable: true })
    term?: number;

    @Column({ comment: "정지 횟수" })
    stop_count!: number;

    @Column("varchar", { length: 2, comment: "활성상태" })
    name!: string;

    @Column("date", { comment: "시작일" })
    start_date!: Date;

    @Column("date", { comment: "종료일" })
    end_date!: Date;

    // Relations
    @ManyToOne((type) => Brand, (brand) => brand.brand_id, {
        onDelete: "CASCADE",
    })
    brand_id?: Brand;

    @ManyToOne((type) => User, (user) => user.user_id, {
        onDelete: "CASCADE",
    })
    user_id?: User;

    // TODO 사용할 함수들 모두 작성
}
