import { useEffect, useState } from "react";
import GoogleButton from "./components/GoogleButton";

const GoogleLoginPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const REDIRECT_URI = "http://localhost:5173/login/auth/google";
    const SCOPE = "email profile openid";

    const handleLogin = () => {
        const googleOAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`;
        window.location.href = googleOAuthUrl;
    }

    useEffect(() => {
        // 이미 로그인된 사용자인지 확인 (예: 토큰이 로컬 스토리지에 있는지)
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true);
            // 필요한 경우 메인 페이지로 리디렉션
            // window.location.href = '/home';
        }
    }, []); 

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-6">로그인</h1>
            {isLoggedIn ? (
                <p>이미 로그인되어 있습니다.</p>
            ) : (
                <div onClick={handleLogin}>
                    <GoogleButton />
                </div>
            )}
        </div>
    )
}

export default GoogleLoginPage;