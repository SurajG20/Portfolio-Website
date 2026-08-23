import { selectedWork } from "@/lib/data";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import MotionWrapper from "./MotionWrapper";
import SectionHeading from "./SectionHeading";

function GraphMindArt() {
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" role="presentation" focusable="false">
      {[
        [80, 60, 200, 120],
        [200, 120, 320, 70],
        [200, 120, 150, 190],
        [200, 120, 300, 180],
        [80, 60, 40, 130],
        [320, 70, 370, 140],
        [150, 190, 90, 210],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={`e${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          className="stroke-accent/35 dark:stroke-accent/40"
          strokeWidth="1.5"
        />
      ))}
      {[
        [80, 60, 10],
        [320, 70, 8],
        [150, 190, 9],
        [300, 180, 7],
        [40, 130, 6],
        [370, 140, 6],
        [90, 210, 5],
      ].map(([cx, cy, r], i) => (
        <circle
          key={`n${i}`}
          cx={cx}
          cy={cy}
          r={r}
          className={i === 0 ? "fill-accent glow-accent" : i % 2 ? "fill-accent-2" : "fill-accent"}
          opacity={i === 0 ? undefined : 0.85}
        />
      ))}
      <g>
        <rect
          x="236"
          y="96"
          width="128"
          height="30"
          rx="15"
          className="fill-panel stroke-accent-2/60"
          strokeWidth="1.5"
        />
        <text
          x="300"
          y="115"
          textAnchor="middle"
          className="fill-muted-foreground font-mono"
          fontSize="11"
        >
          how does auth work?
        </text>
      </g>
      <text x="20" y="228" className="fill-muted-foreground font-mono" fontSize="11">
        graph × vector retrieval
      </text>
    </svg>
  );
}

function CalorieTrackerArt() {
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" role="presentation" focusable="false">
      <rect x="24" y="52" width="168" height="58" rx="14" className="fill-accent" opacity="0.9" />
      <polygon points="44,110 62,110 48,126" className="fill-accent" opacity="0.9" />
      <text x="42" y="78" className="fill-white font-mono" fontSize="13">
        "2 eggs + toast,"
      </text>
      <text x="42" y="97" className="fill-white font-mono" fontSize="13">
        "and black coffee"
      </text>
      <g>
        {[0, 12, 24].map((dx) => (
          <line
            key={dx}
            x1={214 + dx}
            y1="81"
            x2={224 + dx}
            y2="81"
            className="stroke-accent-2"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity={0.5 + Number(dx !== 0) * 0.3 + Number(dx === 24) * 0.2}
          />
        ))}
      </g>
      <g>
        <rect
          x="252"
          y="34"
          width="124"
          height="132"
          rx="12"
          className="fill-panel stroke-border"
          strokeWidth="1.5"
        />
        <circle cx="266" cy="48" r="3" className="fill-accent" />
        <circle cx="276" cy="48" r="3" className="fill-accent-2" />
        <circle cx="286" cy="48" r="3" className="fill-muted-foreground" />
        <text x="264" y="76" className="fill-accent font-mono" fontSize="12">
          {"{ calories:"}
        </text>
        <text x="264" y="94" className="fill-foreground font-mono" fontSize="12">
          {"  320,"}
        </text>
        <text x="264" y="112" className="fill-accent font-mono" fontSize="12">
          {"  protein:"}
        </text>
        <text x="264" y="130" className="fill-foreground font-mono" fontSize="12">
          {'  "18g" }'}
        </text>
      </g>
      <text x="24" y="212" className="fill-muted-foreground font-mono" fontSize="11">
        natural language → structured data
      </text>
    </svg>
  );
}

function CustodiaArt() {
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" role="presentation" focusable="false">
      {[
        [36, "LOCKED", false],
        [152, "MILESTONE", true],
        [268, "RELEASED", true],
      ].map(([x, label, done], i) => (
        <g key={String(label)}>
          <rect
            x={Number(x)}
            y="72"
            width="96"
            height="64"
            rx="10"
            className={done ? "fill-accent-soft stroke-accent" : "fill-panel stroke-border"}
            strokeWidth="1.5"
          />
          <text
            x={Number(x) + 48}
            y="109"
            textAnchor="middle"
            className={done ? "fill-accent font-mono" : "fill-muted-foreground font-mono"}
            fontSize="11"
          >
            {String(label)}
          </text>
          {i < 2 && (
            <g>
              <line
                x1={Number(x) + 96}
                y1="104"
                x2={Number(x) + 116}
                y2="104"
                className="stroke-accent-2"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <polygon
                points={`${Number(x) + 116},99 ${Number(x) + 116},109 ${Number(x) + 124},104`}
                className="fill-accent-2"
              />
            </g>
          )}
        </g>
      ))}
      {[
        [56, 170],
        [88, 178],
        [72, 186],
        [296, 170],
        [328, 178],
        [312, 186],
      ].map(([cx, cy], i) => (
        <rect
          key={`b${i}`}
          x={(cx ?? 0) - 5}
          y={(cy ?? 0) - 5}
          width="10"
          height="10"
          rx="2"
          transform={`rotate(45 ${cx} ${cy})`}
          className={i % 2 ? "fill-accent-2/50" : "fill-accent/40"}
        />
      ))}
      <text x="36" y="222" className="fill-muted-foreground font-mono" fontSize="11">
        smart-contract escrow · automated release
      </text>
    </svg>
  );
}

function ProjectArtwork({ index }: { index: number }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-panel-border bg-panel transition-shadow duration-500 hover:glow-accent">
      <div className="bg-grid-faint absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative aspect-video p-4 md:p-6">
        {index === 0 ? <GraphMindArt /> : index === 1 ? <CalorieTrackerArt /> : <CustodiaArt />}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="scroll-mt-16 bg-background pb-20 pt-16 text-foreground md:pb-28 md:pt-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <MotionWrapper>
          <SectionHeading index="00 — selected work">Projects</SectionHeading>
        </MotionWrapper>

        <MotionWrapper>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            AI systems and infrastructure I have designed and shipped — open-source on GitHub.
          </p>
        </MotionWrapper>

        <div className="space-y-16 md:space-y-24">
          {selectedWork.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.08}>
              <article className="grid items-center gap-8 md:grid-cols-2 md:items-start md:gap-14">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className={`block ${index % 2 ? "md:order-2" : ""}`}
                >
                  <ProjectArtwork index={index} />
                </a>

                <div className={index % 2 ? "md:order-1" : ""}>
                  <p className="mb-3 font-mono text-sm font-medium tracking-wide text-accent-2">
                    {project.context}
                  </p>
                  <h3 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.02] font-bold">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                    {project.description.map((description) => (
                      <li key={description} className="flex gap-3 leading-relaxed">
                        <span
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-accent"
                          aria-hidden="true"
                        />
                        {description}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
                    {project.stack.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full border border-border px-3 py-1 font-mono text-xs font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-accent/40 px-4 py-2.5 text-sm font-semibold text-accent transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-white"
                  >
                    View repository
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      className="h-4 w-4"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
