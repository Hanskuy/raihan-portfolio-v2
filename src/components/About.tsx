export function About() {
  return (
    <section id="about" className="section-pad-compact border-t border-[var(--line)]">
      <div className="site-shell grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <h2 className="section-title">About me</h2>
        <div className="min-w-0">
          <h3 className="max-w-[18ch] text-3xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-4xl">
            Software development with a cybersecurity foundation
          </h3>
          <div className="body-copy mt-7 space-y-5">
            <p>
              I am a fresh graduate in Computer Engineering from Telkom University with practical experience as a Full Stack Developer Intern at Perumda Air Minum Tirta Raharja, where I worked on an internal Enterprise Governance, Risk and Compliance application.
            </p>
            <p>
              My academic projects and research have focused on software development, cybersecurity, malware analysis, Linux, data preparation, and machine learning, including the development of AirMalysis and research using Cuckoo3 Sandbox in an air-gapped environment. I am particularly interested in software engineering, information security, cybersecurity, and IT risk and compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
