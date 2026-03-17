import { landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";

const { team } = landingContent;

export function Team() {
  return (
    <section id="team" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <FadeIn>
            <div className="flex flex-col gap-5">
              <span className="text-[12px] font-semibold tracking-[0.15em] text-slate-400 uppercase">
                {team.eyebrow}
              </span>
              <h2 className="text-[1.5rem] font-bold leading-tight tracking-tight text-slate-900 sm:text-[1.75rem]">
                {team.title}
              </h2>
              <p className="text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
                {team.description}
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {team.cards.map((card, i) => (
              <FadeIn key={card.title} delay={0.1 + i * 0.08}>
                <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
                  <h3 className="text-[15px] font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
                    {card.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.35}>
          <blockquote className="mx-auto mt-14 max-w-3xl border-l-2 border-slate-200 pl-6 text-[15px] leading-relaxed text-slate-400 italic sm:text-[16px]">
            {team.quote}
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
