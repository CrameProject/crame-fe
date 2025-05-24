type MetricProps = {
  label: string;
  value: number;
};

const Metric = ({ label, value }: MetricProps) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-B2-M text-text-sub">{label}</span>
      <span className="text-T2-B text-system-highlight">{value}<span className="text-B2-M">%</span></span>
    </div>
  );
};

export default Metric; 