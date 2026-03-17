"use client";

import { useState } from "react";
import { landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";
import { Check, Search as SearchIcon, AlertTriangle, ShoppingCart, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const { analytics } = landingContent;

function InsightPanel() {
  const [selected, setSelected] = useState(0);
  const q = analytics.queries[selected];

  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c1425] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>
        <span className="ml-2 text-[10px] font-medium tracking-wider text-white/25 uppercase">
          Аналитика спроса
        </span>
      </div>

      <div className="grid sm:grid-cols-[1fr_1.1fr]">
        <div className="border-b border-white/[0.06] sm:border-r sm:border-b-0">
          <div className="border-b border-white/[0.06] px-4 py-2">
            <span className="text-[10px] font-semibold tracking-wider text-white/30 uppercase">
              Запросы без результата
            </span>
          </div>
          {analytics.queries.map((row, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={cn(
                "flex w-full items-center gap-2.5 border-b border-white/[0.04] px-4 py-3 text-left transition-colors last:border-b-0",
                i === selected ? "bg-blue-500/10" : "hover:bg-white/[0.03]"
              )}
            >
              <SearchIcon className={cn("size-3.5 shrink-0", i === selected ? "text-blue-400" : "text-white/20")} />
              <div className="min-w-0 flex-1">
                <p className={cn("truncate text-[13px]", i === selected ? "font-medium text-white" : "text-white/60")}>
                  {row.query}
                </p>
                <p className="text-[11px] text-white/30">
                  {row.searches} запросов · CTR {row.ctr}
                </p>
              </div>
              {i === selected && <div className="size-1.5 rounded-full bg-blue-400" />}
            </button>
          ))}
        </div>

        <div className="p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3"
            >
              <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.07] p-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="size-3.5 text-amber-400" />
                  <span className="text-[10px] font-semibold tracking-wider text-amber-400/80 uppercase">
                    Незакрытая потребность
                  </span>
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/70">{q.gap}</p>
              </div>

              <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="size-3.5 text-slate-400" />
                  <span className="text-[10px] font-semibold tracking-wider text-white/30 uppercase">
                    Что покупают вместо
                  </span>
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">{q.instead}</p>
              </div>

              <div className="rounded-lg border border-blue-500/20 bg-blue-500/[0.07] p-3">
                <div className="flex items-center gap-2">
                  <Package className="size-3.5 text-blue-400" />
                  <span className="text-[10px] font-semibold tracking-wider text-blue-400/80 uppercase">
                    Что стоит завезти
                  </span>
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/70">{q.action}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function Analytics() {
  return (
    <section id="analytics" className="relative scroll-mt-20 overflow-hidden bg-slate-900 py-24 md:py-32">
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-900/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <FadeIn>
            <div className="flex flex-col gap-6">
              <span className="w-fit rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-[13px] font-medium text-blue-300">
                {analytics.eyebrow}
              </span>

              <h2 className="text-[1.5rem] font-bold leading-tight tracking-tight text-white sm:text-[1.75rem]">
                {analytics.title}
              </h2>

              <p className="text-[14px] leading-relaxed text-slate-400 sm:text-[15px]">
                {analytics.description}
              </p>

              <ul className="flex flex-col gap-2.5 pt-2">
                {analytics.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[14px] text-slate-300">
                    <Check className="mt-0.5 size-4 shrink-0 text-blue-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <InsightPanel />
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {analytics.cards.map((card, i) => (
            <FadeIn key={card.title} delay={0.1 + i * 0.06}>
              <div className="flex h-full flex-col gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] p-5">
                <h3 className="text-[14px] font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-slate-400">
                  {card.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
