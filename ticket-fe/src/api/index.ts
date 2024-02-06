import axios, { Axios } from "axios";

// axios 인스턴스 생성
export const api: Axios = axios.create({
    // TODO [배포 시] 서버 주소 수정
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
});
