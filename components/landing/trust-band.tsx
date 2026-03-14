import { landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";

const { trustBand } = landingContent;

export function TrustBand() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-14">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-center gap-7 text-center">
            <p className="text-[12px] font-semibold tracking-[0.15em] text-slate-400 uppercase">
              Для любых вертикалей e-commerce
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {trustBand.segments.map((segment) => (
                <span
                  key={segment}
                  className="rounded-full border border-slate-200/80 bg-white px-5 py-2 text-[14px] font-medium text-slate-600 shadow-sm transition-all hover:border-blue-200 hover:text-blue-700"
                >
                  {segment}
                </span>
              ))}
            </div>
            <p className="max-w-lg text-[14px] leading-relaxed text-slate-400">
              {trustBand.supportingText}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
