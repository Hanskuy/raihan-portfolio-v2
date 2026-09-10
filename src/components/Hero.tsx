import Image from "next/image";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  return (
    <section id="top" className="site-shell grid min-h-[calc(100dvh-4.5rem)] items-center gap-10 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-12">
      <div className="flex flex-col justify-center">
        <h1 className="display-title">Raihan Nur Ramadhan Sundana</h1>
        <p className="body-copy mt-7 max-w-[55ch]">
          Fresh graduate in Computer Engineering from Telkom University with full-stack development internship experience and academic work in cybersecurity, malware analysis, and machine learning.
        </p>
        <p className="mt-5 font-mono text-sm font-medium text-[var(--muted)]">
          Bandung, Indonesia / Open to opportunities
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="button-primary">
            View my work
            <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a href="#contact" className="button-secondary">
            Contact me
          </a>
        </div>
      </div>

      <figure className="w-full max-w-[30rem] self-center justify-self-center lg:justify-self-end">
        <div className="relative aspect-[4/5] max-h-[min(70dvh,44rem)] overflow-hidden rounded-[14px] border border-[var(--line)] bg-[var(--surface-2)]">
          <Image
            src="/images/profile.jpg"
            alt="Portrait of Raihan Nur Ramadhan Sundana wearing a Telkom University academic blazer"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="object-cover object-[center_24%]"
          />
        </div>
        <figcaption className="mt-3 font-mono text-sm text-[var(--muted)]">
          Computer Engineering Graduate / Telkom University
        </figcaption>
      </figure>
    </section>
  );
}
