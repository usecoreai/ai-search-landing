import { landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";
import {
  Search,
  MessageSquare,
  Shield,
  Sparkles,
  Zap,
  Database,
} from "lucide-react";

const { capabilities } = landingContent;

const iconMap = {
  search: Search,
  message: MessageSquare,
  shield: Shield,
  sparkles: Sparkles,
  zap: Zap,
  database: Database,
} as const;

const accentMap: Record<string, string> = {
  search: "bg-sky-50 text-sky-600",
  message: "bg-violet-50 text-violet-600",
  shield: "bg-amber-50 text-amber-600",
  sparkles: "bg-blue-50 text-blue-600",
  zap: "bg-emerald-50 text-emerald-600",
  database: "bg-rose-50 text-rose-600",
};

export function Capabilities() {
  return (
    <section className="bg-slate-50/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-[1.75rem] font-bold tracking-tight text-slate-900 sm:text-[2rem]">
              Что умеет наш поиск
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon];
            const accent = accentMap[cap.icon] ?? "bg-slate-100 text-slate-600";
            return (
              <FadeIn key={cap.title} delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:border-slate-300/80 hover:shadow-md">
                  <div className={`flex size-10 items-center justify-center rounded-xl ${accent}`}>
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-[16px] font-semibold text-slate-900">
                    {cap.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-slate-500">
                    {cap.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
