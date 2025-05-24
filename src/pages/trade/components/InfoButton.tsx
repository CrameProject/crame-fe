import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const InfoButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/trade/info");
  };

  return (
    <div className="flex justify-center">
      <Button
        variant="default"
        className="h-[48px] w-[262px] rounded-[10px] bg-[#f2b94c] px-8 py-2 text-white hover:bg-[#e0a93a]"
        onClick={handleClick}
      >
        투자 유의사항 및 API 안내
      </Button>
    </div>
  );
};

export default InfoButton;
