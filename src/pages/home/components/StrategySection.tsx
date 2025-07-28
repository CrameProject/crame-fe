import React from 'react';

interface StrategyItem {
  title: string;
  description: string;
  icon: string;
  imageSrc: string;
}

const StrategySection = () => {
  const strategies: StrategyItem[] = [
    {
      title: "AI 실시간 분석",
      description: "최첨단 AI 기술로 시장을 실시간 분석하여 최적의 매매 기회를 포착합니다.",
      icon: "monitor",
      imageSrc: "/src/assets/images/monitor.png"
    },
    {
      title: "알고리즘 퀀트",
      description: "각종 알고리즘의 조합을 통하여 더 즉각적이고 일관적인 트레이딩을 경험할 수 있습니다.",
      icon: "quant",
      imageSrc: "/src/assets/images/quant.png"
    },
    {
      title: "주기적 업데이트",
      description: "주기적인 업데이트를 통해 모델이 최신 경향성을 잘 파악할 수 있게 했습니다.",
      icon: "gear",
      imageSrc: "/src/assets/images/gear.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-text-default">나를 위한 최적의 전략</h2>
          <p className="text-lg text-text-sub">
            CRAME이 준비한 AI기반 분석 전략을 만나보세요
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <div 
              key={index} 
              className={`bg-bg-1 rounded-lg p-8 text-center space-y-6 shadow-sm hover:shadow-md transition-shadow ${
                index === 0 ? 'border-2 border-blue-500' : ''
              }`}
            >
              <div className="w-32 h-32 mx-auto">
                <img 
                  src={strategy.imageSrc} 
                  alt={strategy.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-text-default">{strategy.title}</h3>
              <p className="text-text-sub leading-relaxed text-sm">{strategy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection; 