import Image from "next/image";
import { ArrowRight, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/data/portfolio";

const [airmalysis, egrc, research] = projects;

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--muted)]" aria-label="Technologies">
      {items.map((item) => (
        <li key={item} className="border-b border-[var(--line)] pb-1">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-[var(--line)]">
      <div className="site-shell">
        <h2 className="section-title">My Projects</h2>
        <p className="body-copy mt-5">Projects across software development and cybersecurity research.</p>

        <article className="mt-16">
          <div className="grid gap-10 border-t border-[var(--ink)] pt-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="min-w-0">
              <h3 className="text-4xl font-semibold leading-none tracking-[-0.035em] md:text-5xl">{airmalysis.title}</h3>
              <p className="mt-4 text-xl font-medium leading-snug">{airmalysis.subtitle}</p>
              <p className="body-copy mt-5 text-base">{airmalysis.description}</p>
              <div className="mt-7">
                <TechList items={airmalysis.technologies} />
              </div>
            </div>

            <dl className="grid self-end border-t border-[var(--line)] pt-2 sm:grid-cols-3 sm:gap-4 sm:pt-6 lg:grid-cols-1 lg:pt-2">
              {airmalysis.metrics!.map((metric) => (
                <div key={metric.label} className="flex items-end justify-between gap-5 border-b border-[var(--line)] py-4 sm:block sm:border-0 sm:py-0 lg:flex lg:border-b lg:py-4">
                  <dt className="max-w-[24ch] text-xs leading-snug text-[var(--muted)]">{metric.label}</dt>
                  <dd className="font-mono text-xl font-semibold tabular-nums sm:mt-2 md:text-2xl lg:mt-0">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="mx-auto mt-12 max-w-[68rem] rounded-[14px] border border-[var(--line)] bg-[#202020]">
            <a
              href={airmalysis.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open full-size AirMalysis analysis result"
              className="block overflow-hidden rounded-[13px]"
            >
              <Image
                src={airmalysis.image!}
                alt={airmalysis.imageAlt!}
                width={1228}
                height={857}
                sizes="(max-width: 1120px) 100vw, 1088px"
                className="h-auto w-full"
              />
            </a>
          </figure>

          <div className="technical-flow mx-auto mt-5 flex max-w-[68rem] snap-x gap-2 overflow-x-auto pb-3" aria-label="AirMalysis workflow">
            {airmalysis.workflow!.map((step, index) => (
              <div key={step} className="flex shrink-0 snap-start items-center gap-2">
                <span className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 font-mono text-xs">
                  {step}
                </span>
                {index < airmalysis.workflow!.length - 1 && (
                  <ArrowRight size={14} className="text-[var(--muted)]" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-[var(--line)] pt-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h4 className="text-xl font-semibold">AirMalysis demonstration</h4>
                <p className="body-copy mt-2 text-base">
                  See the malware-analysis workflow and classification system in action.
                </p>
              </div>
              <a
                href={airmalysis.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line inline-flex min-h-11 shrink-0 items-center gap-2 self-start font-semibold sm:self-auto"
              >
                Watch on YouTube
                <ArrowSquareOut size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="mt-6 aspect-video overflow-hidden rounded-[14px] bg-[#0b0d12]">
              <iframe
                src={airmalysis.demoEmbedUrl}
                title="AirMalysis project demonstration"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </article>

        <article className="mt-24 grid gap-8 md:grid-cols-2 md:items-stretch lg:mt-32">
          <div className="flex min-h-[28rem] flex-col justify-between rounded-[14px] bg-[var(--surface-2)] p-6 md:p-8">
            <div className="flex items-start justify-between gap-6 border-b border-[var(--line)] pb-5 text-sm text-[var(--muted)]">
              <span>Internal enterprise application</span>
              <span className="font-mono">No public screenshot</span>
            </div>
            <div>
              <p className="font-mono text-7xl font-semibold tracking-[-0.04em] md:text-8xl">50+</p>
              <p className="mt-3 max-w-[18ch] text-xl font-medium">frontend and backend bugs resolved</p>
            </div>
          </div>

          <div className="flex flex-col justify-center md:pl-7 lg:pl-14">
            <h3 className="text-4xl font-semibold leading-none tracking-[-0.035em] md:text-5xl">{egrc.title}</h3>
            <p className="mt-4 text-xl font-medium leading-snug">{egrc.subtitle}</p>
            <p className="mt-4 font-mono text-sm text-[var(--muted)]">{egrc.context}</p>
            <p className="body-copy mt-5 text-base">{egrc.description}</p>
            <div className="mt-7">
              <TechList items={egrc.technologies} />
            </div>
          </div>
        </article>

        <article className="mt-24 grid gap-8 border-t border-[var(--line)] pt-10 lg:mt-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="order-2 flex flex-col justify-end lg:order-1 lg:pb-4">
            <h3 className="max-w-[13ch] text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-5xl">
              {research.title}
            </h3>
            <p className="mt-5 font-mono text-sm text-[var(--muted)]">{research.subtitle}</p>
            <p className="body-copy mt-5 text-base">{research.description}</p>
            <div className="mt-6 border-t border-[var(--line)] pt-5">
              <p className="font-mono text-sm text-[var(--muted)]">{research.publicationType}</p>
              <p className="mt-2 font-semibold">{research.publicationTitle}</p>
              <p className="mt-2 font-mono text-sm text-[var(--muted)]">{research.publicationRole}</p>
            </div>
            <div className="mt-7">
              <TechList items={research.technologies} />
            </div>
          </div>
          <figure className="order-1 mx-auto w-full max-w-[34rem] lg:order-2">
            <div className="overflow-hidden rounded-[14px] border border-[var(--line)] bg-white p-3 sm:p-5">
              <Image
                src={research.image!}
                alt={research.imageAlt!}
                width={860}
                height={1190}
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[0.9375rem] leading-relaxed text-[var(--ink)] opacity-75">
              Dataset construction pipeline overview. Figure 1 from the conference paper.
            </figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}
