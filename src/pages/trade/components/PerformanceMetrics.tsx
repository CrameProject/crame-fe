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
    <div className="p-2 text-center bg-white">
      <div className="mb-1 text-sm text-gray-500">{label}</div>
      <div className={`font-semibold ${isNegative ? "text-red-500" : "text-[#f2b94c]"}`}>
        <span className="text-2xl">{value}</span>
        <span className="text-sm">%</span>
      </div>
    </div>
  );
};

const PerformanceMetrics = () => {
  return (
    <div className="rounded-lg border border-gray-200 p-6 bg-[#f9f8f4]">
      <h2 className="mb-4 text-xl font-semibold">성과 지표</h2>
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