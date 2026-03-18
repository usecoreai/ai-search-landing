"use client";

import { landingContent } from "@/content/landing-content";
import { DemoTabs } from "./demo-tabs";
import { FadeIn } from "./fade-in";
import { Check, ArrowRight } from "lucide-react";

const { hero } = landingContent;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-28">
      <div className="pointer-events-none absolute -top-32 right-[-5%] h-[500px] w-[500px] rounded-full bg-[#5B5BD6]/[0.04] blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 sm:gap-12 sm:px-5 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col gap-4 sm:gap-5">
            <span className="w-fit rounded-full border border-[#5B5BD6]/20 bg-[#5B5BD6]/[0.08] px-3 py-1 text-[12px] font-medium text-[#5B5BD6] sm:px-4 sm:py-1.5 sm:text-[13px]">
              {hero.eyebrow}
            </span>

            <h1 className="text-[1.3rem] leading-[1.25] font-bold tracking-tight text-[#151515] sm:text-[1.75rem] lg:text-[2.25rem]">
              {hero.h1}
            </h1>

            <p className="text-[14px] leading-relaxed text-[#6F6A63] sm:max-w-lg sm:text-[16px] sm:leading-[1.7]">
              {hero.subheadline}
            </p>

            <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:gap-3">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5B5BD6] px-6 py-3 text-[14px] font-semibold text-white shadow-lg shadow-[#5B5BD6]/20 transition-all hover:bg-[#4B4BC0] sm:px-7 sm:py-3.5 sm:text-[15px]"
              >
                {hero.cta1}
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#scenarios"
                className="inline-flex items-center justify-center rounded-full border border-[#151515]/[0.08] bg-white px-6 py-3 text-[14px] font-medium text-[#151515] transition-all hover:bg-[#F5F1EA] sm:px-7 sm:py-3.5 sm:text-[15px]"
              >
                {hero.cta2}
              </a>
            </div>

            <div className="flex flex-col gap-2 pt-3 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2 sm:pt-4">
              {hero.trustStrip.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-[12px] text-[#6F6A63] sm:text-[13px]"
                >
                  <Check className="size-3.5 shrink-0 text-[#1E9A6E]" />
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
