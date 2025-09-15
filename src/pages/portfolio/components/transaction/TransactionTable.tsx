import React from "react";
import { cn } from "@/lib/utils";
import { Transaction, SortKey, SortDir } from "./types/transaction";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TransactionTableProps {
  data: Transaction[];
  sortKey: SortKey;
  sortDir: SortDir;
  onSort: (key: SortKey) => void;
}

// ₩ 기호와 숫자를 통일된 형식으로 변환
const nfmt = (n: number) => `₩ ${n.toLocaleString()}`;

export default function TransactionTable({
  data,
  sortKey,
  sortDir,
  onSort,
}: TransactionTableProps) {
  return (
    <table className="w-full text-sm">
      <thead className="text-gray-500 border-b-2 border-gray-100">
        <tr>
          {[
            ["date", "날짜"] as const,
            ["time", "시간"] as const,
            ["category", "종목"] as const,
            ["side", "구분"] as const,
            ["type", "체결여부"] as const,
            ["division", "유형"] as const,
            ["quantity", "주문량"] as const,
            ["price", "체결가"] as const,
            ["pnl", "손익"] as const,
          ].map(([key, label]) => (
            <th
              key={key}
              onClick={() => onSort(key as SortKey)}
              className={cn(
                "px-4 py-3 text-left select-none cursor-pointer",
                sortKey === key ? "text-black" : ""
              )}
            >
              <div className="flex items-center gap-1">
                <span>{label}</span>
                {sortKey === key && (
                  <span className="text-xs">
                    {sortDir === "asc" ? "▲" : "▼"}
                  </span>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {data.length === 0 ? (
          <tr>
            <td colSpan={9} className="px-4 py-8 text-center text-gray-400">
              조건에 맞는 거래 내역이 없습니다.
            </td>
          </tr>
        ) : (
          data.map((tx) => (
            <tr key={tx.id} className="border-t border-gray-100">
              <td className="px-4 py-3">{tx.date}</td>
              <td className="px-4 py-3">{tx.time}</td>
              <td className="px-4 py-3">{tx.category}</td>
              <td
                className={cn(
                  "px-4 py-3",
                  tx.side === "매수" ? "text-blue-500" : "text-red-500"
                )}
              >
                {tx.side}
              </td>
              <td className="px-4 py-3">
                <span
                  className={cn(
                    "px-2 py-0.5 rounded-full text-xs border",
                    tx.type === "체결"
                      ? "border-blue-200 text-blue-600 bg-blue-50"
                      : "border-gray-200 text-gray-500 bg-gray-50"
                  )}
                >
                  {tx.type}
                </span>
              </td>
              <td className="px-4 py-3">{tx.division}</td>
              <td className="px-4 py-3">{tx.quantity.toLocaleString()}</td>
              <td className="px-4 py-3">₩ {tx.price.toLocaleString()}</td>
              <td
                className={cn(
                  "px-4 py-3 font-semibold",
                  tx.pnl >= 0 ? "text-system-positive" : "text-system-negative"
                )}
              >
                {/* 손익(pnl) 렌더링 로직 수정 */}
                {tx.pnl >= 0 ? `+${nfmt(tx.pnl)}` : `-${nfmt(Math.abs(tx.pnl))}`}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}