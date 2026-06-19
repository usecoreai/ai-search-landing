import { BRAND_NAME, landingContent } from "@/content/landing-content";

const { nav } = landingContent;

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          <span className="text-[15px] font-semibold text-slate-900">
            {BRAND_NAME}
          </span>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] text-slate-400 transition-colors hover:text-slate-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.core-ai.ru/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-slate-400 transition-colors hover:text-slate-700"
            >
              Конфиденциальность
            </a>
            <a
              href="https://www.core-ai.ru/policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-slate-400 transition-colors hover:text-slate-700"
            >
              Политика обработки данных
            </a>
          </nav>
        </div>
        <span className="text-[13px] text-slate-400">
          &copy; {new Date().getFullYear()} {BRAND_NAME}
        </span>
      </div>
    </footer>
  );
}
