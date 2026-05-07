import { websiteContent } from "@/content/websiteContent";

export function Hero() {
  const { hero } = websiteContent;

  return (
    <section id="top" className="relative border-b border-white/10 py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="mb-4 text-[18px] font-semibold text-[var(--blue-50)]">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-[42px] font-bold leading-[1.08] text-white sm:text-[56px]">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-3xl text-[22px] font-semibold leading-[1.45] text-[var(--text-secondary)]">
            {hero.subheadline}
          </p>
          <p className="mt-4 max-w-3xl text-[19px] leading-[1.65] text-[var(--text-muted)]">
            {hero.body}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-12 items-center rounded-md bg-[var(--blue-50)] px-5 py-3 text-[18px] font-bold text-black transition hover:bg-white"
              href={hero.primaryAction.href}
            >
              {hero.primaryAction.label}
            </a>
            <a
              className="inline-flex min-h-12 items-center rounded-md border border-[var(--blue-50)] px-5 py-3 text-[18px] font-bold text-[var(--blue-50)] transition hover:bg-[var(--blue-600)]"
              href={hero.secondaryAction.href}
            >
              {hero.secondaryAction.label}
            </a>
          </div>
        </div>

        <aside
          aria-label="FinSight product principles preview"
          className="border border-white/10 border-l-4 border-l-[var(--blue-50)] bg-[var(--surface)] p-4 shadow-xl shadow-black/20"
        >
          <div className="bg-[var(--blue-600)] p-4">
            <p className="text-[18px] font-semibold text-[var(--blue-50)]">Voice-first banking flow</p>
            <p className="mt-3 text-[24px] font-bold leading-tight text-white">
              Welcome back. Your balance is $2,340. What would you like to do today?
            </p>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2" aria-label="Example FinSight actions">
            {["Hear balance", "Deposit check", "Review guidance", "Adjust voice"].map((label) => (
              <li
                className="min-h-14 border border-white/10 bg-[rgba(255,255,255,0.05)] p-3 text-[18px] font-semibold"
                key={label}
              >
                {label}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
