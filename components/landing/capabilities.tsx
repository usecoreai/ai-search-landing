import { landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";

const { capabilities } = landingContent;

export function Capabilities() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-[1.75rem] font-bold tracking-tight text-slate-900 sm:text-[2rem]">
              Что умеет наш поиск
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-200/50 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <FadeIn key={cap.title} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-2 bg-white p-6 sm:p-7">
                <h3 className="text-[15px] font-semibold text-slate-900">
                  {cap.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-slate-500">
                  {cap.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
