import { Button } from "@/components/ui/button";
import Metric from "./Metric";
import { useState } from "react";

export type StrategyCardProps = {
  title: string;
  subtitle?: string;
  price?: string;
  priceUnit?: string;
  priceInfo?: string;
  metrics: {
    승률: number;
    연간수익률: number;
    변동성: number;
    최대낙폭: number;
  };
  features: string[];
  strategies?: {
    name: string;
    count: number;
    percentage: number;
  }[];
  buttonText?: string;
  isDisabled?: boolean;
};

const StrategyCard = ({
  title,
  subtitle,
  price,
  priceUnit = "월",
  priceInfo,
  metrics,
  features,
  strategies,
  buttonText = "프리미엄 구독하기",
  isDisabled = false,
}: StrategyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`flex flex-col rounded-lg bg-bg-1 border p-6 transition-all duration-300
        ${isHovered ? 'border-gold-300' : 'border-neutral-300'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-6">
        <div className="mb-2 flex items-baseline">
          <h3 className="text-T2-SB text-text-default">{title}</h3>
          {subtitle && <span className="ml-2 text-B2-M text-gold-300">{subtitle}</span>}
        </div>
        <p className="text-B2-M text-text-sub">간단설명간단설 명간단설명간 간단설 명 간단설명간간 설명 간 담설</p>
        <br/>
      </div>

      {price && (
        <div className="mb-4">
          <div className="flex items-baseline">
            <span className="text-B1-M text-text-default">{price} / {priceUnit}</span>
          </div>
          {priceInfo && <div className="text-C1-M text-text-sub">{priceInfo}</div>}
        </div>
      )}

      <div className="mb-4">
        {buttonText && (
          <Button
            className={`w-full h-[60px] rounded-full bg-gold-300 text-white text-center text-B1-M font-bold hover:bg-gold-400 transition-colors ${isDisabled ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isDisabled}
          >
            {buttonText}
          </Button>
        )}
      </div>

      <div className="mb-6 grid grid-cols-4 gap-2">
        <Metric label="승률" value={metrics.승률} />
        <Metric label="연간 수익률" value={metrics.연간수익률} />
        <Metric label="변동성" value={metrics.변동성} />
        <Metric label="최대 낙폭" value={metrics.최대낙폭} />
      </div>

      <div className="mb-6">
        <h4 className="mb-4 text-B1-B text-text-default">주요 특징</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-gold-300">•</span>
              <span className="text-B2-M text-text-default">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {strategies && (
        <div>
          <h4 className="mb-4 text-B1-B text-text-default">전략 목록</h4>
          <div className="grid grid-cols-2 gap-3">
            {strategies.map((strategy, index) => (
              <div key={index} className="rounded-md border border-neutral-200 p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-B2-B text-text-default">{strategy.name}</h5>
                    <div className="text-C1-M text-text-sub">거래 횟수: {strategy.count}회</div>
                  </div>
                  <span className="text-T3-B text-system-highlight">{strategy.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StrategyCard; 