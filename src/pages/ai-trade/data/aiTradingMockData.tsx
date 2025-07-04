import { AITradingStrategy } from "./aiTradingTypes";

export const aiTradingStrategies: AITradingStrategy[] = [
  {
    name: "AI 딥러닝 트레이딩",
    description: "딥러닝 기반의 고급 알고리즘으로 실시간 시장 분석을 수행합니다",
    percentage: 92,
    count: 1240,
    features: ["실시간 시장 분석", "자동 포트폴리오 조정", "강화 분석 기반 매매", "24/7 모니터링"],
  },
  {
    name: "AI 머신러닝 트레이딩",
    description: "머신러닝을 활용한 패턴 인식 기반의 매매 전략을 구성합니다",
    percentage: 88,
    count: 850,
    features: ["리스크 관리", "패턴 인식", "자동화된 매매 실행", "실시간 포트폴리오 최적화"],
  },
];
