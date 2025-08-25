import { Button } from "@/components/ui/button";
import LogoIcon from "@/assets/icons/Logo.svg?react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  }

  const handleSignup = () => {
    navigate("/signup");
  }
  return (
    <header className="w-full min-w-[768px] border-b border-gray-200 py-3">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-12">
        <div className="flex items-center gap-8">
          <div className="text-xl font-bold text-blue-600">
            <LogoIcon className="h-8" />z
          </div>

          <nav className="flex items-center gap-6 px-16 font-medium text-gray-700">
            <a href="/" className="transition hover:text-gold-300">
              차트
            </a>
            <a href="/" className="transition hover:text-gold-300">
              지표
            </a>
            <a href="/quant" className="transition hover:text-gold-300">
            퀀트
            </a>
            <a href="/" className="transition hover:text-gold-300">
              서비스
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="h-9 border-gray-300 px-6 text-gray-800 hover:bg-gray-100"
            onClick={handleSignup}
          >
            회원가입
          </Button>
          <Button className="h-9 bg-[#F4B224] px-6 text-white hover:bg-[#d9991b]" onClick={handleLogin}>로그인</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
