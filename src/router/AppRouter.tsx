import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "@pages/home/HomePage.tsx";
import TradingPage from "@pages/trade/TradingPage.tsx";
import InfoPage from "@pages/trade/info/InfoPage.tsx";
import InvestmentNotice from "@pages/trade/info/investment/InvestmentNotice.tsx";
import ApiKeyPage from "@pages/trade/info/ApiKey/ApiKeyPage.tsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trade" element={<TradingPage />} />
        <Route path="/trade/info" element={<InfoPage />}>
          <Route index element={<Navigate to="/trade/info/notice" replace />} />
          <Route path="notice" element={<InvestmentNotice />} />
          <Route path="api" element={<ApiKeyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
