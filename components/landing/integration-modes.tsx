"use client";

import { landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";
import { MessageSquare, Search, Check, Package, Send } from "lucide-react";
import { motion } from "framer-motion";

const { integrationModes } = landingContent;

function ChatDemo() {
  const msgs = integrationModes.assistant.chatMessages;
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/50">
      <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2">
        <MessageSquare className="size-3.5 text-[#5B5BD6]" />
        <span className="text-[11px] font-semibold text-slate-500">AI-ассистент</span>
      </div>
      <div className="flex flex-col gap-2 p-3">
        {msgs.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.35 }}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[88%] rounded-2xl px-3 py-1.5 text-[11px] leading-relaxed sm:text-[12px] ${
                m.role === "user"
                  ? "rounded-br-md bg-[#5B5BD6] text-white"
                  : "rounded-bl-md border border-slate-200 bg-white text-slate-700"
              }`}
            >
              {m.text}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-slate-100 px-3 py-2">
        <div className="min-w-0 flex-1 truncate rounded-lg bg-white px-2.5 py-1.5 text-[10px] text-slate-400 ring-1 ring-slate-200">
          Напишите, что ищете...
        </div>
        <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#5B5BD6]">
          <Send className="size-2.5 text-white" />
        </div>
      </div>
    </div>
  );
}

function SearchDemo() {
  const { query, results } = integrationModes.widget.searchDemo;
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/50">
      <div className="border-b border-slate-100 px-3 py-2.5">
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm">
          <Search className="size-3.5 shrink-0 text-slate-400" />
          <span className="truncate text-[11px] font-medium text-slate-800 sm:text-[12px]">{query}</span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 p-2.5">
        {results.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
            className="flex items-center gap-2 rounded-lg border border-slate-100 bg-white px-2.5 py-2"
          >
            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#5B5BD6]/[0.08]">
              <Package className="size-3 text-[#5B5BD6]" />
            </div>
            <span className="min-w-0 flex-1 text-[11px] leading-snug text-slate-700 sm:text-[12px]">{r}</span>
            <Check className="size-3 shrink-0 text-[#1E9A6E]" />
          </motion.div>
        ))}
        <p className="pt-1 text-center text-[10px] font-medium text-[#1E9A6E]">
          0.04s — {results.length} результата
        </p>
      </div>
    </div>
  );
}

export function IntegrationModes() {
  return (
    <section id="solutions" className="scroll-mt-16 py-16 sm:scroll-mt-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <h2 className="text-[1.25rem] font-bold tracking-tight text-slate-900 sm:text-[1.75rem]">
              {integrationModes.title}
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-500 sm:mt-4 sm:text-[16px]">
              {integrationModes.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <FadeIn delay={0.1} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-7">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#5B5BD6]/[0.08] sm:size-11">
                <MessageSquare className="size-4 text-[#5B5BD6] sm:size-5" />
              </div>
              <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-slate-900 sm:mt-4 sm:text-[18px]">
                {integrationModes.assistant.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500 sm:mt-2 sm:text-[14px]">
                {integrationModes.assistant.description}
              </p>
              <ChatDemo />
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-7">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#5B5BD6]/[0.08] sm:size-11">
                <Search className="size-4 text-[#5B5BD6] sm:size-5" />
              </div>
              <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-slate-900 sm:mt-4 sm:text-[18px]">
                {integrationModes.widget.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500 sm:mt-2 sm:text-[14px]">
                {integrationModes.widget.description}
              </p>
              <SearchDemo />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-6 text-center text-[13px] text-[#6F6A63] sm:mt-8 sm:text-[14px]">
            {integrationModes.footer}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
