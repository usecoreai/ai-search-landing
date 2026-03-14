import { landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";
import { ArrowRight, Check, Zap } from "lucide-react";

const { results } = landingContent;

export function Results() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.05),transparent_40%)]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
              <Zap className="size-3.5 fill-orange-500 text-orange-500" />
              Real-world impact
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {results.title}
            </h2>
            
            <div className="grid w-full gap-4 sm:grid-cols-1 md:gap-6">
              {results.bullets.map((bullet, i) => (
                <div 
                  key={i}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100 group-hover:text-blue-700">
                    <Check className="size-5" />
                  </div>
                  <span className="text-left text-lg font-medium text-slate-700 group-hover:text-slate-900">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#cta"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5"
            >
              Запросить демо
              <ArrowRight className="size-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
