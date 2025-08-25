import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "@pages/home/HomePage.tsx";
import TradingPage from "@pages/trade/TradingPage.tsx";
import InfoPage from "@pages/info/InfoPage.tsx";
import InvestmentNotice from "@pages/info/investment/InvestmentNotice.tsx";
import ApiKeyPage from "@pages/info/ApiKey/ApiKeyPage.tsx";
import QuantPage from "@pages/quant/QuantPage.tsx";
import AlgoTradingSinglePage from "@pages/quant/AlgoTradingSinglePage";
import GoogleLoginPage from "@pages/login/GoogleLoginPage.tsx";
import GoogleAuthRedirect from "@pages/login/components/GoogleAuthRedirect.tsx";
import Header from "@/components/common/Header";
import AITradingPage from "@pages/ai-trade/aiTradingPage.tsx";
import SignupPage from "@pages/signup/SignupPage.tsx";
import PortfolioPage from "@pages/portfoliio/PortfolioPage.tsx";
import Account from "@pages/account/AccountPage.tsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<GoogleLoginPage />} />
            <Route path="/login/auth/google" element={<GoogleAuthRedirect />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/trade" element={<TradingPage />} />
            <Route path="/quant" element={<QuantPage />} />
            <Route path="/quant/algo" element={<AlgoTradingSinglePage />} />
            <Route path="/ai-trade" element={<AITradingPage />} />
            <Route>
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/account" element={<Account />} />
            </Route>
            <Route path="/trade/info" element={<InfoPage />}>
              <Route index element={<Navigate to="/trade/info/notice" replace />} />
              <Route path="notice" element={<InvestmentNotice />} />
              <Route path="api" element={<ApiKeyPage />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
