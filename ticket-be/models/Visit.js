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
exports.Visit = void 0;
const typeorm_1 = require("typeorm");
const Ticket_1 = require("./Ticket");
const User_1 = require("./User");
let Visit = class Visit extends typeorm_1.BaseEntity {
};
exports.Visit = Visit;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ comment: "방문 ID" }),
    __metadata("design:type", Number)
], Visit.prototype, "visit_id", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { comment: "날짜" }),
    __metadata("design:type", Date)
], Visit.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 100, comment: "코멘트" }),
    __metadata("design:type", String)
], Visit.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: "다회차감" }),
    __metadata("design:type", Number)
], Visit.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: "지점ID" }),
    __metadata("design:type", Number)
], Visit.prototype, "center_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ comment: "브랜드ID" }),
    __metadata("design:type", Number)
], Visit.prototype, "brand_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Ticket_1.Ticket, (ticket) => ticket.ticket_id, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Ticket_1.Ticket)
], Visit.prototype, "ticket_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => User_1.User, (user) => user.user_id, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Ticket_1.Ticket)
], Visit.prototype, "user_id", void 0);
exports.Visit = Visit = __decorate([
    (0, typeorm_1.Entity)()
], Visit);
