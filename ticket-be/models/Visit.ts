import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
} from "typeorm";
import { Ticket } from "./Ticket";
import { User } from "./User";

@Entity()
export class Visit extends BaseEntity {
    @PrimaryGeneratedColumn({ comment: "방문 ID" })
    visit_id!: number;

    @Column("date", { comment: "날짜" })
    date!: Date;

    @Column("varchar", { length: 100, comment: "코멘트" })
    comment?: string;

    @Column({ comment: "다회차감" })
    count?: number;

    // 지점은 개별 저장
    @Column({ comment: "지점ID" })
    center_id!: number;

    @Column({ comment: "브랜드ID" })
    brand_id!: number;

    // Relations
    @ManyToOne((type) => Ticket, (ticket) => ticket.ticket_id, {
        onDelete: "CASCADE",
    })
    ticket_id!: Ticket;

    @ManyToOne((type) => User, (user) => user.user_id, {
        onDelete: "CASCADE",
    })
    user_id!: Ticket;

    // TODO 사용할 함수들 모두 작성
}
