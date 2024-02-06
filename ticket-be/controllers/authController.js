"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// TODO 연결 후 code 수정 필요
const getToken = axios_1.default.create({
    baseURL: "https://kauth.kakao.com/oauth/token",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    data: {
        grant_type: "authorization_code",
        client_id: process.env.KAKAO_REST_API_KEY,
        redirect_uri: process.env.KAKAO_REDIRECT_URI,
        code: "",
    },
});
