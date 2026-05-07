import { websiteContent } from "@/content/websiteContent";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(12,12,12,0.88)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <a className="text-[24px] font-bold leading-none text-white" href="#top">
          FinSight
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-2">
            {websiteContent.nav.map((item) => (
              <li key={item.href}>
                <a
                  className="inline-flex min-h-11 items-center rounded-md border border-white/10 px-4 text-[18px] font-semibold text-[var(--text-secondary)] transition hover:border-[var(--blue-50)] hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
