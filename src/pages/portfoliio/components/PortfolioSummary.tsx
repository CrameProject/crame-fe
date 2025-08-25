import React, { useState } from "react";
import PortfolioDetail from "./PortfolioDetail";
import { ChevronDown, ChevronUp } from "lucide-react";

const PortfolioSummary = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<"stock" | "period">("stock");

  const toggleLabel = isExpanded ? "간단히 보기" : "자세히 보기";
  const Icon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div className="mt-20">
      <h2 className="text-xl ml-2 font-semibold">포트폴리오 현황</h2>

      <section className="bg-white rounded-md border border-neutral-200 p-8 mt-3 space-y-4">
        <div className="flex justify-between p-3">
          <div>
            <p className="text-T2-B text-text-default">₩ 12,345,678원</p>
          </div>
          <div>
            <p className="text-T2-B text-system-positive">+ 10.2%</p>
          </div>
        </div>

        <div className="text-left ml-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-B2-M text-gold-500 flex items-center gap-1"
          >
            <Icon size={16} />
            {toggleLabel}
          </button>
        </div>

        {isExpanded && (
          <div className="flex justify-start gap-2 pb-2 pt-2">
            <button
              onClick={() => setSelectedFilter("stock")}
              className={`bordr text-B2-M px-3 py-1 rounded-full ${
                selectedFilter === "stock"
                  ? "bg-gold-300 text-white"
                  : "border-neutral-200"
              }`}
            >
              종목별
            </button>
            <button
              onClick={() => setSelectedFilter("period")}
              className={`border text-B2-M px-3 py-1 rounded-full ${
                selectedFilter === "period"
                  ? "bg-gold-300 text-white"
                  : "border-neutral-200"
              }`}
            >
              기간별
            </button>
          </div>
        )}

        {isExpanded && <PortfolioDetail />}

      </section>
    </div>
  );
};

export default PortfolioSummary;
