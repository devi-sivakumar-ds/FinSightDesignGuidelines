import type { Insight } from "@/content/websiteContent";
import { ComparisonTable } from "./ComparisonTable";

export function InsightSection({ insight }: { insight: Insight }) {
  return (
    <article className="border border-white/10 bg-[var(--surface)] p-4 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-[18px] font-bold text-[var(--violet-50)]">
            Guideline {insight.number}
          </p>
          <h3 className="mt-1 text-[26px] font-bold leading-tight text-white">
            {insight.title}
          </h3>
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="border-l-4 border-[var(--orange-50)] bg-[rgba(255,121,49,0.10)] p-4">
          <h4 className="text-[20px] font-bold text-[var(--orange-50)]">The problem</h4>
          <p className="mt-3 text-[18px] leading-[1.6] text-[var(--text-secondary)]">
            {insight.problem}
          </p>
        </div>
        <div className="border-l-4 border-[var(--green-50)] bg-[rgba(195,215,153,0.10)] p-4">
          <h4 className="text-[20px] font-bold text-[var(--green-50)]">The FinSight approach</h4>
          <p className="mt-3 text-[18px] leading-[1.6] text-white">{insight.approach}</p>
        </div>
      </div>

      {"comparison" in insight && insight.comparison ? (
        <div className="mt-5">
          <ComparisonTable rows={insight.comparison} />
        </div>
      ) : null}

      {"quotes" in insight && insight.quotes ? (
        <section className="mt-5" aria-label={`Validated user quotes for guideline ${insight.number}`}>
          <h4 className="mb-4 text-[20px] font-bold text-[var(--blue-50)]">
            Validated by users
          </h4>
          <div className="grid gap-4 lg:grid-cols-2">
          {insight.quotes.map((quote) => (
            <blockquote
              className="border-l-4 border-[var(--blue-50)] bg-[var(--surface-overlay)] p-4 text-[19px] font-medium leading-[1.55] text-white"
              key={quote}
            >
              <span aria-hidden="true">"</span>
              {quote}
              <span aria-hidden="true">"</span>
            </blockquote>
          ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
