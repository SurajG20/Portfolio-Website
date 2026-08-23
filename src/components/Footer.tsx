import { personalInfo } from "@/lib/data";
import { GithubIcon, Linkedin01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-panel py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              Let's build something <span className="text-gradient">intelligent</span>.
            </p>
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              {personalInfo.name} · {personalInfo.role} · {personalInfo.location}
            </p>
            <p className="mt-5 font-mono text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} — built with Astro, React, and Tailwind
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
              aria-label="Email"
            >
              <HugeiconsIcon
                icon={Mail01Icon}
                className="h-4 w-4"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
              aria-label="GitHub"
            >
              <HugeiconsIcon
                icon={GithubIcon}
                className="h-4 w-4"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
              aria-label="LinkedIn"
            >
              <HugeiconsIcon
                icon={Linkedin01Icon}
                className="h-4 w-4"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
