import { landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";

const { capabilities } = landingContent;

export function Capabilities() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-[1.5rem] font-bold tracking-tight text-slate-900 sm:text-[1.75rem]">
              Что умеет наш поиск
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 sm:grid-cols-2">
          {capabilities.map((cap, i) => (
            <FadeIn
              key={cap.title}
              delay={i * 0.06}
              className={i === capabilities.length - 1 && capabilities.length % 2 !== 0 ? "sm:col-span-2" : ""}
            >
              <div className="flex h-full flex-col gap-2 bg-white p-5 sm:p-7">
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
