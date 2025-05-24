const MetricItem = ({
  label,
  value,
  isNegative = false,
}: {
  label: string;
  value: string;
  isNegative?: boolean;
}) => {
  return (
    <div className="bg-bg-default p-2 text-center">
      <div className="mb-1 text-C1-M text-text-sub">{label}</div>
      <div className={`font-semibold ${isNegative ? "text-system-negative" : "text-system-highlight"}`}>
        <span className="text-T3-B">{value}</span>
        <span className="text-B2-M">%</span>
      </div>
    </div>
  );
};

const PerformanceMetrics = () => {
  return (
    <div className="rounded-lg border border-neutral-200 bg-bg-1 p-6">
      <h2 className="mb-4 text-T3-SB text-text-default">성과 지표</h2>
      <div className="grid grid-cols-4 gap-2">
        <MetricItem label="누적 수익률" value="+245" />
        <MetricItem label="일 평균 수익률" value="+0.82" />
        <MetricItem label="최대 일일 수익" value="+4.5" />
        <MetricItem label="최대 일일 손실" value="-2.1" isNegative={true} />
      </div>
    </div>
  );
};

export default PerformanceMetrics; 