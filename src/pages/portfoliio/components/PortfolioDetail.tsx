import React from "react";

const mockPortfolioDetail = [
    {
      tradingType: "AI 딥러닝 트레이딩",
      strategy: "고빈도 거래 전략",
      amount: "₩ 850,000",
      returnRate: "+1.2%",
      isPositive: true,
    },
    {
      tradingType: "AI 딥러닝 트레이딩",
      strategy: "고빈도 거래 전략",
      amount: "₩ 920,000",
      returnRate: "-0.7%",
      isPositive: false,
    },
  ];

const PortfolioDetail = () => {
  return (
    <div className="mt-4">
      <table className="w-full text-sm border-t border-gray-200">
        <thead>
          <tr className="text-gray-500 text-left">
            <th className="py-2">트레이딩 종류</th>
            <th className="py-2">전략종류</th>
            <th className="py-2">금액</th>
            <th className="py-2">수익률</th>
          </tr>
        </thead>

        <tbody className="text-gray-700">
          {mockPortfolioDetail.map((item, index) => (
            <tr key={index} className="border-t border-gray-100">
              <td className="py-2">{item.tradingType}</td>
              <td className="py-2">{item.strategy}</td>
              <td className="py-2">{item.amount}</td>
              <td className={`py-2 ${ item.isPositive ? "text-system-positive" : "text-system-negative"}`}>
                {item.returnRate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioDetail;
