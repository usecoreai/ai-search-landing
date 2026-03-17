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
      <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5">
        <MessageSquare className="size-3.5 text-[#5B5BD6]" />
        <span className="text-[11px] font-semibold text-slate-500">AI-ассистент</span>
      </div>
      <div className="flex flex-col gap-2.5 p-4">
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
              className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-[12px] leading-relaxed ${
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
      <div className="flex items-center gap-2 border-t border-slate-100 px-4 py-2.5">
        <div className="flex-1 rounded-lg bg-white px-3 py-1.5 text-[11px] text-slate-400 ring-1 ring-slate-200">
          Напишите, что ищете...
        </div>
        <div className="flex size-7 items-center justify-center rounded-lg bg-[#5B5BD6]">
          <Send className="size-3 text-white" />
        </div>
      </div>
    </div>
  );
}

function SearchDemo() {
  const { query, results } = integrationModes.widget.searchDemo;
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/50">
      <div className="border-b border-slate-100 px-4 py-3">
        <div className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
          <Search className="size-3.5 text-slate-400" />
          <span className="text-[12px] font-medium text-slate-800">{query}</span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 p-3">
        {results.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
            className="flex items-center gap-2.5 rounded-lg border border-slate-100 bg-white px-3 py-2 transition-colors hover:border-[#5B5BD6]/20"
          >
            <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[#5B5BD6]/[0.08]">
              <Package className="size-3.5 text-[#5B5BD6]" />
            </div>
            <span className="flex-1 truncate text-[12px] text-slate-700">{r}</span>
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
    <section id="solutions" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-[1.75rem] font-bold tracking-tight text-slate-900 sm:text-[2rem]">
              {integrationModes.title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-500 sm:text-[16px]">
              {integrationModes.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn delay={0.1} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7">
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#5B5BD6]/[0.08]">
                <MessageSquare className="size-5 text-[#5B5BD6]" />
              </div>
              <h3 className="mt-4 text-[18px] font-semibold tracking-tight text-slate-900">
                {integrationModes.assistant.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
                {integrationModes.assistant.description}
              </p>
              <ChatDemo />
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7">
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#5B5BD6]/[0.08]">
                <Search className="size-5 text-[#5B5BD6]" />
              </div>
              <h3 className="mt-4 text-[18px] font-semibold tracking-tight text-slate-900">
                {integrationModes.widget.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
                {integrationModes.widget.description}
              </p>
              <SearchDemo />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-8 text-center text-[14px] text-[#6F6A63]">
            {integrationModes.footer}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
