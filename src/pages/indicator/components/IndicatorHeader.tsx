import { Outlet, useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { label: "경제", path: "/indicator/economic" },
  { label: "뉴스", path: "/indicator/general" },
];

const IndicatorHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex space-x-6 border-b border-gray-200 mt-6 pb-4">
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

export default IndicatorHeader;