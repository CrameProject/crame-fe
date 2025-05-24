type PerformanceItemProps = {
  label: string;
  value: string;
  unit?: string;
};

const PerformanceItem = ({ label, value, unit = "%" }: PerformanceItemProps) => {
  return (
    <div className="bg-bg-default p-2 text-center">
      <div className="mb-1 text-C1-M text-text-sub">{label}</div>
      <div className="font-semibold text-system-highlight">
        {unit ? (
          <>
            <span className="text-T3-B">{value}</span>
            <span className="text-B2-M">{unit}</span>
          </>
        ) : (
          <span className="text-T3-B">{value}</span>
        )}
      </div>
    </div>
  );
};

const RealtimePerformance = () => {
  return (
    <div className="rounded-lg border border-neutral-200 bg-bg-1 p-6">
      <h2 className="mb-4 text-T3-SB text-text-default">실시간 성과</h2>
      <div className="grid grid-cols-3 gap-2">
        <PerformanceItem label="현재 포지션" value="매수" unit="" />
        <PerformanceItem label="당일 수익률" value="+1.2" />
        <PerformanceItem label="신호 신뢰도" value="92" />
      </div>
    </div>
  );
};

export default RealtimePerformance; 