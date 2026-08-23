import * as React from "react";
import { domAnimation, LazyMotion, m, useReducedMotion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  isLast?: boolean;
  index?: number;
  children?: React.ReactNode;
}

const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

export default function TimelineItem({
  title,
  subtitle,
  date,
  isLast = false,
  index = 0,
  children,
}: TimelineItemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={`grid gap-5 border-t border-border py-8 md:grid-cols-[190px_1fr] md:gap-10 md:py-10 ${
          isLast ? "border-b" : ""
        }`}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0.2 : 0.6,
          delay: index * 0.1,
          ease: EASE_OUT_QUINT,
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div>
          <p className="font-mono text-sm leading-relaxed font-medium text-accent-2">{date}</p>
          <span className="mt-3 block h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{title}</h3>
          <p className="mt-1 font-medium text-muted-foreground">{subtitle}</p>
          {children}
        </div>
      </m.div>
    </LazyMotion>
  );
}
