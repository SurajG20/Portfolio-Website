import { certifications } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import SectionHeading from "./SectionHeading";

export default function AwardsSection() {
  return (
    <section id="certifications" className="scroll-mt-16 bg-background py-20 text-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <MotionWrapper>
          <SectionHeading>Certifications</SectionHeading>
        </MotionWrapper>

        <div className="divide-y divide-border border-b-2 border-border">
          {certifications.map((cert, index) => (
            <MotionWrapper key={cert.name + cert.date} delay={index * 0.04}>
              <div className="grid gap-3 py-5 md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:py-6">
                <div className="min-w-0">
                  <h3 className="text-lg font-black md:text-xl">{cert.name}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm md:justify-end">
                  <span className="font-semibold text-muted-foreground">{cert.type}</span>
                  <span className="font-semibold tabular-nums text-muted-foreground">{cert.date}</span>
                  <span className="bg-mist border border-border px-3 py-1.5 font-black text-foreground md:min-w-40 md:text-center">
                    {cert.detail}
                  </span>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
