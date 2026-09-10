"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowUpRight, PaperPlaneTilt } from "@phosphor-icons/react";
import { personalInfo, socialLinks } from "@/data/portfolio";

type FieldName = "name" | "email" | "subject" | "message";
type FieldErrors = Partial<Record<FieldName, string[]>>;

export function Contact() {
  const antiSpamTokenRef = useRef("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/contact", { signal: controller.signal })
      .then((response) => response.json())
      .then((result: { token?: string }) => {
        antiSpamTokenRef.current = result.token ?? "";
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("loading");
    setMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, antiSpamToken: antiSpamTokenRef.current }),
      });
      const result = (await response.json()) as { message?: string; fieldErrors?: FieldErrors };

      if (!response.ok) {
        const errors = result.fieldErrors ?? {};
        setStatus("error");
        setMessage(result.message ?? "The message could not be sent.");
        setFieldErrors(errors);
        const firstInvalid = Object.keys(errors)[0] as FieldName | undefined;
        if (firstInvalid) {
          requestAnimationFrame(() => {
            const field = form.elements.namedItem(firstInvalid);
            if (field instanceof HTMLElement) field.focus();
          });
        }
        return;
      }

      setStatus("success");
      setMessage(result.message ?? "Thanks. Your message has been sent.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("The message could not be sent. Please use the direct email link.");
    }
  }

  const inputClass =
    "mt-2 min-h-12 w-full rounded-[12px] border border-[var(--line)] bg-[var(--surface)] px-4 text-[var(--ink)] placeholder:text-[var(--muted)]";

  return (
    <section id="contact" className="section-pad border-t border-[var(--line)]">
      <div className="site-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div>
          <h2 className="section-title">Let&apos;s connect</h2>
          <p className="body-copy mt-6">
            I&apos;m open to opportunities in software development, cybersecurity, information security, and related technology roles.
          </p>
          <div className="mt-10 grid gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex min-h-12 items-center justify-between border-b border-[var(--line)] py-2 font-medium hover:text-[var(--accent-strong)]"
              >
                {link.label}
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[14px] bg-[var(--surface-2)] p-5 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="font-medium">
              Name
              <input name="name" autoComplete="name" maxLength={80} required className={inputClass} aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? "name-error" : undefined} />
              {fieldErrors.name && <span id="name-error" className="mt-2 block text-sm text-[var(--danger)]">{fieldErrors.name[0]}</span>}
            </label>
            <label className="font-medium">
              Email
              <input name="email" type="email" inputMode="email" autoComplete="email" maxLength={160} required className={inputClass} aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? "email-error" : undefined} />
              {fieldErrors.email && <span id="email-error" className="mt-2 block text-sm text-[var(--danger)]">{fieldErrors.email[0]}</span>}
            </label>
          </div>

          <label className="mt-5 block font-medium">
            Subject
            <input name="subject" maxLength={120} required className={inputClass} aria-invalid={Boolean(fieldErrors.subject)} aria-describedby={fieldErrors.subject ? "subject-error" : undefined} />
            {fieldErrors.subject && <span id="subject-error" className="mt-2 block text-sm text-[var(--danger)]">{fieldErrors.subject[0]}</span>}
          </label>

          <label className="mt-5 block font-medium">
            Message
            <textarea name="message" rows={6} minLength={20} maxLength={2000} required className={`${inputClass} resize-y py-3`} aria-invalid={Boolean(fieldErrors.message)} aria-describedby={fieldErrors.message ? "message-error" : "message-help"} />
            {fieldErrors.message ? (
              <span id="message-error" className="mt-2 block text-sm text-[var(--danger)]">{fieldErrors.message[0]}</span>
            ) : (
              <span id="message-help" className="mt-2 block text-sm font-normal text-[var(--muted)]">At least 20 characters.</span>
            )}
          </label>

          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label>
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button type="submit" disabled={status === "loading"} className="button-primary disabled:cursor-not-allowed disabled:opacity-60">
              <PaperPlaneTilt size={18} aria-hidden="true" />
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
            <p
              role={status === "error" ? "alert" : "status"}
              aria-live={status === "error" ? "assertive" : "polite"}
              className={`max-w-md text-sm ${status === "error" ? "text-[var(--danger)]" : status === "success" ? "text-[var(--success)]" : "text-[var(--muted)]"}`}
            >
              {message}
            </p>
          </div>

          <p className="mt-6 text-sm text-[var(--muted)]">
            Prefer email? Write directly to{" "}
            <a className="link-line" href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
          </p>
        </form>
      </div>
    </section>
  );
}
