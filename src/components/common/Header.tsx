import LogoIcon from "@/assets/icons/Logo.svg?react";

const Header = () => {
  return (
    <header className="w-full min-w-[768px] py-3">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-12">
        <div className="flex items-center gap-8">
          <div className="text-xl font-bold text-blue-600">
            <LogoIcon className="h-8" />
          </div>
          <nav className="flex items-center gap-6 px-16 font-medium text-gray-700">
            <a href="#" className="transition hover:text-blue-500">
              차트
            </a>
            <a href="#" className="transition hover:text-blue-500">
              지표
            </a>
            <a href="#" className="transition hover:text-blue-500">
              퀀트
            </a>
            <a href="#" className="transition hover:text-blue-500">
              서비스
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded border px-6 py-2 text-blue-500 transition hover:bg-blue-50">
            로그인
          </button>
          <button className="rounded bg-blue-500 px-6 py-2 text-white transition hover:bg-blue-600">
            회원가입
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
