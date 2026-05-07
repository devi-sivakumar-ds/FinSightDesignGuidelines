type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = ""
}: SectionShellProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      aria-labelledby={headingId}
      id={id}
      className={`scroll-mt-24 py-10 sm:py-14 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-7 max-w-3xl">
          {eyebrow ? (
            <p className="mb-2 text-[18px] font-semibold uppercase tracking-[0.08em] text-[var(--green-50)]">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={headingId}
            className="text-[32px] font-bold leading-tight text-white sm:text-[38px]"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-[19px] leading-[1.6] text-[var(--text-secondary)]">
              {intro}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
