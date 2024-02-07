import axios, { Axios } from "axios";
import { AppDataSource } from "../db";
import { User } from "../models/User";

const authAPI: Axios = axios.create({
    baseURL: "https://kauth.kakao.com/oauth/token",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
});

// 인증 진행 함수
export async function getAuth(code: string) {
    const tokenData = await getToken(code);
    const kakaoInfo = await getInfo(tokenData.access_token);
    const user = await getUser(kakaoInfo.id);

    // 신규 유저라면
    if (!user) {
        try {
            const user = await AppDataSource.getRepository(User).insert({
                kakao_id: kakaoInfo.id,
            });
        } catch (error) {
            if (error instanceof Error) {
                console.log("DB INSERT USER ERROR >> ", error.message);
            } else {
                console.log("DB INSERT USER ERROR >> ", error);
            }
        }
    }

    // 클라이언트로 토큰 전송
    return tokenData;
}

// response.data (Token)의 type
// access_token: string,
// token_type: string,
// refresh_token: string,
// expires_in: number,
// refresh_token_expires_in: number
const getToken = async (code: string) => {
    try {
        const response = await authAPI.post("", {
            grant_type: "authorization_code",
            client_id: process.env.KAKAO_REST_API_KEY,
            redirect_uri: process.env.KAKAO_REDIRECT_URI,
            code: code,
        });

        return response.data; // 응답 데이터 반환
    } catch (error) {
        if (error instanceof Error) {
            console.log("KAKAO TOKEN ERROR >> ", error.message);
        } else {
            console.log("KAKAO TOKEN ERROR >> ", error);
        }
    }
};

// userInfo.data (유저 정보)의 type
// id: number,
// connected_at: string,
const getInfo = async (token: string) => {
    try {
        const userInfo = await axios.get("https://kapi.kakao.com/v2/user/me", {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=utf-8",
            },
        });

        return userInfo.data; // 응답 데이터 반환
    } catch (error) {
        if (error instanceof Error) {
            console.log("KAKAO TOKEN INFO ERROR >> ", error.message);
        } else {
            console.log("KAKAO TOKEN INFO ERROR >> ", error);
        }
    }
};

const getUser = async (id: number) => {
    try {
        const user = await AppDataSource.getRepository(User).findOneBy({
            user_id: id,
        });

        return user;
    } catch (error) {
        if (error instanceof Error) {
            console.log("DB SEARCH USER ERROR >> ", error.message);
        } else {
            console.log("DB SEARCH USER ERROR >> ", error);
        }
    }
};
