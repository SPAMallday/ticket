import { sendCode } from "api/AuthApi";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Auth() {
    const code = new URL(window.location.href).searchParams.get("code");
    const nav = useNavigate();

    useEffect(() => {
        // 중복 인증 요청 방지
        // const controller = new AbortController();

        sendCode("auth", {
            params: { code: code },
            // signal: controller.signal,
        })
            .then((res) => {
                // 토큰 받기 성공
                if (res.result) {
                    // TODO 로그인 상태 저장 필요
                    nav("../tickets");
                } else {
                    throw new Error("인증 실패");
                }
            })
            .catch((e) => {
                if (e.massage === "canceled") {
                    alert("요청 취소");
                    return;
                } else if (e.message === "인증 실패") {
                    alert("로그인 인증에 실패했습니다.");
                    nav("../login");
                }
            });

        // return () => controller.abort();
    }, []);

    if (!code) {
        return <div>잘못된 접근</div>;
    } else {
        return "";
    }
}
