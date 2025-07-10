import React from "react";

const strategies = [
  {
    title: "통계적 차익거래",
    winRate: 94,
    count: 1580,
    features: [
      "가격 불일치 감지",
      "자동 차익실현",
      "리스크 관리",
      "실시간 모니터링",
    ],
    button: "선택하기",
    description: "시장의 비효율성을 활용한 차익 실현",
  },
  {
    title: "추세추종 전략",
    winRate: 89,
    count: 920,
    features: [
      "추세 식별",
      "동적 포지션",
      "변동성 기반",
      "손절매 자동화",
    ],
    button: "선택하기",
    description: "시장 모델링을 활용한 중장기 트레이딩",
  },
  {
    title: "평균회귀 전략",
    winRate: 91,
    count: 2150,
    features: [
      "평균회귀 계산",
      "이상치 감지",
      "자동 진입/청산",
      "위험도 조절",
    ],
    button: "선택하기",
    description: "가격 변동의 통계적 패턴을 활용한 거래",
  },
  {
    title: "고빈도 거래 전략",
    winRate: 87,
    count: 5240,
    features: [
      "밀리초 단위 실행",
      "딥 데이터 분석",
      "유동성 감지",
      "주문 최적화",
    ],
    button: "선택하기",
    description: "초단타 매매를 통한 스캘핑 기법 활용",
  },
];

const AlgoTradingSinglePage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7] pb-16">
      {/* 네비게이션 */}
      <nav className="flex items-center justify-between px-8 py-4 bg-[#F5F5F7]">
        <div className="flex items-center">
          <div className="w-[88px] h-[57px] bg-[#E0E0E0] rounded-md flex items-center justify-center mr-8 text-xs text-gray-400 border border-[#E0E0E0]">88 × 57</div>
          <ul className="flex space-x-8 text-[#A88B2D] font-semibold text-lg">
            <li>차트</li>
            <li>지표</li>
            <li>퀀트</li>
            <li>서비스 소개</li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <button className="px-6 py-2 rounded-md bg-[#E0E0E0] text-[#A88B2D] font-bold">로그인</button>
          <button className="px-6 py-2 rounded-md bg-[#A88B2D] text-white font-bold">회원가입</button>
        </div>
      </nav>

      {/* 타이틀 */}
      <h1 className="text-3xl font-bold text-center text-[#222] mt-8 mb-12">알고리즘 트레이딩</h1>

      {/* 전략 카드들 */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {strategies.map((s, i) => (
          <div
            key={s.title}
            className="bg-[#FFE082] rounded-2xl p-8 shadow-md border border-[#E0E0E0] flex flex-col min-h-[340px] transition hover:shadow-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <h2 className="text-xl font-bold text-[#6B4F13] mb-1">{s.title}</h2>
                <div className="text-sm text-[#666] mb-2">{s.description}</div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-2xl font-bold text-[#A88B2D]">{s.winRate}%</span>
                <span className="text-xs text-[#666]">거래 횟수: {s.count}회</span>
              </div>
            </div>
            <div className="mb-2 mt-2">
              <span className="font-semibold text-[#6B4F13]">주요 기능</span>
              <ul className="list-disc ml-5 mt-1 text-[#444] text-sm space-y-1">
                {s.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
            <div className="flex-1" />
            <button className="mt-6 w-full h-10 rounded bg-[#FFD54F] text-[#6B4F13] font-bold hover:bg-[#FFECB3] transition-colors border border-[#E0E0E0] shadow-sm">
              {s.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlgoTradingSinglePage; 