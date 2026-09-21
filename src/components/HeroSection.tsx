import { availabilityBadge, personalInfo, quickStats } from "@/lib/data";
import {
  DocumentAttachmentIcon,
  GithubIcon,
  Linkedin01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { domAnimation, LazyMotion, m, useReducedMotion } from "framer-motion";
import type { PointerEvent as ReactPointerEvent } from "react";
import HeroMeshGradient from "./HeroMeshGradient";

const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

const contactLinks = [
  {
    label: "View resume",
    href: personalInfo.resume,
    icon: DocumentAttachmentIcon,
    external: true,
    primary: true,
  },
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: Mail01Icon },
  { label: "GitHub", href: personalInfo.github, icon: GithubIcon, external: true },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: Linkedin01Icon,
    external: true,
  },
];

const focusChips = ["GraphRAG", "RAG", "Payments"];

const movePortraitReveal = (event: ReactPointerEvent<HTMLDivElement>) => {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--reveal-opacity", "1");
  event.currentTarget.style.setProperty("--reveal-x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--reveal-y", `${event.clientY - rect.top}px`);
};

const hidePortraitReveal = (event: ReactPointerEvent<HTMLDivElement>) => {
  event.currentTarget.style.setProperty("--reveal-opacity", "0");
};

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.15 : 0.75,
        ease: EASE_OUT_QUINT,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative isolate min-h-[calc(100svh-3.5rem)] overflow-hidden bg-hero-background text-hero-foreground">
        <HeroMeshGradient />

        <m.div
          className="relative mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-[1.25fr_0.75fr] md:gap-14 md:px-8 md:py-16"
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: reduceMotion ? 0 : 0.09,
            delayChildren: reduceMotion ? 0 : 0.08,
          }}
        >
          <div className="min-w-0">
            <m.div
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-panel/70 px-3.5 py-1.5 font-mono text-xs font-medium text-muted-foreground"
              variants={reveal}
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-70 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
              </span>
              {availabilityBadge}
            </m.div>

            <m.p
              className="mb-3 font-mono text-sm font-medium tracking-wide text-accent"
              variants={reveal}
            >
              {"// "}
              {personalInfo.role}
            </m.p>

            <m.h1
              className="font-display text-[clamp(2.4rem,8.5vw,4.9rem)] leading-[1.02] font-bold"
              variants={reveal}
            >
              {personalInfo.heroHeadline.split(" on ")[0]}
              <span className="text-gradient">
                {" "}
                on {personalInfo.heroHeadline.split(" on ")[1]}
              </span>
            </m.h1>

            <m.p
              className="mt-6 max-w-[58ch] text-base leading-relaxed text-muted-foreground md:text-lg"
              variants={reveal}
            >
              {personalInfo.heroDescription}
            </m.p>

            <m.div className="mt-8 flex flex-wrap gap-2.5" variants={reveal}>
              {contactLinks.map(({ label, href, icon: Icon, external, primary }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`group inline-flex min-h-11 items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    primary
                      ? "bg-accent text-white glow-accent hover:brightness-110"
                      : "border border-border bg-panel/60 text-muted-foreground hover:border-accent/50 hover:text-foreground"
                  }`}
                >
                  <HugeiconsIcon
                    icon={Icon}
                    className="h-4 w-4"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  {label}
                </a>
              ))}
            </m.div>

            <m.div
              className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-7 sm:grid-cols-4 sm:gap-x-4"
              variants={reveal}
            >
              {quickStats.slice(0, 4).map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-lg font-semibold text-accent md:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </m.div>
          </div>

          <m.div className="relative mx-auto w-52 md:w-full md:max-w-[330px]" variants={reveal}>
            <div
              className="glow-accent absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="portrait-reveal relative aspect-square overflow-hidden rounded-2xl border border-panel-border shadow-2xl shadow-black/20 dark:shadow-black/50"
              onPointerMove={movePortraitReveal}
              onPointerLeave={hidePortraitReveal}
            >
              <img
                src={personalInfo.profilePicture}
                alt={`Portrait of ${personalInfo.name}`}
                width="460"
                height="460"
                decoding="async"
                fetchPriority="high"
                draggable={false}
                className="pointer-events-none h-full w-full select-none object-cover grayscale contrast-105"
              />
              <img
                src={personalInfo.profilePicture}
                alt=""
                width="460"
                height="460"
                decoding="async"
                aria-hidden="true"
                draggable={false}
                className="portrait-reveal-color pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
              />
            </div>
            <ul
              className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5"
              aria-label="Current focus areas"
            >
              {focusChips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-panel-border bg-panel px-3 py-1 font-mono text-[11px] font-semibold whitespace-nowrap text-muted-foreground shadow-sm"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </m.div>
        </m.div>
      </section>
    </LazyMotion>
  );
}
