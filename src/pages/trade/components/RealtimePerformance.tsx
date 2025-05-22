type PerformanceItemProps = {
  label: string;
  value: string;
  unit?: string;
};

const PerformanceItem = ({ label, value, unit = "%" }: PerformanceItemProps) => {
  return (
    <div className="p-2 text-center bg-white">
      <div className="mb-1 text-sm text-gray-500">{label}</div>
      <div className="font-semibold text-[#f2b94c]">
        {unit ? (
          <>
            <span className="text-2xl">{value}</span>
            <span className="text-sm">{unit}</span>
          </>
        ) : (
          <span className="text-2xl">{value}</span>
        )}
      </div>
    </div>
  );
};

const RealtimePerformance = () => {
  return (
    <div className="rounded-lg border border-gray-200 p-6 bg-[#f9f8f4]">
      <h2 className="mb-4 text-xl font-semibold">실시간 성과</h2>
      <div className="grid grid-cols-3 gap-2">
        <PerformanceItem label="현재 포지션" value="매수" unit="" />
        <PerformanceItem label="당일 수익률" value="+1.2" />
        <PerformanceItem label="신호 신뢰도" value="92" />
      </div>
    </div>
  );
};

export default RealtimePerformance; 