import React, { useState, useMemo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import TransactionTable from "./TransactionTable";
import TransactionFilters from "./TransactionFilters";
import {
  Transaction,
  SortKey,
  SortDir,
  Category,
  OrderType,
  TradeType,
} from "./types/transaction";

/** ---- Mock Data (예시) ---- */
const mockTx: Transaction[] = [
    {
        id: "T-2025-01-01-001",
        date: "2025-01-01",
        time: "00:00:00",
        category: "AI 딥러닝 트레이딩",
        division: "시장가",
        type: "체결",
        quantity: 1,
        price: 850_000,
        pnl: 533_840,
        side: "매도",
    },
    {
        id: "T-2025-01-01-002",
        date: "2025-01-01",
        time: "00:10:00",
        category: "AI 딥러닝 트레이딩",
        division: "지정가",
        type: "체결",
        quantity: 1,
        price: 850_000,
        pnl: 533_840,
        side: "매도",
    },
    {
        id: "T-2025-01-01-003",
        date: "2025-01-01",
        time: "00:24:01",
        category: "AI 딥러닝 트레이딩",
        division: "시장가",
        type: "체결",
        quantity: 1,
        price: 850_000,
        pnl: -12_000,
        side: "매수",
    },
    {
        id: "T-2025-01-01-004",
        date: "2025-01-01",
        time: "00:00:8",
        category: "AI 딥러닝 트레이딩",
        division: "시장가",
        type: "미체결",
        quantity: 1,
        price: 850_000,
        pnl: 300,
        side: "매수",
    },
    {
        id: "T-2025-01-01-005",
        date: "2025-01-01",
        time: "00:00:00",
        category: "AI 딥러닝 트레이딩",
        division: "시장가",
        type: "체결",
        quantity: 1,
        price: 850_000,
        pnl: 533_840,
        side: "매도",
    },
];

export default function TransactionHistory() {
  const [data] = useState<Transaction[]>(mockTx);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<"stock" | "period">("stock");

  const [fCategory, setFCategory] = useState<Category[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 10;

  const filtered = useMemo(() => {
    if (selectedFilter === "stock" && fCategory.length > 0) {
      return data.filter((d) => fCategory.includes(d.category));
    }
    return data;
  }, [data, fCategory, selectedFilter]);

  const sorted = useMemo(() => {
      const arr = [...filtered];
      arr.sort((a, b) => {
          const va = String(a[sortKey]);
          const vb = String(b[sortKey]);
          if (va === vb) return 0;
          return sortDir === "asc" ? (va < vb ? -1 : 1) : va > vb ? -1 : 1;
      });
      return arr;
  }, [filtered, sortKey, sortDir]);

  const total = sorted.length;
  const paged = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const toggleLabel = isExpanded ? "간단히 보기" : "자세히 보기";
  const Icon = isExpanded ? ChevronUp : ChevronDown;

  const toggleSort = (key: SortKey) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
    } else {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    }
  };

  const handleCategoryFilterChange = (type: "category", value: Category[]) => {
    setFCategory(value);
  };

  const handleTopFilterChange = (filter: "stock" | "period") => {
    setSelectedFilter(filter);
    if (filter === "period") {
      setFCategory([]);
    }
  };

  return (
    <div className="mt-20">
      <h2 className="text-xl ml-2 font-semibold">거래내역</h2>

      <section className="bg-white rounded-md border border-neutral-200 p-8 mt-3 space-y-4">
        <div className="flex flex-col p-3">
          <p className="text-T2-B text-text-default">총 {total}회</p>
            <div className="mt-5">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-B2-M text-gold-500 flex items-center gap-1"
              >
                <Icon size={16} />
                {toggleLabel}
              </button>
            </div>
        </div>


        {isExpanded && (
          <>
            <div className="flex justify-start gap-2 pb-2 pt-2">
              <TransactionFilters
                fCategory={fCategory}
                onFilterChange={handleCategoryFilterChange}
                isOtherFilterSelected={selectedFilter === "period"}
                onTopFilterClick={() => handleTopFilterChange("stock")}
                selectedFilter={selectedFilter}
              />
              <button
                onClick={() => handleTopFilterChange("period")}
                className={cn(
                  "border text-sm px-3 py-1 rounded-full",
                  selectedFilter === "period"
                    ? "bg-gold-300 text-white"
                    : "border-neutral-200"
                )}
              >
                기간별
              </button>
            </div>
            <TransactionTable
              data={paged}
              sortKey={sortKey}
              sortDir={sortDir}
              onSort={toggleSort}
            />
          </>
        )}
      </section>
    </div>
  );
}