const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* 배경 이미지 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/images/background.png')"
        }}
      >
        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      </div>
      
      {/* 콘텐츠 */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6">
          AI 기반 투자 전략으로
          <br />
          더 스마트한 투자를
        </h1>
        <p className="text-xl mb-8 text-gray-200">
          CRAME과 함께라면 누구나 전문가 수준의 투자를 경험할 수 있습니다
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gold-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors">
            시작하기
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
            자세히 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 