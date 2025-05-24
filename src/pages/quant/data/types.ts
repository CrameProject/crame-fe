export type Strategy = {
  name: string;
  count: number;
  percentage: number;
};

export type Metrics = {
  승률: number;
  연간수익률: number;
  변동성: number;
  최대낙폭: number;
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