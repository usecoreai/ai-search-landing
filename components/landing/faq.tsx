"use client";

import { landingContent } from "@/content/landing-content";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FadeIn } from "./fade-in";

const { faq } = landingContent;

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-5 lg:px-8">
        <FadeIn>
          <h2 className="mb-12 text-center text-[1.75rem] font-bold tracking-tight text-slate-900 sm:text-[2rem]">
            Частые вопросы
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-2 shadow-sm">
            <Accordion>
              {faq.map((item, i) => (
                <AccordionItem key={i} value={i} className="border-slate-100 px-4">
                  <AccordionTrigger className="text-left text-[15px] font-medium text-slate-800 py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-[14px] leading-relaxed text-slate-500 pb-2">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
