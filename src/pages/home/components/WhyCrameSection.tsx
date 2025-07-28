import React from 'react';

const WhyCrameSection = () => {
  const features = [
    {
      number: "1",
      title: "정확한 분석",
      description: "빅데이터를 기반으로 한 정확한 시장 분석"
    },
    {
      number: "2", 
      title: "자동화 시스템",
      description: "24시간 자동 매매 시스템을 활용한 자동화"
    },
    {
      number: "3",
      title: "리스크 관리", 
      description: "체계적인 리스크 관리"
    },
    {
      number: "4",
      title: "주기적 업데이트",
      description: "모델의 최신화로 경향성 유지"
    }
  ];

  return (
    <section className="py-20 bg-bg-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-text-default">Why CRAME?</h2>
          <p className="text-lg text-text-sub">
            다른 곳에서 느낄 수 없는 크레임만의 차별점
          </p>
        </div>
        
        <div className="relative">
          {/* 황금색 연결선 - 그라데이션 효과 */}
          <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-[1000px] h-0.5 bg-gradient-to-r from-gold-300 via-gold-300 to-transparent"></div>
          
          <div className="flex justify-center items-start space-x-32 mb-16">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* 황금색 사각형 - 선을 관통하도록 배치 */}
                <div className="w-14 h-14 bg-gold-300 rounded-sm flex items-center justify-center relative z-10 shadow-sm mb-6">
                  <span className="text-white text-xl font-bold">{item.number}</span>
                </div>
                
                {/* 텍스트를 사각형 바로 아래에 배치 */}
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold text-text-default">{item.title}</h3>
                  <p className="text-text-sub text-base leading-relaxed max-w-xs">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCrameSection; 