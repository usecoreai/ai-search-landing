"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { BRAND_NAME, landingContent } from "@/content/landing-content";
import { cn } from "@/lib/utils";
import {
  Search,
  Check,
  AlertCircle,
  Package,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const { demoScenarios } = landingContent;
const CYCLE_MS = 6000;

export function DemoTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const scenario = demoScenarios[activeTab];
  const rafRef = useRef<number>(0);
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
      const elapsed = Date.now() - startRef.current;
      const p = Math.min(elapsed / CYCLE_MS, 1);
      setProgress(p);
      if (p >= 1) {
        goNext();
      } else {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);
    rafRef.current = frame;

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
      className="relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)] backdrop-blur-xl ring-1 ring-white/50"
    >
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 bg-white/50 px-3 py-2.5 sm:px-4 sm:py-3">
        <div className="hidden items-center gap-2 sm:flex">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-slate-200" />
            <span className="size-2.5 rounded-full bg-slate-200" />
            <span className="size-2.5 rounded-full bg-slate-200" />
          </div>
        </div>
        <div className="flex w-full gap-0.5 overflow-x-auto rounded-lg bg-slate-100/50 p-1 ring-1 ring-slate-200/50 sm:w-auto sm:gap-1">
          {demoScenarios.map((s, i) => (
            <button
              key={s.tab}
              onClick={() => selectTab(i)}
              className={cn(
                "relative shrink-0 overflow-hidden rounded-md px-2.5 py-1 text-[11px] font-medium transition-all sm:px-3",
                i === activeTab
                  ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              {i === activeTab && (
                <motion.span
                  className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[#5B5BD6]"
                  style={{ scaleX: progress }}
                />
              )}
              {s.tab}
            </button>
          ))}
        </div>
      </div>

      <div className="border-b border-slate-100 bg-white/30 px-3 py-2.5 sm:px-4 sm:py-3">
        <div className="group flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm sm:px-3.5 sm:py-2.5">
          <Search className="size-3.5 shrink-0 text-slate-400 sm:size-4" />
          <AnimatePresence mode="wait">
            <motion.span
              key={activeTab}
              initial={{ opacity: 0, x: 4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -4 }}
              transition={{ duration: 0.15 }}
              className="text-[13px] font-medium text-slate-900 sm:text-sm"
            >
              {scenario.query}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid gap-3 bg-slate-50/50 px-3 py-3 sm:grid-cols-2 sm:gap-4 sm:px-4 sm:py-4"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Обычный поиск
            </span>
            <div className="flex flex-col gap-2 rounded-xl border border-slate-200/60 bg-white p-3 shadow-sm sm:min-h-[160px]">
              {scenario.oldResults.items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex flex-1 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-200 bg-slate-50/50 p-4 text-center"
                >
                  <div className="flex size-8 items-center justify-center rounded-full bg-slate-100">
                    <Search className="size-4 text-slate-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    {scenario.oldResults.status}
                  </span>
                </motion.div>
              ) : (
                <>
                  {scenario.oldResults.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 0.6, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-2 rounded-lg border border-red-100 bg-red-50/30 p-2.5 grayscale-[0.5]"
                    >
                      <AlertCircle className="mt-0.5 size-3.5 shrink-0 text-red-500" />
                      <span className="text-xs text-slate-600 line-through decoration-red-300">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-auto text-center text-[10px] text-slate-400"
                  >
                    {scenario.oldResults.status}
                  </motion.span>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5B5BD6]">
              {BRAND_NAME}
            </span>

            <div className="flex min-h-[120px] flex-col gap-2 rounded-xl border border-[#5B5BD6]/15 bg-white p-3 shadow-[0_4px_12px_-4px_rgba(91,91,214,0.1)] ring-2 ring-[#5B5BD6]/5 sm:min-h-[160px]">
              {scenario.aiResults.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + i * 0.15,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="group flex items-start gap-3 rounded-lg border border-slate-100 bg-white p-2.5 transition-all hover:border-[#5B5BD6]/20 hover:shadow-sm"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                      delay: 0.7 + i * 0.15,
                    }}
                    className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#5B5BD6]/[0.08] text-[#5B5BD6] ring-1 ring-[#5B5BD6]/15"
                  >
                    <Package className="size-4" />
                  </motion.div>
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="truncate text-xs font-medium text-slate-900 group-hover:text-[#5B5BD6]">
                      {item}
                    </span>
                    <motion.span
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + i * 0.15 }}
                      className="flex items-center gap-1 text-[10px] font-medium text-[#1E9A6E]"
                    >
                      <Check className="size-2.5" />
                      Релевантно
                    </motion.span>
                  </div>
                  <ArrowUpRight className="size-3 text-slate-300 opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-auto flex items-center justify-between border-t border-slate-100 pt-2 text-[10px]"
              >
                <span className="text-slate-400">
                  0.04s
                </span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3, type: "spring", stiffness: 300 }}
                  className="rounded-full bg-[#1E9A6E]/10 px-2 py-0.5 font-bold text-[#1E9A6E] ring-1 ring-[#1E9A6E]/20"
                >
                  {scenario.aiResults.status}
                </motion.span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
