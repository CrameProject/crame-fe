const HeroSection = () => {
    return (
      <section className="relative h-screen flex items-center justify-start px-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/src/assets/images/background.png')"
          }}
        >
        </div>
        
        <div className="relative z-10 flex items-center w-full">
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
          
          <div className="flex-1"></div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;