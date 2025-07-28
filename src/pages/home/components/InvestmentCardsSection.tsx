import React from 'react';
import InvestmentCard from './InvestmentCard';

interface InvestmentCardData {
  number: string;
  product: string;
  return: string;
  period: string;
  cumulative: string;
  annual: string;
  maxLoss: string;
  price: string;
  discount: string;
}

const InvestmentCardsSection = () => {
  const firstRowCards: InvestmentCardData[] = [
    {
      number: "1",
      product: "iQon라지캡 주식형",
      return: "7.27%",
      period: "3개월",
      cumulative: "355.39%",
      annual: "16.09%",
      maxLoss: "44.44%",
      price: "44,000원/월",
      discount: "50%"
    },
    {
      number: "2",
      product: "iQon미드캡 주식형",
      return: "6.85%",
      period: "3개월", 
      cumulative: "312.45%",
      annual: "14.23%",
      maxLoss: "38.12%",
      price: "38,000원/월",
      discount: "40%"
    },
    {
      number: "3",
      product: "iQon스몰캡 주식형",
      return: "8.12%",
      period: "3개월",
      cumulative: "398.67%", 
      annual: "18.45%",
      maxLoss: "52.18%",
      price: "52,000원/월",
      discount: "60%"
    }
  ];

  const secondRowCards: InvestmentCardData[] = [
    {
      number: "4",
      product: "iQon테크 주식형",
      return: "9.45%",
      period: "3개월",
      cumulative: "425.78%", 
      annual: "20.12%",
      maxLoss: "48.33%",
      price: "58,000원/월",
      discount: "55%"
    },
    {
      number: "5",
      product: "iQon바이오 주식형",
      return: "7.89%",
      period: "3개월",
      cumulative: "367.23%", 
      annual: "17.34%",
      maxLoss: "41.56%",
      price: "46,000원/월",
      discount: "45%"
    }
  ];

  return (
    <section className="py-20 bg-bg-1 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* 무한 스크롤 애니메이션 */}
          <div className="flex flex-col space-y-8">
            {/* 첫 번째 줄 */}
            <div className="flex animate-scroll space-x-8">
              {firstRowCards.map((card, index) => (
                <InvestmentCard key={index} {...card} />
              ))}
              
              {/* 첫 번째 줄 복제 */}
              {firstRowCards.map((card, index) => (
                <InvestmentCard key={`duplicate-${index}`} {...card} />
              ))}
            </div>
            
            {/* 두 번째 줄 */}
            <div className="flex animate-scroll space-x-8">
              {secondRowCards.map((card, index) => (
                <InvestmentCard key={`second-row-${index}`} {...card} />
              ))}
              
              {/* 두 번째 줄 복제 */}
              {secondRowCards.map((card, index) => (
                <InvestmentCard key={`second-row-duplicate-${index}`} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCardsSection; 