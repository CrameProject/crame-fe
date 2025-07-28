import React from 'react';

interface InvestmentCardProps {
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

const InvestmentCard: React.FC<InvestmentCardProps> = ({
  number,
  product,
  return: returnValue,
  period,
  cumulative,
  annual,
  maxLoss,
  price,
  discount
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4 min-w-[320px] flex-shrink-0 h-64">
      <div className="flex items-center justify-between">
        <div className="bg-gold-100 text-gold-600 px-3 py-1 rounded-full text-sm font-semibold">
          {number} {product}
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <div className="text-3xl font-bold text-gold-300">{returnValue}</div>
        <div className="text-sm text-text-sub">({period})</div>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-text-sub">누적수익률</span>
          <span className="font-semibold">{cumulative}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-sub">연평균수익률</span>
          <span className="font-semibold">{annual}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-sub">최대손실폭</span>
          <span className="font-semibold">{maxLoss}</span>
        </div>
      </div>
      
      <div className="border-t pt-4 mt-auto">
        <div className="flex justify-between items-center">
          <span className="text-system-error font-semibold">{discount} ▼</span>
          <span className="text-lg font-bold">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard; 