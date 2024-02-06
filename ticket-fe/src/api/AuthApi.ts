import { AxiosRequestConfig } from "axios";
import { api } from "./index";
import { APIResponse } from "types/commonResponse";

// 카카오 로그인 인증 코드 전달
// GET
export const sendCode = async <T>(
    url: string,
    config?: AxiosRequestConfig
): Promise<APIResponse<T>> => {
    try {
        const response = await api.get<APIResponse<T>>(url, config);
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error(String(error));
        }
    }
};
