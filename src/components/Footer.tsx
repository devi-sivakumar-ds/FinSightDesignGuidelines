import { websiteContent } from "@/content/websiteContent";

export function Footer() {
  const { footer } = websiteContent;

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-[28px] font-bold text-white">{footer.headline}</h2>
        <p className="mt-3 max-w-3xl text-[18px] leading-[1.6] text-[var(--text-secondary)]">
          {footer.body}
        </p>
      </div>
    </footer>
  );
}
