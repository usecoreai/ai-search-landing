import { landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";
import { MessageSquare, Search, Check, ArrowRight } from "lucide-react";

const { integrationModes } = landingContent;

function ModeCard({
  mode,
  icon: Icon,
  gradient,
}: {
  mode: typeof integrationModes.assistant;
  icon: typeof MessageSquare;
  gradient: string;
}) {
  return (
    <div className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all hover:border-slate-300/80 hover:shadow-lg sm:p-8">
      <div className={`absolute top-0 right-0 h-32 w-32 rounded-bl-full opacity-40 ${gradient}`} />

      <div className="relative">
        <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50">
          <Icon className="size-5.5 text-blue-600" />
        </div>
      </div>

      <div className="relative flex flex-col gap-2">
        <h3 className="text-[19px] font-semibold tracking-tight text-slate-900">
          {mode.title}
        </h3>
        <p className="text-[15px] leading-relaxed text-slate-500">
          {mode.description}
        </p>
      </div>

      <ul className="relative mt-auto space-y-2.5 pt-4 border-t border-slate-100">
        {mode.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[14px]">
            <Check className="mt-0.5 size-4 shrink-0 text-blue-500" />
            <span className="text-slate-600">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function IntegrationModes() {
  return (
    <section id="solutions" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-[1.75rem] font-bold tracking-tight text-slate-900 sm:text-[2rem]">
              {integrationModes.title}
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-slate-500">
              {integrationModes.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn delay={0.1} className="h-full">
            <ModeCard
              mode={integrationModes.assistant}
              icon={MessageSquare}
              gradient="bg-gradient-to-bl from-violet-100 to-transparent"
            />
          </FadeIn>
          <FadeIn delay={0.2} className="h-full">
            <ModeCard
              mode={integrationModes.widget}
              icon={Search}
              gradient="bg-gradient-to-bl from-blue-100 to-transparent"
            />
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {integrationModes.compare.map((row) => (
              <div
                key={row.scenario}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/50 px-5 py-4 transition-colors hover:bg-slate-50"
              >
                <span className="text-[14px] text-slate-500">{row.scenario}</span>
                <ArrowRight className="size-3.5 shrink-0 text-slate-300" />
                <span className="text-[14px] font-semibold text-slate-800">
                  {row.solution}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
