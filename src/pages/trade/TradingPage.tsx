import TradingHeader from "./components/TradingHeader";
import TradingProcess from "./components/TradingProcess";
import PerformanceMetrics from "./components/PerformanceMetrics";
import RealtimePerformance from "./components/RealtimePerformance";
import InfoButton from "./components/InfoButton.tsx";

const TradingPage = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-[#f9f8f4]">
        <div className="mx-auto max-w-6xl px-4 py-2 pt-12">
          <TradingHeader />
          <TradingProcess />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <PerformanceMetrics />
          <RealtimePerformance />
        </div>

        <InfoButton />
      </div>
    </div>
  );
};

export default TradingPage;
