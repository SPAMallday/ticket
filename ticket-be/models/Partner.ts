import {
    Entity,
    Column,
    BaseEntity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Brand } from "./Brand";

@Entity()
export class Partner extends BaseEntity {
    @PrimaryGeneratedColumn()
    partner_id!: number;

    @Column({
        type: "varchar",
        length: 255,
        comment: "연계 그룹, {피커스,훅}",
    })
    partner_group!: string;

    @Column({
        type: "varchar",
        length: 10,
        comment: "지역, {서울}",
    })
    location!: string;

    // Relations
    @OneToMany((type) => Brand, (brand) => brand.partner_id)
    brands?: Brand[];

    // TODO 사용할 함수들 모두 작성
}
