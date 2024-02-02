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
exports.Ticket = void 0;
const typeorm_1 = require("typeorm");
const Brand_1 = require("./Brand");
const User_1 = require("./User");
let Ticket = class Ticket extends typeorm_1.BaseEntity {
};
exports.Ticket = Ticket;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ comment: "회원권 ID" }),
    __metadata("design:type", Number)
], Ticket.prototype, "ticket_id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 2, comment: "형태" }),
    __metadata("design:type", String)
], Ticket.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "tinyint", comment: "기간", nullable: true }),
    __metadata("design:type", Number)
], Ticket.prototype, "term", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: "정지 횟수" }),
    __metadata("design:type", Number)
], Ticket.prototype, "stop_count", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 2, comment: "활성상태" }),
    __metadata("design:type", String)
], Ticket.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { comment: "시작일" }),
    __metadata("design:type", Date)
], Ticket.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { comment: "종료일" }),
    __metadata("design:type", Date)
], Ticket.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Brand_1.Brand, (brand) => brand.brand_id, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Brand_1.Brand)
], Ticket.prototype, "brand_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => User_1.User, (user) => user.user_id, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", User_1.User)
], Ticket.prototype, "user_id", void 0);
exports.Ticket = Ticket = __decorate([
    (0, typeorm_1.Entity)()
], Ticket);
