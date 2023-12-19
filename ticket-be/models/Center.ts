import "reflect-metadata";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
    JoinColumn,
    PrimaryColumn,
} from "typeorm";
import { Brand } from "./Brand";

@Entity()
export class Center extends BaseEntity {
    @PrimaryGeneratedColumn()
    center_id!: number;

    @PrimaryColumn("number")
    @ManyToOne((type) => Brand, (brand) => brand.centers, {
        onDelete: "CASCADE", // 브랜드가 삭제되면 center도 삭제
    })
    @JoinColumn({ name: "brand_id", referencedColumnName: "brand_id" })
    brand_id!: Brand;

    @Column({ type: "varchar", length: 20 })
    center_name!: string;

    // TODO 사용할 함수들 모두 작성
}
