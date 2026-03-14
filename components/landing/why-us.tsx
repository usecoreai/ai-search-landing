import { BRAND_NAME, landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";
import { Users, Zap, ShoppingCart, Layers } from "lucide-react";

const { whyUs } = landingContent;

const iconMap = {
  users: Users,
  zap: Zap,
  store: ShoppingCart,
  layers: Layers,
} as const;

export function WhyUs() {
  return (
    <section className="bg-slate-50/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-[1.75rem] font-bold tracking-tight text-slate-900 sm:text-[2rem]">
              Почему {BRAND_NAME}
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2">
          {whyUs.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <FadeIn key={item.title} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all hover:border-slate-300/80 hover:shadow-md">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50">
                    <Icon className="size-5 text-blue-600" />
                  </div>
                  <h3 className="text-[17px] font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-slate-500">
                    {item.description}
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
