export type Strategy = {
  name: string;
  count: number;
  percentage: number;
};

export type Metrics = {
  winRate: number;
  annualReturn: number;
  volatility: number;
  maxDrawdown: number;
};

export type TradingSystem = {
  id: string;
  title: string;
  subtitle?: string;
  price?: string;
  priceUnit?: string;
  priceInfo?: string;
  metrics: Metrics;
  features: string[];
  strategies?: Strategy[];
  buttonText?: string;
  isDisabled?: boolean;
}; 