"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuth = void 0;
const axios_1 = __importDefault(require("axios"));
const db_1 = require("../db");
const User_1 = require("../models/User");
const authAPI = axios_1.default.create({
    baseURL: "https://kauth.kakao.com/oauth/token",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
});
// 인증 진행 함수
function getAuth(code) {
    return __awaiter(this, void 0, void 0, function* () {
        const tokenData = yield getToken(code);
        const kakaoInfo = yield getInfo(tokenData.access_token);
        const user = yield getUser(kakaoInfo.id);
        // 신규 유저라면
        if (!user) {
            try {
                const user = yield db_1.AppDataSource.getRepository(User_1.User).insert({
                    kakao_id: kakaoInfo.id,
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log("DB INSERT USER ERROR >> ", error.message);
                }
                else {
                    console.log("DB INSERT USER ERROR >> ", error);
                }
            }
        }
        // 클라이언트로 토큰 전송
        return tokenData;
    });
}
exports.getAuth = getAuth;
// response.data (Token)의 type
// access_token: string,
// token_type: string,
// refresh_token: string,
// expires_in: number,
// refresh_token_expires_in: number
const getToken = (code) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield authAPI.post("", {
            grant_type: "authorization_code",
            client_id: process.env.KAKAO_REST_API_KEY,
            redirect_uri: process.env.KAKAO_REDIRECT_URI,
            code: code,
        });
        return response.data; // 응답 데이터 반환
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("KAKAO TOKEN ERROR >> ", error.message);
        }
        else {
            console.log("KAKAO TOKEN ERROR >> ", error);
        }
    }
});
// userInfo.data (유저 정보)의 type
// id: number,
// connected_at: string,
const getInfo = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userInfo = yield axios_1.default.get("https://kapi.kakao.com/v2/user/me", {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
        });
        return userInfo.data; // 응답 데이터 반환
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("KAKAO TOKEN INFO ERROR >> ", error.message);
        }
        else {
            console.log("KAKAO TOKEN INFO ERROR >> ", error);
        }
    }
});
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield db_1.AppDataSource.getRepository(User_1.User).findOneBy({
            user_id: id,
        });
        return user;
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("DB SEARCH USER ERROR >> ", error.message);
        }
        else {
            console.log("DB SEARCH USER ERROR >> ", error);
        }
    }
});
