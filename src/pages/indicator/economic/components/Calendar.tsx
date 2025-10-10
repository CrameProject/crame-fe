import React, { useState } from "react";
import PrevIcon from "@/pages/indicator/assets/prev.svg";
import NextIcon from "@/pages/indicator/assets/next.svg";

interface DailyData {
  text: string;
  flag: string;
}

interface CalendarData {
  [key: string]: DailyData[];
}

const calendarData: CalendarData = {
  "2025-09-01": [{ text: "무역수지", flag: "🇬🇧" }],
  "2025-09-02": [{ text: "무역수지", flag: "🇬🇧" }],
  "2025-09-11": [
    { text: "무역수지", flag: "🇬🇧" },
    { text: "생산자물가지수(PPI)", flag: "🇺🇸" },
    { text: "물가지수", flag: "🇺🇸" },
    { text: "소비자물가지수(CPI)", flag: "🇫🇷" },
  ],
};

const days = ["일", "월", "화", "수", "목", "금", "토"];

interface CalendarProps {
  onDayClick?: (date: Date) => void;
  highlightToday?: (date: Date) => boolean;
}

const Calendar: React.FC<CalendarProps> = ({ onDayClick, highlightToday }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const today: Date = new Date();

  const handlePrevMonth = () =>
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );

  const handleNextMonth = () =>
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );

  const year: number = currentDate.getFullYear();
  const month: number = currentDate.getMonth();

  const getDaysInMonth = (year: number, month: number): number =>
    new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (year: number, month: number): number =>
    new Date(year, month, 1).getDay();

  const daysInMonth: number = getDaysInMonth(year, month);
  const startDay: number = getFirstDayOfMonth(year, month);

  const formatDate = (date: Date): string => {
    const year: number = date.getFullYear();
    const month: string = (date.getMonth() + 1).toString().padStart(2, "0");
    const day: string = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <main className="flex flex-1 justify-start">
      <div className="w-full max-w-4xl p-6 -ml-5">
        {/* 헤더 영역 */}
        <div className="mb-4 flex items-center justify-between">
          {/* 왼쪽: 화살표 두 개와 오늘 버튼 */}
          <div className="flex items-center">
            {/* 화살표 두 개 */}
            <div className="flex">
              <button
                onClick={handlePrevMonth}
                className="w-8 h-6 bg-white border border-neutral-200 flex items-center justify-center hover:bg-gray-50"
              >
                <img src={PrevIcon} alt="이전달" className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextMonth}
                className="w-8 h-6 bg-white border border-neutral-200 border-l-0 flex items-center justify-center hover:bg-gray-50"
              >
                <img src={NextIcon} alt="다음달" className="w-4 h-4" />
              </button>
            </div>

            {/* 오늘 버튼 */}
            <button
              onClick={() => setCurrentDate(new Date())}
              className="px-3 py-1 rounded-md bg-neutral-500 hover:bg-neutral-600 text-white text-sm font-medium ml-3"
            >
              오늘
            </button>
          </div>

          {/* 가운데: 달(month) 텍스트 */}
          <h1 className="text-2xl font-semibold">
            {year}년 {month + 1}월
          </h1>

          {/* 오른쪽: 빈 공간 */}
          <div className="w-24"></div>
        </div>

        {/* 달력 grid */}
        <div className="grid grid-cols-7 border border-neutral-200 text-sm text-black">
          {/* 요일 헤더 */}
          {days.map((day, i) => (
            <div
              key={day}
              className={`bg-neutral-100 py-2 text-base font-semibold border-b border-neutral-200 flex items-center justify-center
                ${i === 0 ? "text-red-500" : "text-gray-700"}`}
            >
              {day}
            </div>
          ))}

          {/* 이번 달 앞부분 (지난 달 날짜 채우기) */}
          {Array.from({ length: startDay }).map((_, i) => {
            const prevDate = new Date(year, month, -startDay + i + 1);
            const isLastInRow = (i + 1) % 7 === 0;
            return (
              <div
                key={`prev-${i}`}
                className={`aspect-square border-b border-neutral-200 p-1 flex flex-col items-start ${
                  !isLastInRow ? 'border-r' : ''
                }`}
              >
                <span className="text-xs text-gray-400">{prevDate.getDate()}</span>
              </div>
            );
          })}

          {/* 이번 달 날짜 */}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const date = new Date(year, month, i + 1);
            const isSunday = (i + startDay) % 7 === 0;
            const isToday =
              date.getFullYear() === today.getFullYear() &&
              date.getMonth() === today.getMonth() &&
              date.getDate() === today.getDate();

            const isTodayHighlighted =
              typeof highlightToday === "function"
                ? highlightToday(date)
                : isToday;

            const dailyData = calendarData[formatDate(date)] || [];
            const isLastInRow = (i + startDay + 1) % 7 === 0;

            return (
              <div
                key={i}
                className={`relative aspect-square cursor-pointer border-b border-neutral-200
                flex flex-col items-start p-1 ${
                  !isLastInRow ? 'border-r' : ''
                }
                ${isTodayHighlighted ? "bg-blue-100" : "bg-white"}`}
                onClick={() => onDayClick?.(date)}
              >
                <div className="flex justify-between items-center w-full">
                  <span
                    className={`text-xs font-semibold ${
                      isSunday ? "text-red-500" : "text-neutral-800"
                    }`}
                  >
                    {i + 1}
                  </span>
                  {dailyData.length > 0 && (
                    <button
                      className="text-gray-400 hover:text-gray-600 text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        // TODO: 모달 열기 기능 추가 예정
                        console.log('모달 열기:', formatDate(date));
                      }}
                    >
                      &gt;
                    </button>
                  )}
                </div>
                {dailyData.length > 0 && (
                  <div className="mt-1 space-y-0.5 w-full flex-1 overflow-hidden">
                    {dailyData.slice(0, 2).map((item, dataIndex) => (
                      <div
                        key={dataIndex}
                        className="flex items-center text-xs truncate"
                      >
                        <span className="mr-1 flex-shrink-0">{item.flag}</span>
                        <span className="text-gray-700 text-xs leading-tight">{item.text}</span>
                      </div>
                    ))}
                    {dailyData.length > 2 && (
                      <div className="text-xs text-gray-400">
                        +{dailyData.length - 2}개 더
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* 다음 달 날짜 채우기 */}
          {Array.from({
            length: (7 - ((daysInMonth + startDay) % 7)) % 7,
          }).map((_, i) => {
            const nextDate = new Date(year, month + 1, i + 1);
            const isLastInRow = (i + 1) % 7 === 0;
            return (
              <div
                key={`next-${i}`}
                className={`aspect-square border-b border-neutral-200 p-1 flex flex-col items-start ${
                  !isLastInRow ? 'border-r' : ''
                }`}
              >
                <span className="text-xs text-gray-400">{nextDate.getDate()}</span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Calendar;
