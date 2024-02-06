import axios, { Axios, AxiosRequestConfig } from "axios";

// TODO 연결 후 code 수정 필요
const getToken: Axios = axios.create({
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
