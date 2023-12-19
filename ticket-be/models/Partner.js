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
exports.Partner = void 0;
const typeorm_1 = require("typeorm");
const Brand_1 = require("./Brand");
let Partner = class Partner extends typeorm_1.BaseEntity {
};
exports.Partner = Partner;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Partner.prototype, "partner_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 255,
        comment: "연계 그룹, {피커스,훅}",
    }),
    __metadata("design:type", String)
], Partner.prototype, "partner_group", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 10,
        comment: "지역, {서울}",
    }),
    __metadata("design:type", String)
], Partner.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => Brand_1.Brand, (brand) => brand.partner_id),
    __metadata("design:type", Array)
], Partner.prototype, "brands", void 0);
exports.Partner = Partner = __decorate([
    (0, typeorm_1.Entity)()
], Partner);
