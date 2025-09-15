import React from "react";
import { cn } from "@/lib/utils";

export type PortfolioItem = {
  tradingType: string;
  strategy: string;
  amount: string;
  returnRate: string;
  isPositive: boolean;
  /** YYYY-MM-DD 형식*/
  date: string;
};

export const mockPortfolioDetail: PortfolioItem[] = [
  {
    tradingType: "AI 딥러닝 트레이딩",
    strategy: "고빈도 거래 전략",
    amount: "₩ 850,000",
    returnRate: "+1.2%",
    isPositive: true,
    date: "2025-01-03",
  },
  {
    tradingType: "AI 딥러닝 트레이딩",
    strategy: "고빈도 거래 전략",
    amount: "₩ 1,200,000",
    returnRate: "-0.7%",
    isPositive: false,
    date: "2025-01-07",
  },
  {
    tradingType: "알고리즘 트레이딩",
    strategy: "고빈도 거래 전략",
    amount: "₩ 3,400,000",
    returnRate: "+5.8%",
    isPositive: true,
    date: "2025-01-12",
  },
  {
    tradingType: "알고리즘 트레이딩",
    strategy: "고빈도 거래 전략",
    amount: "₩ 5,100,000",
    returnRate: "-2.1%",
    isPositive: false,
    date: "2025-01-19",
  },
  {
    tradingType: "AI 딥러닝 트레이딩",
    strategy: "고빈도 거래 전략",
    amount: "₩ 920,000",
    returnRate: "+0.5%",
    isPositive: true,
    date: "2025-01-23",
  },
];

interface PortfolioDetailProps {
  data: PortfolioItem[];
}

const PortfolioDetail = ({ data }: PortfolioDetailProps) => {
  return (
    <div className="mt-4">
      <table className="w-full text-sm border-t border-gray-200">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="py-2">트레이딩 종류</th>
            <th className="py-2">전략종류</th>
            <th className="py-2">금액</th>
            <th className="py-2">수익률</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.length === 0 ? (
            <tr>
              <td colSpan={4} className="py-4 text-center text-gray-400">
                선택된 종목이 없습니다.
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index} className="border-t border-gray-100">
                <td className="py-2">{item.tradingType}</td>
                <td className="py-2">{item.strategy}</td>
                <td className="py-2">{item.amount}</td>
                <td
                  className={cn(
                    "py-2",
                    item.isPositive ? "text-system-positive" : "text-system-negative"
                  )}
                >
                  {item.returnRate}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioDetail;
