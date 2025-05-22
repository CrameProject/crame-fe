import { Button } from "@components/ui/button.tsx";

const InvestmentNotice = () => {
  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">투자 위험 고지</h2>
        <p className="mb-3 text-gray-700">
          알고리즘 트레이딩은 높은 수익을 기대할 수 있지만, 그만큼 손실의 위험도 존재합니다.
        </p>
        <p className="text-gray-700">
          투자자는 자신의 투자 성향과 위험 감수 능력을 고려하여 신중하게 투자를 결정해야 합니다.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">법적 고지사항</h2>
        <ul className="space-y-2 text-gray-700">
          <li>모든 투자에 대한 책임은 본인에게 있습니다.</li>
          <li>과거의 수익률이 미래의 수익을 보장하지 않습니다.</li>
          <li>시장 상황에 따라 예상치 못한 손실이 발생할 수 있습니다.</li>
          <li>투자자는 자신의 판단과 책임하에 투자를 결정해야 합니다.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">권장 사항</h2>
        <ul className="space-y-2 text-gray-700">
          <li>충분한 투자 교육을 받은 후 거래를 시작하세요.</li>
          <li>감당할 수 있는 금액만 투자하세요.</li>
          <li>분산 투자를 통해 리스크를 관리하세요.</li>
          <li>정기적으로 포트폴리오를 검토하고 조정하세요.</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <Button className="h-[48px] w-[262px] rounded-[10px] bg-[#f2b94c] px-8 py-2 text-white hover:bg-[#e0a93a]">
          투자 시작하기
        </Button>
      </div>
    </div>
  );
};

export default InvestmentNotice;
