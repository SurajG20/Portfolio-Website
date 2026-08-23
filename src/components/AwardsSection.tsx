import { certifications } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import SectionHeading from "./SectionHeading";

export default function AwardsSection() {
  return (
    <section id="certifications" className="scroll-mt-16 bg-background pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <MotionWrapper>
          <SectionHeading index="03 — credentials">Certifications</SectionHeading>
        </MotionWrapper>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <MotionWrapper key={cert.name + cert.date} delay={index * 0.04}>
              <div className="h-full rounded-2xl border border-panel-border bg-panel p-6 transition-colors duration-300 hover:border-accent/30 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg leading-snug font-semibold md:text-xl">{cert.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs font-semibold text-accent tabular-nums">
                    {cert.detail}
                  </span>
                </div>
                <p className="mt-5 font-mono text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {cert.type} · {cert.date}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
