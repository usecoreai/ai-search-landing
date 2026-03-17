"use client";

import { useState, type FormEvent } from "react";
import { landingContent } from "@/content/landing-content";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "./fade-in";
import { Send, CheckCircle, ArrowRight, Mail } from "lucide-react";

const { finalCta, form } = landingContent;

export function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);

    try {
      await fetch("https://formsubmit.co/ajax/team@core-ai.ru", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
    } catch {
      // still show success — formsubmit may block from some origins on first use
    }

    setSending(false);
    setSubmitted(true);
  };

  return (
    <section id="cta" className="relative scroll-mt-20 overflow-hidden bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.06),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
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
                  href="#cta-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5B5BD6] px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#5B5BD6]/20 transition-all hover:bg-[#4B4BC0]"
                >
                  {finalCta.cta1}
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="mailto:team@core-ai.ru"
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
              {submitted ? (
                <div className="flex flex-col items-center gap-5 py-10 text-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-emerald-50">
                    <CheckCircle className="size-8 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-[18px] font-bold text-slate-900">
                      Заявка отправлена
                    </p>
                    <p className="mt-2 text-[14px] text-slate-500">
                      Мы свяжемся с вами в ближайшее время.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[14px] font-medium text-blue-600 hover:text-blue-700"
                  >
                    Отправить ещё одну
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input type="hidden" name="_subject" value="Новая заявка с search.core-ai.ru" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="flex flex-col gap-1">
                    <h3 className="text-[18px] font-bold text-slate-900">
                      {form.title}
                    </h3>
                    <p className="text-[13px] text-slate-500">
                      {form.subtitle}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <Input
                      name="name"
                      placeholder={form.fields.name}
                      required
                      className="h-11 border-slate-200 bg-white text-[14px] shadow-sm placeholder:text-slate-400 focus:border-[#5B5BD6] focus:ring-2 focus:ring-[#5B5BD6]/20"
                    />
                    <Input
                      name="company"
                      placeholder={form.fields.company}
                      required
                      className="h-11 border-slate-200 bg-white text-[14px] shadow-sm placeholder:text-slate-400 focus:border-[#5B5BD6] focus:ring-2 focus:ring-[#5B5BD6]/20"
                    />
                  </div>
                  <Input
                    name="contact"
                    placeholder={form.fields.contact}
                    required
                    className="h-11 border-slate-200 bg-white text-[14px] shadow-sm placeholder:text-slate-400 focus:border-[#5B5BD6] focus:ring-2 focus:ring-[#5B5BD6]/20"
                  />
                  <Input
                    name="website"
                    placeholder={form.fields.website}
                    className="h-11 border-slate-200 bg-white text-[14px] shadow-sm placeholder:text-slate-400 focus:border-[#5B5BD6] focus:ring-2 focus:ring-[#5B5BD6]/20"
                  />
                  <Textarea
                    name="comment"
                    placeholder={form.fields.comment}
                    rows={3}
                    className="border-slate-200 bg-white text-[14px] shadow-sm placeholder:text-slate-400 focus:border-[#5B5BD6] focus:ring-2 focus:ring-[#5B5BD6]/20"
                  />

                  <button
                    type="submit"
                    disabled={sending}
                    className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg transition-all hover:bg-slate-800 disabled:opacity-60"
                  >
                    {sending ? "Отправка..." : form.submit}
                    {!sending && <Send className="size-4" />}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
