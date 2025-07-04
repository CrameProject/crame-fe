import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GoogleAuthRedirect = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleGoogleRedirect = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const authorizationCode = urlParams.get("code");

        if (!authorizationCode) {
          setError("인증 코드를 찾을 수 없습니다.");
          setIsLoading(false);
          return;
        }

        const response = await axios.post(
          "YOUR_BACKEND_API_URL/auth/google", 
          { code: authorizationCode },
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );

        const data = response.data;
        
        localStorage.setItem("authToken", data.token);
        
        navigate("/home");
      } catch (err) {
        console.error("Google 로그인 오류:", err);
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || err.message || "API 요청 중 오류가 발생했습니다.");
        } else {
          setError(err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.");
        }
        setIsLoading(false);
      }
    };

    handleGoogleRedirect();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4">로그인 처리 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
        <button 
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/login")}
        >
          로그인 페이지로 돌아가기
        </button>
      </div>
    );
  }

  return null;
};

export default GoogleAuthRedirect;
