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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cta" className="relative overflow-hidden bg-white py-24 md:py-32 scroll-mt-20">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(241,245,249,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(241,245,249,0.4)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn className="max-w-xl">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {finalCta.headline}
              </h2>
              <p className="text-lg leading-relaxed text-slate-600 sm:text-xl sm:leading-relaxed">
                {finalCta.subheadline}
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-2">
                <a
                  href="#cta-form"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-blue-600/30 hover:-translate-y-0.5"
                >
                  {finalCta.cta1}
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="mailto:hello@coreai.search"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:text-slate-900 hover:ring-slate-300"
                >
                  <Mail className="size-4" />
                  {finalCta.cta2}
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-blue-100 to-purple-100 blur-2xl opacity-50" />
            <div
              id="cta-form"
              className="relative rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl sm:p-10"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
                  <div className="flex size-20 items-center justify-center rounded-full bg-emerald-50">
                    <CheckCircle className="size-10 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Заявка отправлена!</h3>
                    <p className="mt-2 text-slate-500">
                      Мы свяжемся с вами в течение рабочего дня.
                    </p>
                  </div>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Отправить еще одну
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-slate-900">{form.title}</h3>
                    <p className="text-sm text-slate-500">Заполните форму, и мы свяжемся для демо.</p>
                  </div>

                  <div className="grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input
                        name="name"
                        placeholder={form.fields.name}
                        required
                        className="h-12 border-slate-200 bg-white px-4 text-base shadow-sm transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      />
                      <Input
                        name="company"
                        placeholder={form.fields.company}
                        required
                        className="h-12 border-slate-200 bg-white px-4 text-base shadow-sm transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>
                    <Input
                      name="contact"
                      placeholder={form.fields.contact}
                      required
                      className="h-12 border-slate-200 bg-white px-4 text-base shadow-sm transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                    <Input
                      name="website"
                      placeholder={form.fields.website}
                      className="h-12 border-slate-200 bg-white px-4 text-base shadow-sm transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                    <Textarea
                      name="comment"
                      placeholder={form.fields.comment}
                      rows={3}
                      className="min-h-[100px] border-slate-200 bg-white px-4 py-3 text-base shadow-sm transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    {form.submit}
                    <Send className="size-4" />
                  </button>
                  
                  <p className="text-center text-xs text-slate-400 mt-2">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
