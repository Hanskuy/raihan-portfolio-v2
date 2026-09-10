import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Raihan Nur Ramadhan Sundana | Software Developer & Cybersecurity",
  description:
    "Portfolio of Raihan Nur Ramadhan Sundana, a Computer Engineering graduate from Telkom University with experience in full stack development, cybersecurity, malware analysis, and machine learning.",
  openGraph: {
    title: "Raihan Nur Ramadhan Sundana | Software Developer & Cybersecurity",
    description:
      "Computer Engineering graduate with full stack internship experience and cybersecurity research in malware analysis.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raihan Nur Ramadhan Sundana | Portfolio",
    description:
      "Software development, cybersecurity, malware analysis, and machine-learning research.",
  },
};

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem('theme');
    const dark = stored === 'dark' || (!stored && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.dataset.theme = stored || 'system';
  } catch (_) {}
})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script>{themeScript}</script>
      </head>
      <body>{children}</body>
    </html>
  );
}
