import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@pages/home/HomePage.tsx";
import TradingPage from "@pages/trade/TradingPage.tsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trade" element={<TradingPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
