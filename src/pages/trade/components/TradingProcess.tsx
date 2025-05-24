const TradingProcess = () => {
  return (
    <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h2 className="mb-4 text-T3-SB text-text-default">트레이딩 프로세스</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2 text-neutral-500">•</span>
            <span className="text-B1-M text-text-default">데이터 전처리 및 정규화</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-neutral-500">•</span>
            <span className="text-B1-M text-text-default">각종 지표(미지) 생성 후 모델 학습</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-neutral-500">•</span>
            <span className="text-B1-M text-text-default">백테스팅을 통한 모델 검증</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-neutral-500">•</span>
            <span className="text-B1-M text-text-default">실시간 데이터 피드백 루프</span>
          </li>
        </ul>
      </div>
      <div className="flex h-36 items-center justify-center rounded-lg bg-neutral-200 p-4">
        {/* 차트나 그래프가 들어갈 자리 */}
        <span className="text-B2-M text-neutral-400">차트 영역</span>
      </div>
    </div>
  );
};

export default TradingProcess; 