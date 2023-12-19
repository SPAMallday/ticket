"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Center = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Brand_1 = require("./Brand");
let Center = class Center extends typeorm_1.BaseEntity {
};
exports.Center = Center;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Center.prototype, "center_id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)("number"),
    (0, typeorm_1.ManyToOne)((type) => Brand_1.Brand, (brand) => brand.centers, {
        onDelete: "CASCADE", // 브랜드가 삭제되면 center도 삭제
    }),
    (0, typeorm_1.JoinColumn)({ name: "brand_id", referencedColumnName: "brand_id" }),
    __metadata("design:type", Brand_1.Brand)
], Center.prototype, "brand_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 20 }),
    __metadata("design:type", String)
], Center.prototype, "center_name", void 0);
exports.Center = Center = __decorate([
    (0, typeorm_1.Entity)()
], Center);
