import { landingContent } from "@/content/landing-content";
import { FadeIn } from "./fade-in";
import { ArrowRight, Mail, Clock } from "lucide-react";

const { finalCta, contact } = landingContent;

export function CTA() {
  return (
    <section id="cta" className="relative scroll-mt-20 overflow-hidden bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.06),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div className="flex flex-col gap-6">
              <h2 className="text-[1.6rem] font-bold tracking-tight text-slate-900 sm:text-[1.85rem] lg:text-[2.1rem]">
                {finalCta.headline}
              </h2>
              <p className="max-w-lg text-[15px] leading-relaxed text-slate-500 sm:text-[16px] sm:leading-[1.7]">
                {finalCta.subheadline}
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5B5BD6] px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#5B5BD6]/20 transition-all hover:bg-[#4B4BC0]"
                >
                  {finalCta.cta1}
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-[15px] font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
                >
                  <Mail className="size-4" />
                  {finalCta.cta2}
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div
              id="cta-form"
              className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40 sm:p-8"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-[18px] font-bold text-slate-900">
                  {contact.title}
                </h3>
                <p className="text-[13px] text-slate-500">
                  {contact.subtitle}
                </p>
              </div>

              <a
                href={`mailto:${contact.email}`}
                className="group mt-6 flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50/60 p-4 transition-all hover:border-[#5B5BD6]/40 hover:bg-white"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#5B5BD6]/10 text-[#5B5BD6]">
                  <Mail className="size-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[13px] text-slate-500">Email</span>
                  <span className="text-[16px] font-semibold text-slate-900 transition-colors group-hover:text-[#5B5BD6]">
                    {contact.email}
                  </span>
                </span>
              </a>

              <div className="mt-4 flex items-center gap-2 text-[13px] text-slate-500">
                <Clock className="size-4 text-slate-400" />
                {contact.hours}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
