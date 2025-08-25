import StrategyCard from "./components/StrategyCard";
import { tradingSystems } from "./data/mockData";
import { useNavigate } from "react-router-dom";

const QuantPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-bg-default py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="mb-12 text-center text-T1-B text-text-default">트레이딩 시스템 비교</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {tradingSystems.map((system) => (
            <StrategyCard
              key={system.id}
              title={system.title}
              subtitle={system.subtitle}
              price={system.price}
              priceInfo={system.priceInfo}
              metrics={system.metrics}
              features={system.features}
              strategies={system.strategies}
              buttonText={system.buttonText}
              isDisabled={system.isDisabled}
              onClick={
                system.id === "algorithm-trading"
                  ? () => navigate("/quant/algo")
                  : system.id === "ai-trading"
                  ? undefined
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuantPage;
