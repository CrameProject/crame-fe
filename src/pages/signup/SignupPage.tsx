import SignupForm from "./components/SignupForm.tsx";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-bg-2 flex items-center justify-center py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-4">
          <h1 className="text-T2-B text-text-default text-center mb-8">
            회원가입
          </h1>
          <SignupForm />
        </div>
        
        <p className="text-center text-B2-M text-text-sub">
          이미 CREAM 계정이 있으신가요?{" "}
          <a href="/login" className="text-gold-400 hover:text-gold-500 underline">
            로그인하기
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage; 