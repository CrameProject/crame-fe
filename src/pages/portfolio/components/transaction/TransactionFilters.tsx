import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Category } from "./types/transaction";

interface TransactionFiltersProps {
  onFilterChange: (type: "category", value: Category[]) => void;
  fCategory: Category[];
  isOtherFilterSelected?: boolean; // 기간별 필터가 선택되었는지 알려주는 prop
  onTopFilterClick: () => void; // 상위 필터 버튼 클릭 핸들러 추가
  selectedFilter: "stock" | "period"; // 현재 선택된 필터 상태 추가
}

const categories: Category[] = [
  "AI 딥러닝 트레이딩",
  "알고리즘 트레이딩",
  "Test 트레이딩",
];

export default function TransactionFilters({
  onFilterChange,
  fCategory,
  isOtherFilterSelected,
  onTopFilterClick, // props로 받음
  selectedFilter, // props로 받음
}: TransactionFiltersProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isOtherFilterSelected) {
      setOpen(false);
      onFilterChange("category", []);
    }
  }, [isOtherFilterSelected, onFilterChange]);

  const handleToggleCategory = (category: Category) => {
    const isSelected = fCategory.includes(category);
    if (isSelected) {
      onFilterChange(
        "category",
        fCategory.filter((c) => c !== category)
      );
    } else {
      onFilterChange("category", [...fCategory, category]);
    }
  };

  const handleClear = () => {
    onFilterChange("category", []);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => {
          onTopFilterClick(); // 상위 필터 클릭 함수 호출
          setOpen((prev) => !prev);
        }}
        className={cn(
          "border text-sm px-3 py-1 rounded-full",
          selectedFilter === "stock"
            ? "bg-gold-300 text-white"
            : "border-neutral-200 text-gray-700 hover:bg-neutral-50"
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
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleToggleCategory(category)}
                className={cn(
                  "text-left px-3 py-2 rounded-md hover:bg-neutral-50 text-sm flex items-center",
                  fCategory.includes(category) && "bg-yellow-50 border border-yellow-200"
                )}
              >
                <input
                  type="checkbox"
                  checked={fCategory.includes(category)}
                  onChange={() => {}}
                  className="mr-2 rounded-sm"
                />
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}