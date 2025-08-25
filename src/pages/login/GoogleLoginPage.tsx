import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleButton from "./components/GoogleButton";
import { useAuthStatus } from "../../hooks/login/query/useAuthStatus";

interface LocationState {
    error?: string;
}

const GoogleLoginPage = () => {
    const { data: authData, isLoading } = useAuthStatus();
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as LocationState;
    const errorMessage = state?.error;
    
    const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const REDIRECT_URI = "http://localhost:5173/login/auth/google";
    const SCOPE = "email profile openid";

    const handleLogin = () => {
        const googleOAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`;
        window.location.href = googleOAuthUrl;
    }

    useEffect(() => {
        if (authData?.isAuthenticated) {
            navigate('/');
        }
    }, [authData, navigate]);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                <p className="mt-4">인증 상태 확인 중...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-6">로그인</h1>
            {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <p>{errorMessage}</p>
                </div>
            )}
            <div onClick={handleLogin}>
                <GoogleButton />
            </div>
            {window.location.hostname === 'localhost' && (
              <button
                onClick={() => navigate('/')}
                className="mt-4 text-sm text-blue-600 underline"
              >
                로컬 강제 로그인(바이패스)
              </button>
            )}
        </div>
    )
}

export default GoogleLoginPage;