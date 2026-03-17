"use client";

import { landingContent } from "@/content/landing-content";
import { DemoTabs } from "./demo-tabs";
import { FadeIn } from "./fade-in";
import { Check, ArrowRight } from "lucide-react";

const { hero } = landingContent;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="pointer-events-none absolute -top-32 right-[-5%] h-[500px] w-[500px] rounded-full bg-[#5B5BD6]/[0.04] blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col gap-5">
            <span className="w-fit rounded-full border border-[#5B5BD6]/20 bg-[#5B5BD6]/[0.08] px-4 py-1.5 text-[13px] font-medium text-[#5B5BD6]">
              {hero.eyebrow}
            </span>

            <h1 className="text-[1.5rem] leading-[1.2] font-bold tracking-tight text-[#151515] sm:text-[2rem] lg:text-[2.25rem]">
              {hero.h1}
            </h1>

            <p className="max-w-lg text-[15px] leading-relaxed text-[#6F6A63] sm:text-[16px] sm:leading-[1.7]">
              {hero.subheadline}
            </p>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5B5BD6] px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#5B5BD6]/20 transition-all hover:bg-[#4B4BC0] hover:shadow-xl hover:shadow-[#5B5BD6]/25"
              >
                {hero.cta1}
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center rounded-full border border-[#151515]/[0.08] bg-white px-7 py-3.5 text-[15px] font-medium text-[#151515] transition-all hover:bg-[#F5F1EA]"
              >
                {hero.cta2}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 pt-4 sm:flex sm:flex-wrap sm:gap-x-5">
              {hero.trustStrip.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-[13px] text-[#6F6A63]"
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
