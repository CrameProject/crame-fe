import React from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";

const tabs = [
  { label: "경제", path: "/indicator/economic" },
  { label: "뉴스", path: "/indicator/news" },
];

const IndicatorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-2">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-16 lg:px-24 py-12">
        <div className="flex space-x-6 border-b border-gray-200 pb-4">
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className={`pb-1 transition font-semibold ${
                  isActive
                    ? "text-yellow-500 border-b-2 border-yellow-500"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default IndicatorPage;