import { Button } from "@components/ui/button.tsx";

interface StartTradingButtonProps {
  onClick?: () => void;
}

const TradeButton = ({ onClick }: StartTradingButtonProps) => {
  return (
    <div className="mt-8 flex justify-center">
      <Button
        className="h-[48px] w-[262px] rounded-[10px] bg-[#f2b94c] px-8 py-2 text-white hover:bg-[#e0a93a]"
        onClick={onClick}
      >
        투자 시작하기
      </Button>
    </div>
  );
};

export default TradeButton;
