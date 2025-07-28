const HeroSection = () => {
    return (
      <section className="relative h-screen flex items-center justify-start px-32">
        {/* 배경 이미지 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/src/assets/images/background.png')"
          }}
        >
                      {/* 그라데이션 오버레이 제거하여 배경 이미지가 밝게 보이도록 */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div> */}
        </div>
        
        {/* 콘텐츠 */}
        <div className="relative z-10 flex items-center w-full">
          {/* 왼쪽 텍스트 영역 */}
          <div className="max-w-md text-left text-black">
            <h1 className="text-4xl font-bold mb-2">
              스마트한 투자의 시작
            </h1>
            <h2 className="text-6xl font-bold mb-6">
              CRAME
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              AI 기술로 구현하는 안정적인 수익 실현,<br />
              퀀트 트레이딩의 새로운 패러다임을 경험하세요.
            </p>
            <button className="bg-gold-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors">
              무료로 시작하기
            </button>
          </div>
          
          {/* 오른쪽 그래프 영역 (빈 공간) */}
          <div className="flex-1"></div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;