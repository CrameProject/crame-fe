import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleAuth } from "../../../hooks/login/mutation/useGoogleAuth";

const GoogleAuthRedirect = () => {
  const navigate = useNavigate();
  const { mutate: googleAuth, isPending, isError, error } = useGoogleAuth();

  useEffect(() => {
    const handleGoogleRedirect = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const authorizationCode = urlParams.get("code");

      if (!authorizationCode) {
        navigate('/login', { state: { error: "인증 코드를 찾을 수 없습니다." } });
        return;
      }

      // React Query mutation 실행
      googleAuth(authorizationCode);
    };

    handleGoogleRedirect();
  }, [googleAuth, navigate]);

  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4">로그인 처리 중...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다."}</p>
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
