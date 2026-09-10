import Image from "next/image";
import { education, organization } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="section-pad border-t border-[var(--line)]">
      <div className="site-shell">
        <h2 className="section-title">Education &amp; Organization</h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-[14px] bg-[var(--surface)] p-6 md:p-9">
            <div className="grid gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.03em]">{education.institution}</h3>
                <p className="mt-2 text-lg">{education.degree}</p>
              </div>
              <dl className="font-mono text-sm md:text-right">
                <div>
                  <dt className="text-[var(--muted)]">Period</dt>
                  <dd>{education.period}</dd>
                </div>
                <div className="mt-4">
                  <dt className="text-[var(--muted)]">GPA</dt>
                  <dd className="text-xl font-semibold tabular-nums">{education.gpa}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-12 grid gap-8 border-t border-[var(--line)] pt-7 md:grid-cols-2">
              <div>
                <h4 className="font-semibold">Capstone</h4>
                <p className="mt-2 text-[var(--muted)]">{education.capstone}</p>
                <div className="mt-5 border-t border-[var(--line)] pt-4">
                  <p className="font-semibold">{education.publicationType}</p>
                  <p className="mt-2 text-[var(--muted)]">{education.publicationTitle}</p>
                  <p className="mt-2 font-mono text-sm text-[var(--muted)]">{education.publicationRole}</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Study group</h4>
                <p className="mt-2 text-[var(--muted)]">{education.lab}</p>
                <p className="text-[var(--muted)]">{education.field}</p>
                <p className="mt-3 font-mono text-sm text-[var(--muted)]">{education.labPeriod}</p>
              </div>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-[14px] bg-[var(--surface-2)] p-6 md:p-9">
            <div>
              <Image
                src="/images/tubc-team-activity.jpg"
                alt="Telkom University Badminton Club group activity."
                width={1280}
                height={720}
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="mb-7 aspect-video w-full rounded-[10px] object-cover"
              />
              <h3 className="text-2xl font-semibold tracking-[-0.025em]">{organization.name}</h3>
              <p className="mt-2 font-medium">{organization.role}</p>
              <p className="font-mono text-sm text-[var(--muted)]">{organization.period}</p>
              <p className="mt-6 text-[var(--muted)]">{organization.summary}</p>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {organization.strengths.map((strength) => (
                <li key={strength} className="border-b border-[var(--line)] pb-1">
                  {strength}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
