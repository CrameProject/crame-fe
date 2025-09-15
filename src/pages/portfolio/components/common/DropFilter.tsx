import React, { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { cn } from "@/lib/utils"; // 경로는 프로젝트 구조에 맞게 수정

interface DropFilterProps<T extends string> {
  label: string;
  value?: T;
  options: T[];
  onChange: (v?: T) => void;
}

export default function DropFilter<T extends string>({
  label,
  value,
  options,
  onChange,
}: DropFilterProps<T>) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex items-center gap-1 px-3 py-1 rounded-full border border-neutral-200 text-sm hover:bg-neutral-50"
        )}
      >
        <span className="text-gray-600">{label}</span>
        <span className={cn("font-medium", value ? "text-black" : "text-gray-400")}>
          {value ?? "기본값"}
        </span>
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-56 rounded-lg border border-gray-200 bg-white p-2 shadow-md">
          <div className="flex items-center justify-between px-2 py-1">
            <span className="text-xs text-gray-500">{label}</span>
            <button
              onClick={() => {
                onChange(undefined);
                setOpen(false);
              }}
              className="text-xs text-gray-400 hover:text-black flex items-center gap-1"
            >
              <X size={12} /> 초기화
            </button>
          </div>
          <div className="grid grid-cols-1 gap-1 max-h-56 overflow-auto p-1">
            {options.map((op) => (
              <button
                key={op}
                onClick={() => {
                  onChange(op);
                  setOpen(false);
                }}
                className={cn(
                  "text-left px-3 py-2 rounded-md hover:bg-neutral-50 text-sm",
                  value === op && "bg-yellow-50 border border-yellow-200"
                )}
              >
                {op}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}