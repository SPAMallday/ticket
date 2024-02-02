import { Button } from "@mui/material";
import loginImage from "assets/img/kakao_login_medium_narrow.png";

export default function Login() {
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
    const kakaoLogin = () => {
        window.location.href = kakaoURL;
    };

    return (
        <>
            <Button onClick={kakaoLogin}>
                <img src={loginImage} className='login-Image' alt='login' />
            </Button>
        </>
    );
}
