import { skillGroups } from "@/data/portfolio";
import { Brain, Bug, Database, GitBranch, Network, ShieldCheck, Table } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const logos: Record<string, string> = {
  Python: "python.svg",
  PHP: "php.svg",
  JavaScript: "javascript.svg",
  TypeScript: "typescript.svg",
  "Next.js": "nextjs.svg",
  HTML: "html5.svg",
  CSS: "css3.svg",
  CodeIgniter: "codeigniter.svg",
  MySQL: "mysql.svg",
  Git: "git.svg",
  Linux: "linux.svg",
  "Cuckoo3 Sandbox": "cuckoo3.png",
  XGBoost: "xgboost.png",
};

const fieldIcons: Record<string, typeof Database> = {
  SQL: Database,
  "Computer Networking": Network,
  Cybersecurity: ShieldCheck,
  "Malware Analysis": Bug,
  DevSecOps: GitBranch,
  "Machine Learning": Brain,
  "Data Preparation": Table,
};

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
                {group.items.map((item) => {
                  const logo = logos[item];
                  const Icon = fieldIcons[item];

                  return (
                    <li key={item} className="flex min-w-0 items-center gap-3 text-sm font-medium leading-relaxed sm:text-base">
                      {logo ? (
                        <Image
                          src={"/images/toolkit/" + logo}
                          alt=""
                          aria-hidden="true"
                          width={28}
                          height={28}
                          className={"h-7 w-7 shrink-0 object-contain" + (item === "Next.js" ? " rounded-full bg-white" : "")}
                        />
                      ) : Icon ? (
                        <Icon size={28} className="shrink-0 text-[var(--muted)]" aria-hidden="true" />
                      ) : null}
                      <span className="min-w-0">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
