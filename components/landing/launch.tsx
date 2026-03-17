import { landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";

const { launchSteps } = landingContent;

export function Launch() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-[1.5rem] font-bold tracking-tight text-slate-900 sm:text-[1.75rem]">
              {launchSteps.title}
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-3">
          {launchSteps.steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="flex flex-col gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-[13px] font-bold text-white">
                  {step.number}
                </span>
                <h3 className="text-[15px] font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.35}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {launchSteps.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-200/80 bg-white px-4 py-1.5 text-[13px] font-medium text-slate-500"
              >
                {chip}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
