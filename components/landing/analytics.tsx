"use client";

import { landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";
import { Check, AlertTriangle, TrendingDown, Search as SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const { analytics } = landingContent;

const insightColors: Record<string, string> = {
  "Potential assortment gap": "bg-amber-500/10 text-amber-400 ring-amber-500/20",
  "Low satisfaction cluster": "bg-red-500/10 text-red-400 ring-red-500/20",
  "Likely attribute mismatch": "bg-orange-500/10 text-orange-400 ring-orange-500/20",
  "High intent, low CTR": "bg-violet-500/10 text-violet-400 ring-violet-500/20",
};

function AdminMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0f1729] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>
        <span className="ml-2 text-[10px] font-medium tracking-wider text-white/25 uppercase">
          Search Analytics
        </span>
      </div>

      <div className="grid grid-cols-4 gap-px border-b border-white/[0.06] bg-white/[0.03]">
        {analytics.mockup.metrics.map((m) => (
          <div key={m.label} className="px-3 py-3 text-center sm:px-4">
            <div className="text-base font-bold text-white sm:text-lg">{m.value}</div>
            <div className="mt-0.5 text-[9px] font-medium tracking-wider text-white/30 uppercase sm:text-[10px]">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px] text-left">
          <thead>
            <tr className="border-b border-white/[0.06] text-[10px] font-semibold tracking-wider text-white/30 uppercase">
              <th className="px-4 py-2.5">Query</th>
              <th className="px-3 py-2.5 text-right">Searches</th>
              <th className="px-3 py-2.5 text-right">CTR</th>
              <th className="px-3 py-2.5">Insight</th>
            </tr>
          </thead>
          <tbody>
            {analytics.mockup.rows.map((row, i) => (
              <tr
                key={i}
                className={cn(
                  "border-b border-white/[0.04] transition-colors hover:bg-white/[0.03]",
                  i === analytics.mockup.rows.length - 1 && "border-b-0"
                )}
              >
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <SearchIcon className="size-3 shrink-0 text-white/20" />
                    <span className="truncate text-[12px] text-white/70 sm:text-[13px]">
                      {row.query}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2.5 text-right">
                  <span className="text-[12px] font-medium tabular-nums text-white/50 sm:text-[13px]">
                    {row.searches}
                  </span>
                </td>
                <td className="px-3 py-2.5 text-right">
                  <span
                    className={cn(
                      "text-[12px] font-semibold tabular-nums sm:text-[13px]",
                      parseInt(row.ctr) < 25
                        ? "text-red-400"
                        : parseInt(row.ctr) < 40
                          ? "text-amber-400"
                          : "text-emerald-400"
                    )}
                  >
                    {row.ctr}
                  </span>
                </td>
                <td className="px-3 py-2.5">
                  <span
                    className={cn(
                      "inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 sm:text-[11px]",
                      insightColors[row.insight] ?? "bg-white/5 text-white/40 ring-white/10"
                    )}
                  >
                    {row.insight}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

              <h2 className="text-[1.6rem] font-bold leading-tight tracking-tight text-white sm:text-[1.85rem]">
                {analytics.title}
              </h2>

              <p className="text-[15px] leading-relaxed text-slate-400">
                {analytics.description}
              </p>

              <ul className="flex flex-col gap-3 pt-2">
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
            <AdminMockup />
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {analytics.cards.map((card, i) => (
            <FadeIn key={card.title} delay={0.1 + i * 0.06}>
              <div className="flex h-full flex-col gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-blue-500/10">
                  {i === 0 && <SearchIcon className="size-4 text-blue-400" />}
                  {i === 1 && <TrendingDown className="size-4 text-blue-400" />}
                  {i === 2 && <AlertTriangle className="size-4 text-blue-400" />}
                  {i === 3 && <Check className="size-4 text-blue-400" />}
                </div>
                <h3 className="text-[15px] font-semibold text-white">
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
