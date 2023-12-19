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
exports.Brand = void 0;
const typeorm_1 = require("typeorm");
const Partner_1 = require("./Partner");
const Center_1 = require("./Center");
let Brand = class Brand extends typeorm_1.BaseEntity {
};
exports.Brand = Brand;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ comment: "브랜드 ID" }),
    __metadata("design:type", Number)
], Brand.prototype, "brand_id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 20, comment: "브랜드 이름" }),
    __metadata("design:type", String)
], Brand.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Partner_1.Partner, (partner) => partner.brands),
    (0, typeorm_1.JoinColumn)({ name: "partner_id" }),
    __metadata("design:type", Partner_1.Partner)
], Brand.prototype, "partner_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => Center_1.Center, (center) => center.brand_id, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Brand.prototype, "centers", void 0);
exports.Brand = Brand = __decorate([
    (0, typeorm_1.Entity)()
], Brand);
