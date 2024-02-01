import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
} from "typeorm";
import { Ticket } from "./Ticket";

@Entity()
export class Freeze extends BaseEntity {
    @PrimaryGeneratedColumn({ comment: "ID" })
    freeze_id!: number;

    @Column("date", { comment: "시작일" })
    start_date!: Date;

    @Column("date", { comment: "종료일" })
    end_date!: Date;

    @Column("varchar", { length: 20, comment: "메모" })
    memo?: string;

    // Relations
    @ManyToOne((type) => Ticket, (ticket) => ticket.ticket_id, {
        onDelete: "CASCADE",
    })
    ticket_id?: Ticket;

    // TODO 사용할 함수들 모두 작성
}
