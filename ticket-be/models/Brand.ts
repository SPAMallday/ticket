import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from "typeorm";
import { Partner } from "./Partner";
import { Center } from "./Center";

@Entity()
export class Brand extends BaseEntity {
    @PrimaryGeneratedColumn({ comment: "브랜드 ID" })
    brand_id!: number;

    @Column("varchar", { length: 20, comment: "브랜드 이름" })
    name!: string;

    // Relations
    @ManyToOne((type) => Partner, (partner) => partner.brands)
    @JoinColumn({ name: "partner_id" })
    partner_id?: Partner;

    @OneToMany((type) => Center, (center) => center.brand_id, {
        cascade: true,
    })
    centers?: Center[];

    // TODO 사용할 함수들 모두 작성
}
