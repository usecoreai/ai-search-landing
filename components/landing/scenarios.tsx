"use client";

import { useState } from "react";
import { scenarios, verticals, type Mode, type Vertical } from "@/content/landing-content";
import { cn } from "@/lib/utils";
import { Search, MessageSquare, Package, Check, ArrowRight, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
          {intent.attributes.map((a, i) => (
            <motion.span
              key={a}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600"
            >
              {a}
            </motion.span>
          ))}
        </div>
      </div>
      {intent.constraints.length > 0 && (
        <div>
          <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Ограничения</span>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {intent.constraints.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700"
              >
                {c}
              </motion.span>
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

function SearchResults({ products, badges }: { products: string[]; badges: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      {products.map((p, i) => (
        <motion.div
          key={p}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex items-center gap-2.5 rounded-lg border border-slate-100 bg-white px-3 py-2.5"
        >
          <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[#5B5BD6]/[0.08]">
            <Package className="size-3.5 text-[#5B5BD6]" />
          </div>
          <span className="flex-1 truncate text-[12px] font-medium text-slate-800">{p}</span>
          <Check className="size-3 shrink-0 text-[#1E9A6E]" />
        </motion.div>
      ))}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {badges.map((b) => (
          <span key={b} className="rounded-full bg-[#5B5BD6]/[0.06] px-2 py-0.5 text-[10px] font-medium text-[#5B5BD6]">
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

function AssistantChat({ messages, products, summary }: { messages: { role: string; text: string }[]; products: string[]; summary: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 rounded-xl border border-slate-100 bg-slate-50/50 p-3">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[85%] rounded-2xl px-3 py-1.5 text-[11px] leading-relaxed ${
              m.role === "user"
                ? "rounded-br-md bg-[#5B5BD6] text-white"
                : "rounded-bl-md border border-slate-200 bg-white text-slate-700"
            }`}>
              {m.text}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-[11px] font-medium text-[#1E9A6E]"
      >
        {summary}
      </motion.p>
      {products.map((p, i) => (
        <motion.div
          key={p}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + i * 0.1 }}
          className="flex items-center gap-2.5 rounded-lg border border-slate-100 bg-white px-3 py-2.5"
        >
          <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[#5B5BD6]/[0.08]">
            <Package className="size-3.5 text-[#5B5BD6]" />
          </div>
          <span className="flex-1 truncate text-[12px] font-medium text-slate-800">{p}</span>
          <Check className="size-3 shrink-0 text-[#1E9A6E]" />
        </motion.div>
      ))}
    </div>
  );
}

export function Scenarios() {
  const [mode, setMode] = useState<Mode>("search");
  const [vertical, setVertical] = useState<Vertical>("clothing");

  const data = scenarios[vertical];
  const scenario = mode === "search" ? data.search : data.assistant;

  return (
    <section id="scenarios" className="scroll-mt-20 bg-slate-50/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-[1.5rem] font-bold tracking-tight text-slate-900 sm:text-[1.75rem]">
              Один движок, два формата и разные сценарии применения
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-[#6F6A63] sm:text-[15px]">
              Переключайте формат и отрасль, чтобы увидеть, как CoreAI переводит естественный запрос пользователя в атрибуты каталога и релевантные товары.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/30">
            <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
                {modes.map((m) => {
                  const Icon = m.icon;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setMode(m.id)}
                      className={cn(
                        "flex items-center gap-1.5 rounded-md px-3.5 py-2 text-[13px] font-medium transition-all",
                        mode === m.id
                          ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
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

            <AnimatePresence mode="wait">
              <motion.div
                key={`${mode}-${vertical}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="grid gap-px bg-slate-100 lg:grid-cols-3">
                  {/* Zone 1: User query */}
                  <div className="bg-white p-5">
                    <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                      Что спрашивает пользователь
                    </span>
                    <div className="mt-3">
                      {mode === "search" ? (
                        <div className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-3">
                          <Search className="mt-0.5 size-4 shrink-0 text-slate-400" />
                          <span className="text-[13px] leading-relaxed text-slate-800">
                            {(scenario as typeof data.search).query}
                          </span>
                        </div>
                      ) : (
                        <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3">
                          <div className="flex items-start gap-2">
                            <MessageSquare className="mt-0.5 size-4 shrink-0 text-[#5B5BD6]" />
                            <span className="text-[13px] leading-relaxed text-slate-800">
                              {(scenario as typeof data.assistant).messages[0].text}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Zone 2: How CoreAI understands */}
                  <div className="bg-white p-5">
                    <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                      Как CoreAI понимает запрос
                    </span>
                    <div className="mt-3">
                      <IntentChips intent={scenario.intent} />
                    </div>
                  </div>

                  {/* Zone 3: How it maps to catalog */}
                  <div className="bg-white p-5">
                    <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                      Как приземляется на ассортимент
                    </span>
                    <div className="mt-3">
                      {mode === "search" ? (
                        <SearchResults
                          products={scenario.products}
                          badges={(scenario as typeof data.search).badges}
                        />
                      ) : (
                        <AssistantChat
                          messages={(scenario as typeof data.assistant).messages}
                          products={scenario.products}
                          summary={(scenario as typeof data.assistant).summary}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 px-5 py-3">
                  <p className="text-[12px] leading-relaxed text-[#6F6A63]">
                    {scenario.explanation}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-2 border-t border-slate-100 bg-slate-50/30 px-5 py-3">
              <span className="text-[11px] text-slate-400">Язык пользователя</span>
              <ArrowRight className="size-3 text-slate-300" />
              <span className="text-[11px] text-slate-400">Язык каталога</span>
              <ArrowRight className="size-3 text-slate-300" />
              <span className="text-[11px] font-medium text-[#5B5BD6]">Релевантные товары</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
