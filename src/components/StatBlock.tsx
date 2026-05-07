type Stat = {
  value: string;
  label: string;
  source: string;
};

export function StatBlock({ stats }: { stats: readonly Stat[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {stats.map((stat) => (
        <article
          className="border border-white/10 bg-[var(--surface)] p-5"
          key={stat.value}
        >
          <p className="text-[42px] font-bold leading-none text-[var(--orange-50)]">
            {stat.value}
          </p>
          <p className="mt-4 text-[19px] font-semibold leading-[1.45] text-white">
            {stat.label}
          </p>
          <p className="mt-4 text-[18px] text-[var(--text-muted)]">Source: {stat.source}</p>
        </article>
      ))}
    </div>
  );
}
