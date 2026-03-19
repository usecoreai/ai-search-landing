"use client";

import { useState } from "react";
import { scenarios, verticals, type Mode, type Vertical } from "@/content/landing-content";
import { cn } from "@/lib/utils";
import { Search, MessageSquare, Package, Check, ArrowRight } from "lucide-react";
import { FadeIn } from "./fade-in";

const modes: { id: Mode; label: string; icon: typeof Search }[] = [
  { id: "search", label: "AI-поиск", icon: Search },
  { id: "assistant", label: "AI-ассистент", icon: MessageSquare },
];

function IntentChips({ intent }: { intent: { category: string; attributes: string[]; constraints: string[]; context: string } }) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Категория</span>
        <div className="mt-1.5">
          <span className="inline-flex rounded-full bg-[#5B5BD6]/[0.08] px-2.5 py-1 text-[12px] font-medium text-[#5B5BD6]">
            {intent.category}
          </span>
        </div>
      </div>
      <div>
        <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Атрибуты</span>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {intent.attributes.map((a) => (
            <span key={a} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">{a}</span>
          ))}
        </div>
      </div>
      {intent.constraints.length > 0 && (
        <div>
          <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Ограничения</span>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {intent.constraints.map((c) => (
              <span key={c} className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700">{c}</span>
            ))}
          </div>
        </div>
      )}
      <div>
        <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Контекст</span>
        <p className="mt-1 text-[12px] text-slate-500">{intent.context}</p>
      </div>
    </div>
  );
}

function ProductCard({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-white px-3 py-2.5">
      <div className="hidden size-7 shrink-0 items-center justify-center rounded-md bg-[#5B5BD6]/[0.08] sm:flex">
        <Package className="size-3.5 text-[#5B5BD6]" />
      </div>
      <span className="min-w-0 flex-1 text-[11px] font-medium leading-snug text-slate-800 sm:text-[12px]">{name}</span>
      <Check className="size-3 shrink-0 text-[#1E9A6E]" />
    </div>
  );
}

export function Scenarios() {
  const [mode, setMode] = useState<Mode>("search");
  const [vertical, setVertical] = useState<Vertical>("clothing");

  const data = scenarios[vertical];
  const scenario = mode === "search" ? data.search : data.assistant;

  return (
    <section id="scenarios" className="scroll-mt-16 bg-slate-50/50 py-16 sm:scroll-mt-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-[1.25rem] font-bold tracking-tight text-slate-900 sm:text-[1.75rem]">
              Один движок, два формата и разные сценарии применения
            </h2>
            <p className="mt-4 text-[13px] leading-relaxed text-[#6F6A63] sm:text-[15px]">
              Переключайте формат и отрасль, чтобы увидеть, как CoreAI переводит естественный запрос пользователя в атрибуты каталога и релевантные товары.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg">
            <div className="flex flex-col gap-2.5 border-b border-slate-100 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-6 sm:py-4">
              <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
                {modes.map((m) => {
                  const Icon = m.icon;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setMode(m.id)}
                      className={cn(
                        "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[12px] font-medium transition-all sm:px-3.5 sm:py-2 sm:text-[13px]",
                        mode === m.id
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-700"
                      )}
                    >
                      <Icon className="size-3.5" />
                      {m.label}
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-1 overflow-x-auto">
                {verticals.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVertical(v.id)}
                    className={cn(
                      "shrink-0 rounded-full px-3.5 py-1.5 text-[12px] font-medium transition-all",
                      vertical === v.id
                        ? "bg-[#5B5BD6]/[0.08] text-[#5B5BD6]"
                        : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                    )}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            <div key={`${mode}-${vertical}`} className="tab-enter grid gap-px bg-slate-100 md:grid-cols-3">
              <div className="bg-white p-4 sm:p-5">
                <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  Что спрашивает пользователь
                </span>
                <div className="mt-3">
                  {mode === "search" ? (
                    <div className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 sm:px-3.5 sm:py-3">
                      <Search className="mt-0.5 size-4 shrink-0 text-slate-400" />
                      <span className="text-[12px] leading-relaxed text-slate-800 sm:text-[13px]">
                        {(scenario as typeof data.search).query}
                      </span>
                    </div>
                  ) : (
                    <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3">
                      <div className="flex items-start gap-2">
                        <MessageSquare className="mt-0.5 size-4 shrink-0 text-[#5B5BD6]" />
                        <span className="text-[12px] leading-relaxed text-slate-800 sm:text-[13px]">
                          {(scenario as typeof data.assistant).messages[0].text}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5">
                <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  Как CoreAI понимает запрос
                </span>
                <div className="mt-3">
                  <IntentChips intent={scenario.intent} />
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5">
                <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  Как приземляется на ассортимент
                </span>
                <div className="mt-3 flex flex-col gap-2">
                  {mode === "assistant" && (
                    <>
                      <div className="flex flex-col gap-1.5 rounded-xl border border-slate-100 bg-slate-50/50 p-2.5">
                        {(scenario as typeof data.assistant).messages.map((m, i) => (
                          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                            <div className={`max-w-[88%] rounded-2xl px-2.5 py-1 text-[10px] leading-relaxed sm:text-[11px] ${
                              m.role === "user"
                                ? "rounded-br-md bg-[#5B5BD6] text-white"
                                : "rounded-bl-md border border-slate-200 bg-white text-slate-700"
                            }`}>
                              {m.text}
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-[10px] font-medium text-[#1E9A6E] sm:text-[11px]">
                        {(scenario as typeof data.assistant).summary}
                      </p>
                    </>
                  )}
                  {scenario.products.map((p) => (
                    <ProductCard key={p} name={p} />
                  ))}
                  {mode === "search" && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {(scenario as typeof data.search).badges.map((b) => (
                        <span key={b} className="rounded-full bg-[#5B5BD6]/[0.06] px-2 py-0.5 text-[10px] font-medium text-[#5B5BD6]">{b}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 px-4 py-2.5 sm:px-5 sm:py-3">
              <p className="text-[11px] leading-relaxed text-[#6F6A63] sm:text-[12px]">{scenario.explanation}</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-slate-100 bg-slate-50/30 px-3 py-2.5 sm:px-5 sm:py-3">
              <span className="text-[10px] text-slate-400 sm:text-[11px]">Язык пользователя</span>
              <ArrowRight className="size-3 shrink-0 text-slate-300" />
              <span className="text-[10px] text-slate-400 sm:text-[11px]">Язык каталога</span>
              <ArrowRight className="size-3 shrink-0 text-slate-300" />
              <span className="text-[10px] font-medium text-[#5B5BD6] sm:text-[11px]">Релевантные товары</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
