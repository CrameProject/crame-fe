import { TradingSystem } from './types';

export const tradingSystems: TradingSystem[] = [
  {
    id: 'ai-trading',
    title: 'AI 트레이딩',
    subtitle: '프리미엄',
    price: '₩100,000',
    priceInfo: '안전보증 ₩100,000 / 월마다',
    metrics: {
      winRate: 92,
      annualReturn: 45,
      volatility: 12,
      maxDrawdown: 15,
    },
    features: [
      '딥러닝 기반 실시간 시장 분석',
      '뉴스 및 시장 심리 분석',
      '자동 포트폴리오 최적화',
      '24/7 실시간 모니터링'
    ],
    strategies: [
      {
        name: 'AI 타이밍 트레이딩',
        count: 1240,
        percentage: 92,
      },
      {
        name: 'AI 머신러닝 트레이딩',
        count: 850,
        percentage: 88,
      }
    ],
    buttonText: '프리미엄 구독하기',
    isDisabled: false,
  },
  {
    id: 'algorithm-trading',
    title: '알고리즘 트레이딩',
    subtitle: '기본',
    price: '₩0',
    priceInfo: '안전보증 ₩100,000 / 월마다',
    metrics: {
      winRate: 78,
      annualReturn: 28,
      volatility: 18,
      maxDrawdown: 22,
    },
    features: [
      '기술적 지표 기반 분석',
      '전통적인 매매 전략',
      '기본 백테스팅 지원',
      '수동 전략 최적화'
    ],
    strategies: [
      {
        name: '볼린저 밴드 전략',
        count: 640,
        percentage: 75,
      },
      {
        name: '이동평균선 교차',
        count: 580,
        percentage: 72,
      }
    ],
    buttonText: '현재 나의 플랜',
    isDisabled: false,
  }
]; 