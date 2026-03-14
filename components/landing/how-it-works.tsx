import { landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";

const { howItWorks } = landingContent;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-[1.75rem] font-bold tracking-tight text-slate-900 sm:text-[2rem]">
              {howItWorks.title}
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-slate-500">
              {howItWorks.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            className="pointer-events-none absolute top-6 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] hidden h-px bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 lg:block"
            aria-hidden="true"
          />

          {howItWorks.steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="relative flex flex-col gap-4">
                <span className="relative z-10 flex size-12 items-center justify-center rounded-2xl bg-blue-600 text-[14px] font-bold text-white shadow-lg shadow-blue-600/20">
                  {step.number}
                </span>
                <h3 className="text-[16px] font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
