"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  List,
  SunDim,
  X,
} from "@phosphor-icons/react";
import { ResumeAction } from "@/components/ResumeAction";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const trackedSections = [
  { id: "about", active: "about" },
  { id: "skills", active: "about" },
  { id: "experience", active: "experience" },
  { id: "projects", active: "projects" },
  { id: "education", active: "education" },
  { id: "certificates", active: "certificates" },
  { id: "contact", active: "contact" },
] as const;

type Theme = "system" | "light" | "dark";

function applyTheme(theme: Theme) {
  const useDark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", useDark);
  document.documentElement.dataset.theme = theme;
  window.dispatchEvent(new Event("portfolio-themechange"));
}

function subscribeTheme(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemThemeChange = () => {
    if (document.documentElement.dataset.theme === "system") {
      document.documentElement.classList.toggle("dark", media.matches);
    }
    callback();
  };
  window.addEventListener("portfolio-themechange", callback);
  media.addEventListener("change", onSystemThemeChange);
  return () => {
    window.removeEventListener("portfolio-themechange", callback);
    media.removeEventListener("change", onSystemThemeChange);
  };
}

function getThemeSnapshot(): Theme {
  const value = document.documentElement.dataset.theme;
  return value === "light" || value === "dark" ? value : "system";
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, () => "system");

  useEffect(() => {
    const sections = trackedSections.flatMap((section) => {
      const element = document.getElementById(section.id);
      return element ? [{ ...section, element }] : [];
    });
    const visibleSections = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleSections.add(entry.target.id);
          else visibleSections.delete(entry.target.id);
        });
        const visible = sections.filter(({ id }) => visibleSections.has(id));
        setActiveSection(visible[visible.length - 1]?.active ?? "");
      },
      { rootMargin: "-18% 0px -78%", threshold: 0 },
    );
    sections.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const cycleTheme = () => {
    const next: Theme = theme === "system" ? "light" : theme === "light" ? "dark" : "system";
    applyTheme(next);
    if (next === "system") localStorage.removeItem("theme");
    else localStorage.setItem("theme", next);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--header)] backdrop-blur-md">
      <nav className="site-shell flex h-[4.5rem] items-center justify-between" aria-label="Primary navigation">
        <a href="#top" className="min-h-11 py-2 font-semibold tracking-[-0.02em]">
          Raihan Sundana
        </a>

        <div className="hidden items-center gap-2 xl:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
              className={`flex min-h-11 items-center rounded-full px-3.5 text-sm font-medium transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--ink)] ${activeSection === link.href.slice(1) ? "bg-[var(--surface-2)] text-[var(--ink)]" : "text-[var(--muted)]"}`}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={cycleTheme}
            className="ml-1 flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-[var(--muted)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--ink)]"
            aria-label={`Color theme: ${theme}. Activate to change.`}
          >
            <SunDim size={18} weight="regular" aria-hidden="true" />
            <span className="capitalize">{theme}</span>
          </button>
          <div className="ml-2 text-sm"><ResumeAction /></div>
        </div>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] xl:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <List size={21} aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-[var(--line)] bg-[var(--page)] xl:hidden">
          <div className="site-shell grid gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`flex min-h-12 items-center rounded-xl px-3 font-medium hover:bg-[var(--surface)] ${activeSection === link.href.slice(1) ? "bg-[var(--surface)] text-[var(--accent-strong)]" : ""}`}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 grid gap-2 border-t border-[var(--line)] pt-4 sm:grid-cols-2">
              <button type="button" onClick={cycleTheme} className="button-secondary text-sm">
                <SunDim size={18} aria-hidden="true" />
                <span className="capitalize">{theme}</span>
              </button>
              <div className="text-sm [&_a]:w-full"><ResumeAction /></div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
