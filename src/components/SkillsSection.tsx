import { skills } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import SectionHeading from "./SectionHeading";

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-16 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <MotionWrapper>
          <SectionHeading index="02 — stack">Skills</SectionHeading>
        </MotionWrapper>

        <div className="grid gap-4 md:grid-cols-2">
          {skills.map(({ label, items, highlight }, index) => (
            <MotionWrapper
              key={label}
              delay={index * 0.04}
              className={highlight ? "md:col-span-2" : ""}
            >
              <div
                className={`h-full rounded-2xl border p-6 transition-colors duration-300 md:p-7 ${
                  highlight
                    ? "border-accent/40 bg-accent-soft"
                    : "border-panel-border bg-panel hover:border-accent/30"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {highlight && (
                    <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70 motion-reduce:animate-none" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                  )}
                  <h3
                    className={`font-mono text-xs font-semibold tracking-widest uppercase ${
                      highlight ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className={`rounded-md border px-3 py-1.5 font-display text-sm font-medium ${
                        highlight
                          ? "border-accent/30 bg-background text-foreground"
                          : "border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                      }`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
