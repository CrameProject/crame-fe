import { Outlet, NavLink } from "react-router-dom";

const InfoPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="mb-8 text-2xl font-bold">투자 유의사항 및 API Key 설정</h1>

        <div className="mb-6 border-b">
          <div className="flex">
            <NavLink
              to="/trade/info/notice"
              className={({ isActive }) => 
                `mr-6 border-b-2 pb-2 px-4 ${
                  isActive ? "border-[#f2b94c] text-[#f2b94c]" : "border-transparent text-gray-500"
                }`
              }
            >
              투자 유의사항
            </NavLink>
            <NavLink
              to="/trade/info/api"
              className={({ isActive }) => 
                `border-b-2 pb-2 px-4 ${
                  isActive ? "border-[#f2b94c] text-[#f2b94c]" : "border-transparent text-gray-500"
                }`
              }
            >
              API Key 설정
            </NavLink>
          </div>
        </div>

        <div className="py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default InfoPage; 