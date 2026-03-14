"use client";

import { useState } from "react";
import { BRAND_NAME, landingContent } from "@/content/landing-content";
import { cn } from "@/lib/utils";
import { Search, X as XIcon, Check, AlertCircle, Package, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const { demoScenarios } = landingContent;

export function DemoTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const scenario = demoScenarios[activeTab];

  return (
    <div className="relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.02)] backdrop-blur-xl ring-1 ring-white/50">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-white/50 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-slate-200" />
            <span className="size-2.5 rounded-full bg-slate-200" />
            <span className="size-2.5 rounded-full bg-slate-200" />
          </div>
        </div>
        <div className="flex gap-1 rounded-lg bg-slate-100/50 p-1 ring-1 ring-slate-200/50">
          {demoScenarios.map((s, i) => (
            <button
              key={s.tab}
              onClick={() => setActiveTab(i)}
              className={cn(
                "relative rounded-md px-3 py-1 text-[11px] font-medium transition-all",
                i === activeTab
                  ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              {s.tab}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="border-b border-slate-100 bg-white/30 px-4 py-3">
        <div className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-sm transition-all focus-within:border-blue-500/30 focus-within:ring-4 focus-within:ring-blue-500/10">
          <Search className="size-4 text-slate-400 group-focus-within:text-blue-500" />
          <AnimatePresence mode="wait">
            <motion.span
              key={activeTab}
              initial={{ opacity: 0, x: 4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -4 }}
              transition={{ duration: 0.15 }}
              className="text-sm font-medium text-slate-900"
            >
              {scenario.query}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Results Area */}
      <div className="grid gap-4 bg-slate-50/50 px-4 py-4 sm:grid-cols-2">
        {/* Old Search */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Обычный поиск
          </span>
          <div className="flex min-h-[140px] flex-col gap-2 rounded-xl border border-slate-200/60 bg-white p-3 shadow-sm">
            {scenario.oldResults.items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-200 bg-slate-50/50 p-4 text-center">
                <div className="flex size-8 items-center justify-center rounded-full bg-slate-100">
                  <Search className="size-4 text-slate-400" />
                </div>
                <span className="text-xs font-medium text-slate-500">
                  {scenario.oldResults.status}
                </span>
              </div>
            ) : (
              <>
                {scenario.oldResults.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 rounded-lg border border-red-100 bg-red-50/30 p-2.5 opacity-60 grayscale-[0.5]"
                  >
                    <AlertCircle className="mt-0.5 size-3.5 shrink-0 text-red-500" />
                    <span className="text-xs text-slate-600 line-through decoration-red-300">
                      {item}
                    </span>
                  </div>
                ))}
                <span className="mt-auto text-center text-[10px] text-slate-400">
                  {scenario.oldResults.status}
                </span>
              </>
            )}
          </div>
        </div>

        {/* AI Search */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">
              {BRAND_NAME}
            </span>
            <span className="rounded-full bg-blue-100 px-1.5 py-0.5 text-[9px] font-bold text-blue-700">
              AI
            </span>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex min-h-[140px] flex-col gap-2 rounded-xl border border-blue-100 bg-white p-3 shadow-[0_4px_12px_-4px_rgba(37,99,235,0.1)] ring-2 ring-blue-500/5"
            >
              {scenario.aiResults.items.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-3 rounded-lg border border-slate-100 bg-gradient-to-br from-white to-slate-50/50 p-2.5 transition-all hover:border-blue-200 hover:shadow-sm"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                    <Package className="size-4" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="truncate text-xs font-medium text-slate-900 group-hover:text-blue-700">
                      {item}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-emerald-600">
                      <Check className="size-2.5" />
                      Релевантно
                    </span>
                  </div>
                  <ArrowUpRight className="size-3 text-slate-300 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              ))}
              <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-2 text-[10px]">
                <span className="font-medium text-slate-500">
                  Время поиска: 0.04s
                </span>
                <span className="font-bold text-emerald-600">
                  {scenario.aiResults.status}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
