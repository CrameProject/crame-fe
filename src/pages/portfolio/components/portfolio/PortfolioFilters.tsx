import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { cn } from "@/lib/utils";

type TradingType = "AI 딥러닝 트레이딩" | "알고리즘 트레이딩";

interface PortfolioFiltersProps {
  onFilterChange: (value: TradingType[]) => void;
  fTradingType: TradingType[];
  selectedFilter: "stock" | "period";
  onTopFilterClick: () => void;
  isOtherFilterSelected?: boolean;
}

const tradingTypes: TradingType[] = [
  "AI 딥러닝 트레이딩",
  "알고리즘 트레이딩",
];

export default function PortfolioFilters({
  onFilterChange,
  fTradingType,
  selectedFilter,
  onTopFilterClick,
  isOtherFilterSelected,
}: PortfolioFiltersProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isOtherFilterSelected) {
      setOpen(false);
      onFilterChange([]);
    }
  }, [isOtherFilterSelected, onFilterChange]);

  const handleToggleType = (type: TradingType) => {
    const isSelected = fTradingType.includes(type);
    if (isSelected) {
      onFilterChange(fTradingType.filter((t) => t !== type));
    } else {
      onFilterChange([...fTradingType, type]);
    }
  };

  const handleClear = () => {
    onFilterChange([]);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => {
          onTopFilterClick();
          setOpen((prev) => !prev);
        }}
        className={cn(
          "border text-sm px-3 py-1 rounded-full",
          selectedFilter === "stock"
            ? "bg-gold-300 text-white"
            : "border-neutral-200"
        )}
      >
        <span>종목별</span>
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-56 rounded-lg border border-gray-200 bg-white p-2 shadow-md">
          <div className="flex items-center justify-between px-2 py-1">
            <span className="text-xs text-gray-500">종목</span>
            <button
              onClick={handleClear}
              className="text-xs text-gray-400 hover:text-black flex items-center gap-1"
            >
              <X size={12} /> 초기화
            </button>
          </div>
          <div className="grid grid-cols-1 gap-1 max-h-56 overflow-auto p-1">
            {tradingTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleToggleType(type)}
                className={cn(
                  "text-left px-3 py-2 rounded-md hover:bg-neutral-50 text-sm flex items-center",
                  fTradingType.includes(type) && "bg-yellow-50 border border-yellow-200"
                )}
              >
                <input
                  type="checkbox"
                  checked={fTradingType.includes(type)}
                  onChange={() => {}}
                  className="mr-2 rounded-sm"
                />
                {type}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}