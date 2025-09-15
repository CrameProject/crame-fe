// TransactionHistory 컴포넌트에서 사용되는 모든 타입 정의
export type Side = "매수" | "매도";
export type OrderType = "시장가" | "지정가";
export type TradeType = "체결" | "미체결";
export type Category = "AI 딥러닝 트레이딩" | "알고리즘 트레이딩" | "Test 트레이딩";

export interface Transaction {
  id: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm:ss
  category: Category; // 트레이딩 종류
  side: Side; // 매수/매도
  type: TradeType; // 체결여부
  division: OrderType; // 주문방식
  quantity: number; // 주문량
  price: number; // 체결가(원)
  pnl: number; // 순익(원)
}

// 정렬에 사용되는 키와 방향
export type SortKey = keyof Pick<
  Transaction,
  "date" | "time" | "category" | "division" | "type" | "quantity" | "price" | "pnl"
>;
export type SortDir = "asc" | "desc";