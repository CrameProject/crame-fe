import React from 'react';

interface InvestmentCardProps {
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
    <div className="bg-white rounded-xl shadow-sm p-6 min-w-[500px] flex-shrink-0 h-56">
      <div className="flex flex-col h-full">
        {/* 상단 섹션 */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex flex-col items-start">
            <div className="bg-gold-300 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
              어쩌고
            </div>
            <div className="text-xs text-text-sub mb-1">인텔리퀸트</div>
            <div className="text-lg font-bold text-text-default">{product}</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gold-300">{returnValue}</div>
            <div className="text-xs text-text-sub">({period})</div>
          </div>
        </div>
        
        {/* 중간 섹션 - 성과 지표를 가로로 배치 */}
        <div className="flex-1 flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-sm text-text-default">누적수익률</div>
              <div className="text-sm font-semibold text-text-default">{cumulative}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-text-default">연평균수익률</div>
              <div className="text-sm font-semibold text-text-default">{annual}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-text-default">최대손실폭</div>
              <div className="text-sm font-semibold text-text-default">{maxLoss}</div>
            </div>
          </div>
        </div>
        
        {/* 하단 섹션 */}
        <div className="flex justify-end items-center">
          <span className="text-system-error font-semibold text-sm mr-2">{discount} ▼</span>
          <span className="text-lg font-bold text-text-default">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard; 