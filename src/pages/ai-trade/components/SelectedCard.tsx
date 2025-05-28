import { AITradingStrategy } from "../data/aiTradingTypes";
import { Button } from "@/components/ui/button";

type Props = {
  strategy: AITradingStrategy;
};

const SelectCard = ({ strategy }: Props) => (
  <div className="rounded-xl border border-neutral-300 bg-white p-6">
    <div className="mb-4 flex items-start justify-between border-neutral-200 bg-bg-1 p-3 font-sans">
      <div>
        <h3 className="mb-2 text-T2-SB text-text-default">{strategy.name}</h3>
        <p className="text-B2-M text-text-sub">{strategy.description}</p>
      </div>
      <div className="text-right">
        <div className="flex items-baseline justify-end gap-[4px]">
          <span className="text-[30px] font-[500] text-gold-600">{strategy.percentage}</span>
          <span className="text-B2-M text-gold-600">%</span>
        </div>
        <div className="text-C1-M text-text-sub">거래 횟수 {strategy.count}회</div>
      </div>
    </div>

    <hr className="my-4 border-t border-neutral-200" />

    <div className="mb-6">
      <h4 className="mb-2 text-B1-B text-text-default">주요 기능</h4>
      <ul className="list-disc space-y-1 pl-5 text-B2-M text-text-sub">
        {strategy.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>

    <Button className="h-[48px] w-full rounded-md bg-gold-300 text-B1-M text-white hover:bg-gold-400">
      전략 선택하기
    </Button>
  </div>
);

export default SelectCard;
