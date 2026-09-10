import Image from "next/image";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-[var(--line)]">
      <div className="site-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <h2 className="section-title">Experience</h2>
          <p className="body-copy mt-5">Full-stack development experience on an internal enterprise application.</p>
        </div>

        <article className="border-t border-[var(--ink)] pt-6">
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.025em]">{experience.role}</h3>
              <p className="mt-1 text-lg">{experience.company}</p>
              <p className="mt-2 text-[var(--muted)]">{experience.context}</p>
            </div>
            <div className="font-mono text-sm leading-relaxed text-[var(--muted)] sm:text-right">
              <p>{experience.period}</p>
              <p>{experience.location}</p>
            </div>
          </div>

          <ul className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {experience.responsibilities.map((item) => (
              <li key={item} className="border-t border-[var(--line)] pt-4 text-[var(--muted)]">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex items-end gap-5 border-t border-[var(--line)] pt-7">
            <strong className="font-mono text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">50+</strong>
            <span className="max-w-[18ch] pb-1 text-sm leading-snug text-[var(--muted)]">frontend and backend bugs resolved</span>
          </div>

          <figure className="mt-12 border-t border-[var(--line)] pt-7">
            <h4 className="font-semibold">Internship Documentation</h4>
            <div className="mt-4 overflow-hidden rounded-[14px] border border-[var(--line)]">
              <Image
                src="/images/pdam-internship-team-discussion-sanitized.png"
                alt="Team discussion during my Full Stack Developer internship at Perumda Air Minum Tirta Raharja."
                width={1680}
                height={945}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Team discussion during my Full Stack Developer internship at Perumda Air Minum Tirta Raharja.
            </figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}
