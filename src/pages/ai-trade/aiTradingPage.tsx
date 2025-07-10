import SelectCard from "./components/SelectedCard";
import { aiTradingStrategies } from "./data/aiTradingMockData";

const AITradingPage = () => {
  return (
    <div className="min-h-screen bg-bg-default py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="mb-12 text-center text-T1-B text-text-default">AI 트레이딩</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {aiTradingStrategies.map((strategy, index) => (
            <SelectCard key={index} strategy={strategy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AITradingPage;
