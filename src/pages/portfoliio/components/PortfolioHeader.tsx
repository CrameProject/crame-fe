import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { label: "포트폴리오", path: "/portfolio" },
  { label: "계정 설정", path: "/portfolio/account" },
  { label: "API Key 설정", path: "/portfolio/apikey" },
];

const PortfolioHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
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
  );
};

export default PortfolioHeader;
