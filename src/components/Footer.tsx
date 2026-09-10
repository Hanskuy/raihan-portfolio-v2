import { personalInfo } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="site-shell flex flex-col gap-3 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {personalInfo.name}</p>
        <p>Built with Next.js and TypeScript.</p>
      </div>
    </footer>
  );
}
