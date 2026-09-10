import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { personalInfo } from "@/data/portfolio";

export function ResumeAction({ variant = "primary" }: { variant?: "primary" | "secondary" }) {
  const className = variant === "primary" ? "button-primary" : "button-secondary";

  if (!personalInfo.resumeAvailable) {
    return (
      <span
        className={`${className} cursor-not-allowed opacity-65`}
        aria-label="Resume download unavailable until the final PDF is added"
        title="Add the final resume PDF to enable this download"
      >
        <DownloadSimple size={18} aria-hidden="true" />
        Resume pending
      </span>
    );
  }

  return (
    <a href={personalInfo.resume} download className={className}>
      <DownloadSimple size={18} aria-hidden="true" />
      Download resume
    </a>
  );
}
