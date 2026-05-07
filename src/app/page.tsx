import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InsightSection } from "@/components/InsightSection";
import { SectionShell } from "@/components/SectionShell";
import { StatBlock } from "@/components/StatBlock";
import { TeamSection } from "@/components/TeamSection";
import { BankingFlowSimulator } from "@/components/BankingFlowSimulator";
import { websiteContent } from "@/content/websiteContent";

export default function Home() {
  const {
    about,
    problem,
    simulator,
    insightsIntro,
    insights,
    framework,
    research,
    additionalSections,
    futureWork,
    team
  } =
    websiteContent;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />

        <SectionShell id={about.id} eyebrow={about.eyebrow} title={about.headline}>
          <div className="grid gap-5 lg:grid-cols-3">
            {about.body.map((paragraph) => (
              <p
                className="rounded-lg border border-white/10 bg-[var(--surface)] p-5 text-[20px] leading-[1.65] text-[var(--text-secondary)]"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id={problem.id}
          eyebrow={problem.eyebrow}
          title={problem.headline}
        >
          <div className="mb-8 max-w-4xl space-y-5">
            {problem.body.map((paragraph) => (
              <p className="text-[20px] leading-[1.7] text-[var(--text-secondary)]" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <StatBlock stats={problem.stats} />
          <aside className="mt-8 border-l-4 border-[var(--orange-50)] bg-[var(--orange-600)] p-5">
            <h3 className="text-[28px] font-bold leading-tight text-white">
              {problem.complianceGap.headline}
            </h3>
            <p className="mt-3 text-[20px] leading-[1.65] text-[var(--text-secondary)]">
              {problem.complianceGap.body}
            </p>
          </aside>
        </SectionShell>

        <SectionShell
          id={simulator.id}
          eyebrow={simulator.eyebrow}
          title={simulator.headline}
          intro={simulator.intro}
          className="border-y border-white/10 bg-[rgba(255,255,255,0.02)]"
        >
          <BankingFlowSimulator />
        </SectionShell>

        <SectionShell
          id={insightsIntro.id}
          eyebrow={insightsIntro.eyebrow}
          title={insightsIntro.headline}
          intro={insightsIntro.body}
          className="border-y border-white/10 bg-[rgba(255,255,255,0.02)]"
        >
          <div className="space-y-6">
            {insights.map((insight) => (
              <InsightSection insight={insight} key={insight.number} />
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id={framework.id}
          eyebrow={framework.eyebrow}
          title={framework.headline}
          intro={framework.intro}
        >
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <caption className="sr-only">
                FinSight industry framework showing what to avoid and what to design for.
              </caption>
              <thead>
                <tr className="bg-[var(--surface-overlay)] text-[18px] font-bold text-white">
                  <th className="w-1/2 border-r border-white/10 p-4" scope="col">
                    Instead of
                  </th>
                  <th className="w-1/2 p-4" scope="col">
                    Design for
                  </th>
                </tr>
              </thead>
              <tbody>
                {framework.patterns.map((pattern) => (
                  <tr className="border-t border-white/10 bg-[var(--surface)]" key={pattern.insteadOf}>
                    <td className="border-r border-white/10 p-5 align-top text-[19px] leading-[1.6] text-[var(--text-secondary)]">
                      {pattern.insteadOf}
                    </td>
                    <td className="p-5 align-top text-[19px] font-semibold leading-[1.6] text-white">
                      {pattern.designFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionShell>

        <SectionShell
          id={research.id}
          eyebrow={research.eyebrow}
          title={research.headline}
          intro={research.body}
        >
          <ul className="grid gap-4 md:grid-cols-2">
            {research.items.map((item) => (
              <li
                className="rounded-lg border border-white/10 bg-[var(--surface)] p-5"
                key={item.value}
              >
                <p className="text-[24px] font-bold text-[var(--green-50)]">{item.value}</p>
                <p className="mt-3 text-[20px] leading-[1.6] text-white">{item.label}</p>
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell
          eyebrow={additionalSections.eyebrow}
          title={additionalSections.headline}
          className="border-y border-white/10 bg-[rgba(255,255,255,0.02)]"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {additionalSections.cards.map((card) => (
              <article
                className="rounded-lg border border-white/10 bg-[var(--surface)] p-5"
                key={card.title}
              >
                <h3 className="text-[24px] font-bold text-[var(--blue-50)]">{card.title}</h3>
                <p className="mt-3 text-[18px] leading-[1.6] text-[var(--text-secondary)]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell eyebrow={futureWork.eyebrow} title={futureWork.headline}>
          <ul className="grid gap-4 md:grid-cols-2">
            {futureWork.items.map((item) => (
              <li
                className="border-l-4 border-[var(--violet-50)] bg-[var(--violet-600)] p-5 text-[20px] leading-[1.6] text-white"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell id={team.id} eyebrow={team.eyebrow} title={team.headline}>
          <TeamSection />
        </SectionShell>
      </main>
      <Footer />
    </>
  );
}
