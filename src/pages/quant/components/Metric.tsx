type MetricType = 'winRate' | 'annualReturn' | 'volatility' | 'maxDrawdown';

interface MetricProps {
  type: MetricType;
  value: number;
}

const metricLabels: Record<MetricType, string> = {
  winRate: '승률',
  annualReturn: '연간 수익률',
  volatility: '변동성',
  maxDrawdown: '최대 낙폭'
};

const Metric = ({ type, value }: MetricProps) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-B2-M text-text-sub">{metricLabels[type]}</span>
      <span className="text-T2-B text-system-highlight">{value}<span className="text-B2-M">%</span></span>
    </div>
  );
};

export default Metric; 