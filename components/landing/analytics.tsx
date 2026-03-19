"use client";

import { useState } from "react";
import { landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";
import { Check, Search as SearchIcon, AlertTriangle, ShoppingCart, Package } from "lucide-react";
import { cn } from "@/lib/utils";

const { analytics } = landingContent;

function InsightPanel() {
  const [selected, setSelected] = useState(0);
  const q = analytics.queries[selected];

  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c1425] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2 sm:px-4 sm:py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>
        <span className="ml-2 text-[9px] font-medium tracking-wider text-white/25 uppercase sm:text-[10px]">
          Аналитика спроса
        </span>
      </div>

      <div className="grid sm:grid-cols-[1fr_1.1fr]">
        <div className="border-b border-white/[0.06] sm:border-r sm:border-b-0">
          <div className="border-b border-white/[0.06] px-3 py-2 sm:px-4">
            <span className="text-[9px] font-semibold tracking-wider text-white/30 uppercase sm:text-[10px]">
              Запросы без результата
            </span>
          </div>
          {analytics.queries.map((row, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={cn(
                "flex w-full items-center gap-2 border-b border-white/[0.04] px-3 py-2.5 text-left transition-colors last:border-b-0 sm:gap-2.5 sm:px-4 sm:py-3",
                i === selected ? "bg-blue-500/10" : "hover:bg-white/[0.03]"
              )}
            >
              <SearchIcon className={cn("size-3 shrink-0 sm:size-3.5", i === selected ? "text-blue-400" : "text-white/20")} />
              <div className="min-w-0 flex-1">
                <p className={cn("truncate text-[12px] sm:text-[13px]", i === selected ? "font-medium text-white" : "text-white/60")}>
                  {row.query}
                </p>
                <p className="text-[10px] text-white/30 sm:text-[11px]">
                  {row.searches} запросов · CTR {row.ctr}
                </p>
              </div>
              {i === selected && <div className="size-1.5 rounded-full bg-blue-400" />}
            </button>
          ))}
        </div>

        <div key={selected} className="tab-enter p-3 sm:p-4">
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.07] p-2.5 sm:p-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="size-3 text-amber-400 sm:size-3.5" />
                <span className="text-[9px] font-semibold tracking-wider text-amber-400/80 uppercase sm:text-[10px]">
                  Незакрытая потребность
                </span>
              </div>
              <p className="mt-1.5 text-[12px] leading-relaxed text-white/70 sm:text-[13px]">{q.gap}</p>
            </div>

            <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-2.5 sm:p-3">
              <div className="flex items-center gap-2">
                <ShoppingCart className="size-3 text-slate-400 sm:size-3.5" />
                <span className="text-[9px] font-semibold tracking-wider text-white/30 uppercase sm:text-[10px]">
                  Что покупают вместо
                </span>
              </div>
              <p className="mt-1.5 text-[12px] leading-relaxed text-white/60 sm:text-[13px]">{q.instead}</p>
            </div>

            <div className="rounded-lg border border-[#C88629]/25 bg-[#C88629]/[0.07] p-2.5 sm:p-3">
              <div className="flex items-center gap-2">
                <Package className="size-3 text-[#C88629] sm:size-3.5" />
                <span className="text-[9px] font-semibold tracking-wider text-[#C88629]/80 uppercase sm:text-[10px]">
                  Что стоит завезти
                </span>
              </div>
              <p className="mt-1.5 text-[12px] leading-relaxed text-white/70 sm:text-[13px]">{q.action}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Analytics() {
  return (
    <section id="analytics" className="relative scroll-mt-16 overflow-hidden bg-slate-900 py-16 sm:scroll-mt-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <FadeIn>
            <div className="flex flex-col gap-5 sm:gap-6">
              <span className="w-fit rounded-full border border-[#C88629]/25 bg-[#C88629]/10 px-3 py-1 text-[11px] font-medium text-[#C88629] sm:px-4 sm:py-1.5 sm:text-[13px]">
                {analytics.eyebrow}
              </span>

              <h2 className="text-[1.25rem] font-bold leading-tight tracking-tight text-white sm:text-[1.5rem] lg:text-[1.75rem]">
                {analytics.title}
              </h2>

              <p className="text-[13px] leading-relaxed text-slate-400 sm:text-[15px]">
                {analytics.description}
              </p>

              <ul className="flex flex-col gap-2 pt-1 sm:gap-2.5 sm:pt-2">
                {analytics.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[13px] text-slate-300 sm:gap-2.5 sm:text-[14px]">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-[#C88629] sm:size-4" />
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

        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {analytics.cards.map((card, i) => (
            <FadeIn key={card.title} delay={0.1 + i * 0.06}>
              <div className="flex h-full flex-col gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 sm:gap-2.5 sm:p-5">
                <h3 className="text-[13px] font-semibold text-white sm:text-[14px]">{card.title}</h3>
                <p className="text-[12px] leading-relaxed text-slate-400 sm:text-[13px]">{card.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
