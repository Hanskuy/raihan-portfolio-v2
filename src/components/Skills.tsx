import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section-pad-compact border-t border-[var(--line)]" aria-labelledby="skills-heading">
      <div className="site-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <h2 id="skills-heading" className="section-title">Technical toolkit</h2>
          <p className="body-copy mt-5">Tools I use across development, security, and machine-learning work.</p>
        </div>

        <div className="grid gap-9 md:grid-cols-3 md:gap-7">
          {skillGroups.map((group) => (
            <div key={group.label} className="border-t border-[var(--ink)] pt-5">
              <h3 className="font-mono text-sm font-medium text-[var(--muted)]">{group.label}</h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm font-medium leading-relaxed sm:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
