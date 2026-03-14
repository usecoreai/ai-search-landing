import { landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";

const { team } = landingContent;

export function Team() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <FadeIn>
            <div className="flex flex-col gap-5">
              <span className="text-[12px] font-semibold tracking-[0.15em] text-blue-600 uppercase">
                {team.eyebrow}
              </span>
              <h2 className="text-[1.6rem] font-bold leading-tight tracking-tight text-slate-900 sm:text-[1.85rem]">
                {team.title}
              </h2>
              <p className="text-[15px] leading-relaxed text-slate-500">
                {team.description}
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {team.cards.map((card, i) => (
              <FadeIn key={card.title} delay={0.1 + i * 0.08}>
                <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <h3 className="text-[16px] font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
                    {card.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.35}>
          <blockquote className="mx-auto mt-16 max-w-3xl border-l-2 border-blue-500/30 pl-6 text-[16px] leading-relaxed text-slate-500 italic sm:text-[17px]">
            {team.quote}
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
