import React from 'react';
import HeroSection from './components/HeroSection';
import WhyCrameSection from './components/WhyCrameSection';
import InvestmentCardsSection from './components/InvestmentCardsSection';
import StrategySection from './components/StrategySection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyCrameSection />
      <InvestmentCardsSection />
      <StrategySection />
    </div>
  );
};

export default HomePage;
