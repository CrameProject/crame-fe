import React from "react";
import PortfolioHeader from "@/pages/portfoliio/components/PortfolioHeader";
import PortfolioSummary from "@/pages/portfoliio/components/PortfolioSummary";
import TransactionHistory from "@/pages/portfoliio/components/Transaction/TransactionHistory";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-bg-2">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-16 lg:px-24 py-12">
        <PortfolioHeader />
        <PortfolioSummary />
        <TransactionHistory />
      </div>
    </div>
  );
};

export default PortfolioPage;
