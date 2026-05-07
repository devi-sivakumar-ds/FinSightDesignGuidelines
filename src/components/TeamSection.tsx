import { websiteContent } from "@/content/websiteContent";

export function TeamSection() {
  const { team } = websiteContent;

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {team.members.map((member) => (
          <article
            className="rounded-lg border border-white/10 bg-[var(--surface)] p-5"
            key={member.name}
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-md bg-[var(--blue-600)] text-[24px] font-bold text-[var(--blue-50)]">
              {member.name.charAt(0)}
            </div>
            <h3 className="text-[24px] font-bold text-white">{member.name}</h3>
            <p className="mt-2 text-[18px] leading-[1.55] text-[var(--text-secondary)]">
              {member.role}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-6 rounded-lg border border-white/10 bg-[var(--surface-overlay)] p-5 text-[20px] font-semibold text-white">
        {team.advisor}
      </p>
    </div>
  );
}
