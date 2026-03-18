"use client";

import { useState, useEffect } from "react";
import { BRAND_NAME, landingContent } from "@/content/landing-content";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const { nav } = landingContent;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-[72px] sm:px-5 lg:px-8">
        <a href="#" className="text-[15px] font-semibold tracking-tight text-slate-900 sm:text-[17px]">
          {BRAND_NAME}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-[14px] font-medium text-slate-500 transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden rounded-full bg-[#5B5BD6] px-5 py-2.5 text-[14px] font-medium text-white shadow-sm transition-all hover:bg-[#4B4BC0] hover:shadow-md md:inline-flex"
          >
            {nav.cta}
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex size-10 items-center justify-center rounded-xl text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
            aria-label="Меню"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-0.5 px-5 py-4">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-[15px] font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-full bg-[#5B5BD6] px-5 py-3 text-center text-[15px] font-medium text-white transition-all hover:bg-[#4B4BC0]"
            >
              {nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
