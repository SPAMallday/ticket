import axios, { Axios } from "axios";

const authAPI: Axios = axios.create({
    baseURL: "https://kauth.kakao.com/oauth/token",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
});

export const getToken = async (code: string) => {
    try {
        const response = await authAPI.post("", {
            grant_type: "authorization_code",
            client_id: process.env.KAKAO_REST_API_KEY,
            redirect_uri: process.env.KAKAO_REDIRECT_URI,
            code: code,
        });

        //TODO 서버의 TOKEN 처리 필요
        return response.data; // 응답 데이터 반환
    } catch (error) {
        if (error instanceof Error) {
            console.log("ERROR >> ", error.message);
        } else {
            console.log("ERROR >> ", error);
        }
    }
};
