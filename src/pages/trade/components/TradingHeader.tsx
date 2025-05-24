const TradingHeader = () => {
  return (
    <div className="mb-12">
      <h1 className="mb-2 text-2xl font-bold">머신러닝 기반 알고리즘 트레이딩</h1>
      <p className="mb-1 text-gray-600">
        본 알고리즘은 XGBoost 모델을 활용하여 주가 패턴을 학습하고 예측하는 머신러닝 기반 트레이딩
        시스템입니다.
      </p>
      <p className="text-gray-600">
        최근 10년간의 시장 데이터를 기반으로 학습되었으며, 실시간 시장 데이터를 통해 다양한 지표를
        종합적으로 분석하여 매매 신호를 생성합니다.
      </p>
    </div>
  );
};

export default TradingHeader; 