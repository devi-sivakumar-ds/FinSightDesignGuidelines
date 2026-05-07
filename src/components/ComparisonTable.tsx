type ComparisonRow = {
  label: string;
  current: string;
  finsight: string;
};

export function ComparisonTable({ rows }: { rows: readonly ComparisonRow[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <caption className="sr-only">
          Comparison between current banking interactions and FinSight interactions.
        </caption>
        <thead>
          <tr className="bg-[var(--surface-overlay)] text-[18px] font-bold text-white">
            <th className="w-[28%] border-r border-white/10 p-4" scope="col">
              Design question
            </th>
            <th className="w-[36%] border-r border-white/10 p-4" scope="col">
              Current banking
            </th>
            <th className="w-[36%] p-4" scope="col">
              FinSight
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr className="border-t border-white/10 bg-[rgba(255,255,255,0.03)]" key={row.label}>
              <th
                className="border-r border-white/10 p-4 align-top text-[18px] font-bold text-[var(--green-50)]"
                scope="row"
              >
                {row.label}
              </th>
              <td className="border-r border-white/10 p-4 align-top text-[18px] leading-[1.55] text-[var(--text-secondary)]">
                {row.current}
              </td>
              <td className="p-4 align-top text-[18px] leading-[1.55] text-white">
                {row.finsight}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
