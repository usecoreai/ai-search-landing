"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { BRAND_NAME, landingContent } from "@/content/landing-content";
import { cn } from "@/lib/utils";
import { Search, Check, AlertCircle, Package } from "lucide-react";

const { demoScenarios } = landingContent;
const CYCLE_MS = 6000;

export function DemoTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const scenario = demoScenarios[activeTab];
  const startRef = useRef(Date.now());

  const goNext = useCallback(() => {
    setActiveTab((prev) => (prev + 1) % demoScenarios.length);
    startRef.current = Date.now();
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    startRef.current = Date.now() - progress * CYCLE_MS;
    let frame: number;
    const tick = () => {
      const p = Math.min((Date.now() - startRef.current) / CYCLE_MS, 1);
      setProgress(p);
      if (p >= 1) goNext();
      else frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [activeTab, paused, goNext, progress]);

  const selectTab = (i: number) => {
    setActiveTab(i);
    startRef.current = Date.now();
    setProgress(0);
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"
    >
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 bg-white px-3 py-2.5 sm:px-4 sm:py-3">
        <div className="hidden items-center gap-2 sm:flex">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-slate-200" />
            <span className="size-2.5 rounded-full bg-slate-200" />
            <span className="size-2.5 rounded-full bg-slate-200" />
          </div>
        </div>
        <div className="flex w-full gap-0.5 overflow-x-auto rounded-lg bg-slate-100/50 p-1 sm:w-auto sm:gap-1">
          {demoScenarios.map((s, i) => (
            <button
              key={s.tab}
              onClick={() => selectTab(i)}
              className={cn(
                "relative shrink-0 overflow-hidden rounded-md px-2.5 py-1 text-[11px] font-medium transition-all sm:px-3",
                i === activeTab
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              {i === activeTab && (
                <span
                  className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[#5B5BD6]"
                  style={{ transform: `scaleX(${progress})` }}
                />
              )}
              {s.tab}
            </button>
          ))}
        </div>
      </div>

      <div className="border-b border-slate-100 px-3 py-2.5 sm:px-4 sm:py-3">
        <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-2 sm:px-3.5 sm:py-2.5">
          <Search className="size-3.5 shrink-0 text-slate-400 sm:size-4" />
          <span className="text-[13px] font-medium text-slate-900 sm:text-sm">{scenario.query}</span>
        </div>
      </div>

      <div key={activeTab} className="tab-enter grid gap-3 bg-slate-50/50 px-3 py-3 sm:grid-cols-2 sm:gap-4 sm:px-4 sm:py-4">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Обычный поиск
          </span>
          <div className="flex flex-col gap-2 rounded-xl border border-slate-200/60 bg-white p-3 shadow-sm sm:min-h-[160px]">
            {scenario.oldResults.items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-200 bg-slate-50/50 p-4 text-center">
                <div className="flex size-8 items-center justify-center rounded-full bg-slate-100">
                  <Search className="size-4 text-slate-400" />
                </div>
                <span className="text-xs font-medium text-slate-500">{scenario.oldResults.status}</span>
              </div>
            ) : (
              <>
                {scenario.oldResults.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 rounded-lg border border-red-100 bg-red-50/30 p-2.5 opacity-60">
                    <AlertCircle className="mt-0.5 size-3.5 shrink-0 text-red-500" />
                    <span className="text-[11px] text-slate-600 line-through decoration-red-300 sm:text-xs">{item}</span>
                  </div>
                ))}
                <span className="mt-auto text-center text-[10px] text-slate-400">{scenario.oldResults.status}</span>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5B5BD6]">
            {BRAND_NAME}
          </span>
          <div className="flex flex-col gap-2 rounded-xl border border-[#5B5BD6]/15 bg-white p-2.5 sm:min-h-[160px] sm:p-3">
            {scenario.aiResults.items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2 rounded-lg border border-slate-100 bg-white p-2 sm:gap-3 sm:p-2.5"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="hidden size-8 shrink-0 items-center justify-center rounded-md bg-[#5B5BD6]/[0.08] text-[#5B5BD6] sm:flex">
                  <Package className="size-4" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="text-[11px] leading-snug font-medium text-slate-900 sm:text-xs">{item}</span>
                  <span className="flex items-center gap-1 text-[10px] font-medium text-[#1E9A6E]">
                    <Check className="size-2.5" />
                    Релевантно
                  </span>
                </div>
              </div>
            ))}
            <div className="mt-auto flex flex-wrap items-center justify-between gap-1 border-t border-slate-100 pt-2 text-[9px] sm:text-[10px]">
              <span className="text-slate-400">0.04s</span>
              <span className="rounded-full bg-[#1E9A6E]/10 px-2 py-0.5 font-bold text-[#1E9A6E]">
                {scenario.aiResults.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
