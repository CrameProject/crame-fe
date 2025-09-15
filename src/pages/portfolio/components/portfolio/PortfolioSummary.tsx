import React, { useMemo, useState } from "react";
import PortfolioDetail, {
  mockPortfolioDetail,
  PortfolioItem,
} from "./PortfolioDetail";
import { ChevronDown, ChevronUp } from "lucide-react";
import PortfolioFilters from "./PortfolioFilters";
import { cn } from "@/lib/utils";
import Calendar from "../Calendar";

type TradingType = "AI 딥러닝 트레이딩" | "알고리즘 트레이딩";

function parseYMD(s: string) {
  // "YYYY-MM-DD" -> Date
  const [y, m, d] = s.split("-").map((n) => parseInt(n, 10));
  return new Date(y, m - 1, d);
}
function inRange(dateStr: string, start?: Date | null, end?: Date | null) {
  if (!start || !end) return true;
  const t = parseYMD(dateStr).setHours(0, 0, 0, 0);
  const s = new Date(start).setHours(0, 0, 0, 0);
  const e = new Date(end).setHours(0, 0, 0, 0);
  return t >= s && t <= e;
}

const PortfolioSummary = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<"stock" | "period">(
    "stock"
  );
  const [fTradingType, setFTradingType] = useState<TradingType[]>([]);

  // 기간 팝업 & 선택 기간
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [pickedRange, setPickedRange] = useState<{
    start: Date;
    end: Date;
  } | null>(null);

  const toggleLabel = isExpanded ? "간단히 보기" : "자세히 보기";
  const Icon = isExpanded ? ChevronUp : ChevronDown;

  // 필터 결과
  const stockFiltered = useMemo(() => {
    if (selectedFilter === "stock" && fTradingType.length > 0) {
      return mockPortfolioDetail.filter((item) =>
        fTradingType.includes(item.tradingType as TradingType)
      );
    }
    return mockPortfolioDetail;
  }, [fTradingType, selectedFilter]);

  const periodFiltered = useMemo(() => {
    if (selectedFilter !== "period") return mockPortfolioDetail;
    return mockPortfolioDetail.filter((it) =>
      inRange(it.date, pickedRange?.start, pickedRange?.end)
    );
  }, [selectedFilter, pickedRange]);

  const handleTradingTypeChange = (value: TradingType[]) => {
    setFTradingType(value);
  };

  const handleTopFilterChange = (filter: "stock" | "period") => {
    setSelectedFilter(filter);
    if (filter === "period") {
      setFTradingType([]); // 다른 필터 초기화
      setCalendarOpen((prev) => !prev); // 버튼 토글로 열고 닫기
    }
  };

  return (
    <div className="mt-20">
      <h2 className="ml-2 text-xl font-semibold">포트폴리오 현황</h2>

      <section className="mt-3 space-y-4 rounded-md border border-neutral-200 bg-white p-8">
        <div className="flex justify-between p-3">
          <div>
            <p className="text-T2-B text-text-default">₩ 12,345,678원</p>
          </div>
          <div>
            <p className="text-T2-B text-system-positive">+ 10.2%</p>
          </div>
        </div>

        <div className="ml-3 text-left">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-B2-M flex items-center gap-1 text-gold-500"
          >
            <Icon size={16} />
            {toggleLabel}
          </button>
        </div>

        {isExpanded && (
          <>
            {/* 필터 바 (기간 팝업은 버튼 바로 아래에 뜸) */}
            <div className="relative flex justify-start gap-2 pb-2 pt-2">
              <PortfolioFilters
                fTradingType={fTradingType}
                onFilterChange={handleTradingTypeChange}
                selectedFilter={selectedFilter}
                onTopFilterClick={() => handleTopFilterChange("stock")}
                isOtherFilterSelected={selectedFilter === "period"}
              />

              <div className="relative">
                <button
                  onClick={() => handleTopFilterChange("period")}
                  className={cn(
                    "rounded-full border px-3 py-1 text-sm",
                    selectedFilter === "period"
                      ? "bg-gold-300 text-white"
                      : "border-neutral-200"
                  )}
                >
                  기간별
                </button>

                <Calendar
                    open={calendarOpen}
                    onClose={() => setCalendarOpen(false)}
                    onApply={(range) => {
                        setPickedRange(range ?? null);
                        if (range) setCalendarOpen(false);  
                    }}
                    className="left-0 top-full"
                />
              </div>
            </div>

            {/* 표 영역 */}
            {selectedFilter === "stock" && <PortfolioDetail data={stockFiltered} />}

            {selectedFilter === "period" && (
              <div className="relative">
                {/* 선택된 기간 프리뷰 */}
                <div className="mb-2 text-sm text-gray-500"></div>
                <PortfolioDetail data={periodFiltered} />
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default PortfolioSummary;
