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
exports.Freeze = void 0;
const typeorm_1 = require("typeorm");
const Ticket_1 = require("./Ticket");
let Freeze = class Freeze extends typeorm_1.BaseEntity {
};
exports.Freeze = Freeze;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ comment: "ID" }),
    __metadata("design:type", Number)
], Freeze.prototype, "freeze_id", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { comment: "시작일" }),
    __metadata("design:type", Date)
], Freeze.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { comment: "종료일" }),
    __metadata("design:type", Date)
], Freeze.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 20, comment: "메모" }),
    __metadata("design:type", String)
], Freeze.prototype, "memo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Ticket_1.Ticket, (ticket) => ticket.ticket_id, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Ticket_1.Ticket)
], Freeze.prototype, "ticket_id", void 0);
exports.Freeze = Freeze = __decorate([
    (0, typeorm_1.Entity)()
], Freeze);
