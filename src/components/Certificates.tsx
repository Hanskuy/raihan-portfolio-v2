import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const certificateLinkClass =
  "link-line inline-flex min-h-11 items-center gap-2 font-semibold";

function CertificatePreviews({ items }: { items: { src: string; label: string; alt: string }[] }) {
  return (
    <div className={items.length > 1
      ? "mt-auto grid gap-4 pt-7 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2"
      : "mt-auto grid gap-4 pt-7"}>
      {items.map(({ src, label, alt }) => (
        <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="min-w-0 rounded-[14px]">
          <span className="relative block h-44 overflow-hidden rounded-[14px] border border-[var(--line)] bg-[var(--surface-2)]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes={items.length > 1
                ? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                : "(min-width: 768px) 50vw, 100vw"}
              className="object-contain"
            />
          </span>
          <span className={certificateLinkClass + " mt-2 text-sm"}>
            {label}
            <ArrowSquareOut size={17} className="shrink-0" aria-hidden="true" />
          </span>
        </a>
      ))}
    </div>
  );
}

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
            <CertificatePreviews items={[
              { src: "/documents/certificates/eecsi-presenter-certificate.jpg", label: "Presenter Certificate", alt: "EECSI 2026 presenter certificate for Raihan Nur Ramadhan Sundana." },
              { src: "/documents/certificates/eecsi-author-certificate.jpg", label: "Author Certificate", alt: "EECSI 2026 author certificate for Raihan Nur Ramadhan Sundana and co-authors." },
            ]} />
          </article>

          <article className="flex flex-col rounded-[14px] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-7">
            <h3 className="text-2xl font-semibold tracking-[-0.025em]">i-SMILE Laboratory</h3>
            <p className="mt-2 font-medium">Study Group</p>
            <p className="mt-4 text-[var(--muted)]">Intelligent System and Machine Learning</p>
            <p className="mt-3 font-mono text-sm text-[var(--muted)]">November - December 2023</p>
            <CertificatePreviews items={[
              { src: "/documents/certificates/ismile-certificate.png", label: "View certificate", alt: "i-SMILE Laboratory study group certificate for Raihan Nur Ramadhan Sundana." },
            ]} />
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
            <CertificatePreviews items={[
              { src: "/documents/certificates/tubc-open-recruitment-2024.png", label: "View Open Recruitment certificate", alt: "Telkom University Badminton Club Open Recruitment 2024 committee certificate." },
              { src: "/documents/certificates/tubc-training-camp-2024.png", label: "View Training Camp certificate", alt: "Telkom University Badminton Club Training Camp 2024 committee certificate." },
            ]} />
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
            <CertificatePreviews items={[
              { src: "/documents/certificates/eprt-certificate.jpg", label: "View EPrT certificate", alt: "EPrT certificate for Raihan Nur Ramadhan Sundana, total score 450, with QR code concealed." },
              { src: "/documents/certificates/ecct-certificate.jpg", label: "View ECCT certificate", alt: "ECCT certificate for Raihan Nur Ramadhan Sundana, total score 3.25, with QR code concealed." },
            ]} />
          </article>
        </div>
      </div>
    </section>
  );
}
