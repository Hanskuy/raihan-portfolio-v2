import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";

const certificateLinkClass =
  "link-line inline-flex min-h-11 items-center gap-2 font-semibold";

export function Certificates() {
  return (
    <section
      id="certificates"
      className="section-pad border-t border-[var(--line)]"
      aria-labelledby="certificates-heading"
    >
      <div className="site-shell">
        <h2 id="certificates-heading" className="section-title">
          Certificates
        </h2>
        <p className="body-copy mt-5">
          Selected academic, research, organizational, and language credentials.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <article className="flex flex-col rounded-[14px] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-7">
            <h3 className="text-2xl font-semibold tracking-[-0.025em]">EECSI 2026</h3>
            <p className="mt-2 font-medium">Author &amp; Presenter</p>
            <p className="mt-4 text-[var(--muted)]">
              13th International Conference on Electrical Engineering, Computer Science and Informatics
            </p>
            <p className="mt-5 border-t border-[var(--line)] pt-5 font-medium leading-relaxed">
              Automated Construction of Malware Behavior Datasets Using Cuckoo3 Sandbox in an Air-Gap Environment
            </p>
            <p className="mt-3 font-mono text-sm text-[var(--muted)]">September 2026</p>
            <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-7">
              <a
                href="/documents/certificates/eecsi-presenter-certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className={certificateLinkClass}
              >
                Presenter Certificate
                <ArrowSquareOut size={17} aria-hidden="true" />
              </a>
              <a
                href="/documents/certificates/eecsi-author-certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className={certificateLinkClass}
              >
                Author Certificate
                <ArrowSquareOut size={17} aria-hidden="true" />
              </a>
            </div>
          </article>

          <article className="flex flex-col rounded-[14px] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-7">
            <h3 className="text-2xl font-semibold tracking-[-0.025em]">i-SMILE Laboratory</h3>
            <p className="mt-2 font-medium">Study Group</p>
            <p className="mt-4 text-[var(--muted)]">Intelligent System and Machine Learning</p>
            <p className="mt-3 font-mono text-sm text-[var(--muted)]">November - December 2023</p>
            <div className="mt-auto pt-7">
              <a
                href="/documents/certificates/ismile-certificate.png"
                target="_blank"
                rel="noopener noreferrer"
                className={certificateLinkClass}
              >
                View certificate
                <ArrowSquareOut size={17} aria-hidden="true" />
              </a>
            </div>
          </article>

          <article className="flex flex-col rounded-[14px] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-7">
            <h3 className="text-2xl font-semibold tracking-[-0.025em]">
              Telkom University Badminton Club
            </h3>
            <p className="mt-2 font-medium">Logistics Committee / Logistics Coordinator</p>
            <div className="mt-6 border-t border-[var(--line)] pt-5">
              <p className="font-mono text-sm text-[var(--muted)]">Activities</p>
              <ul className="mt-3 space-y-2">
                <li>Open Recruitment 2024</li>
                <li>Training Camp 2024</li>
              </ul>
            </div>
            <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-7">
              <a
                href="/documents/certificates/tubc-open-recruitment-2024.png"
                target="_blank"
                rel="noopener noreferrer"
                className={certificateLinkClass}
              >
                View Open Recruitment certificate
                <ArrowSquareOut size={17} aria-hidden="true" />
              </a>
              <a
                href="/documents/certificates/tubc-training-camp-2024.png"
                target="_blank"
                rel="noopener noreferrer"
                className={certificateLinkClass}
              >
                View Training Camp certificate
                <ArrowSquareOut size={17} aria-hidden="true" />
              </a>
            </div>
          </article>

          <article className="flex flex-col rounded-[14px] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-7">
            <h3 className="text-2xl font-semibold tracking-[-0.025em]">English Proficiency</h3>
            <p className="mt-2 text-[var(--muted)]">Telkom University Language Center</p>
            <dl className="mt-6 grid grid-cols-2 gap-5 border-t border-[var(--line)] pt-5">
              <div>
                <dt className="font-mono text-sm text-[var(--muted)]">EPrT</dt>
                <dd className="mt-1 font-mono text-2xl font-semibold tabular-nums">450</dd>
              </div>
              <div>
                <dt className="font-mono text-sm text-[var(--muted)]">ECCT</dt>
                <dd className="mt-1 font-mono text-2xl font-semibold tabular-nums">3.25</dd>
              </div>
            </dl>
            <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-7">
              <a
                href="/documents/certificates/eprt-certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className={certificateLinkClass}
              >
                View EPrT certificate
                <ArrowSquareOut size={17} aria-hidden="true" />
              </a>
              <a
                href="/documents/certificates/ecct-certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className={certificateLinkClass}
              >
                View ECCT certificate
                <ArrowSquareOut size={17} aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
