import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const dayLabels = ["일", "월", "화", "수", "목", "금", "토"];

type Props = {
  open: boolean;
  onClose: () => void;
  onApply?: (range: { start: Date; end: Date } | null) => void; 
  className?: string; // 위치 커스터마이즈용
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}
function isSameDay(a: Date | null, b: Date | null) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
function isWithin(d: Date, s: Date, e: Date) {
  const t = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const st = new Date(s.getFullYear(), s.getMonth(), s.getDate()).getTime();
  const et = new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
  return t > st && t < et;
}

export default function DateRangeCalendarPopup({
  open,
  onClose,
  onApply,
  className,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 닫기
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open, onClose]);

  const [viewDate, setViewDate] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const startDay = getFirstDayOfMonth(year, month);

  const cells = useMemo(() => {
    const blanks = Array.from({ length: startDay }).map((_, i) => (
      <div key={`blank-${i}`} className="aspect-square" />
    ));
    const days = Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1));
    return [...blanks, ...days];
  }, [startDay, daysInMonth, month, year]);

  const handlePick = (d: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(d);
      setEndDate(null);
      onApply?.(null); 
    }
    if (startDate && !endDate) {
      if (d < startDate) setStartDate(d);
      else setEndDate(d);
    }
  };

  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
  };

  if (!open) return null;

  return (
    <div
      ref={wrapRef}
      className={cn(
        "absolute z-50 mt-2 w-[360px] rounded-xl border border-gray-200 bg-white shadow-lg",
        className
      )}
    >
      {/* 헤더 */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
        <button
          onClick={() => setViewDate(new Date(year, month - 1, 1))}
          className="h-8 w-8 rounded-md border border-gray-200 text-lg leading-none"
          aria-label="prev-month"
        >
          ‹
        </button>
        <span className="font-semibold select-none">
          {year}년 {month + 1}월
        </span>
        <button
          onClick={() => setViewDate(new Date(year, month + 1, 1))}
          className="h-8 w-8 rounded-md border border-gray-200 text-lg leading-none"
          aria-label="next-month"
        >
          ›
        </button>
      </div>

      {/* 요일 */}
      <div className="grid grid-cols-7 px-3 pt-2 text-center text-xs font-semibold text-gray-600">
        {dayLabels.map((d, i) => (
          <div key={d} className={cn("py-2", i === 0 && "text-[#FF6464]")}>
            {d}
          </div>
        ))}
      </div>

      {/* 날짜 */}
      <div className="grid grid-cols-7 px-3 pb-2 text-sm">
        {cells.map((cell, idx) => {
          if (!(cell instanceof Date)) return <div key={idx} className="aspect-square" />;
          const d = cell;
          const selectedStart = isSameDay(d, startDate);
          const selectedEnd = isSameDay(d, endDate);
          const inRange = startDate && endDate ? isWithin(d, startDate, endDate) : false;

          return (
            <button
              key={d.toISOString()}
              onClick={() => handlePick(d)}
              className={cn(
                "relative aspect-square p-2 text-left rounded-lg hover:bg-neutral-50"
              )}
            >
              {/* 범위 하이라이트 */}
              {inRange && (
                <span className="pointer-events-none absolute inset-y-1 left-1 right-1 rounded-md bg-yellow-50" />
              )}
              <span
                className={cn(
                  "relative inline-flex h-7 w-7 items-center justify-center rounded-full text-base font-semibold",
                  selectedStart || selectedEnd ? "bg-gold-300 text-white" : ""
                )}
              >
                {d.getDate()}
              </span>
            </button>
          );
        })}
      </div>

      {/* 액션 */}
      <div className="flex items-center justify-between gap-2 border-t border-gray-100 px-4 py-2">
        <div className="text-xs text-gray-500">
          {startDate
            ? endDate
              ? `${startDate.getFullYear()}.${startDate.getMonth() + 1}.${startDate.getDate()} ~ ${endDate.getFullYear()}.${endDate.getMonth() + 1}.${endDate.getDate()}`
              : `${startDate.getFullYear()}.${startDate.getMonth() + 1}.${startDate.getDate()} ~ 선택 중…`
            : "기간을 선택하세요"}
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleClear}
            className="rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
          >
            초기화
          </button>
          <button
            onClick={() => onApply?.(startDate && endDate ? { start: startDate, end: endDate } : null)}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm",
              startDate && endDate ? "bg-gold-300 text-white" : "bg-gray-100 text-gray-400 cursor-not-allowed"
            )}
            disabled={!startDate || !endDate}
          >
            적용
          </button>
        </div>
      </div>
    </div>
  );
}
