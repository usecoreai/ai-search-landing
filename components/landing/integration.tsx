import { landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";

const { integration } = landingContent;

export function Integration() {
  return (
    <section id="integration" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
            <h2 className="text-[1.75rem] font-bold tracking-tight text-slate-900 sm:text-[2rem]">
              {integration.title}
            </h2>
            <p className="text-[16px] leading-relaxed text-slate-500">
              {integration.message}
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 pt-2">
              {integration.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-xl border border-slate-200/80 bg-white px-5 py-2.5 text-[14px] font-medium text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-700"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
