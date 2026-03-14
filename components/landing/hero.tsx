"use client";

import { landingContent } from "@/content/landing-content";
import { DemoTabs } from "./demo-tabs";
import { FadeIn } from "./fade-in";
import { Check, ArrowRight } from "lucide-react";

const { hero } = landingContent;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute -top-32 right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-50/80 blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[13px] font-medium text-blue-700">
              {hero.eyebrow}
            </span>

            <h1 className="text-[2rem] leading-[1.15] font-bold tracking-tight text-slate-900 sm:text-[2.5rem] lg:text-[2.85rem]">
              {hero.h1}
            </h1>

            <p className="max-w-lg text-[16px] leading-relaxed text-slate-500 sm:text-[17px] sm:leading-[1.7]">
              {hero.subheadline}
            </p>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
              >
                {hero.cta1}
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[15px] font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                {hero.cta2}
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2.5 pt-5">
              {hero.trustStrip.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-[14px] text-slate-500"
                >
                  <Check className="size-4 text-blue-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} direction="up">
          <DemoTabs />
        </FadeIn>
      </div>
    </section>
  );
}
