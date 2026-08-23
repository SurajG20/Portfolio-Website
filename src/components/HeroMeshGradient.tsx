import { useEffect, useRef } from "react";

export default function HeroMeshGradient() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!el || reduceMotion) return;

    const blobs = el.querySelectorAll<HTMLDivElement>("[data-blob]");
    let raf: number;
    let start = Date.now();

    const animate = () => {
      const t = (Date.now() - start) / 1000;
      blobs.forEach((blob, i) => {
        const dx = Math.sin(t * 0.03 + i * 1.2) * 3;
        const dy = Math.cos(t * 0.04 + i * 0.8) * 3;
        blob.style.translate = `${dx}px ${dy}px`;
      });
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="bg-grid-faint absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]" />
      <div
        data-blob
        className="absolute -top-[12%] -left-[8%] h-[55%] w-[48%] rounded-full opacity-25 blur-3xl dark:opacity-20"
        style={{
          background: "radial-gradient(ellipse, var(--accent), transparent 70%)",
        }}
      />
      <div
        data-blob
        className="absolute -right-[6%] -bottom-[14%] h-[50%] w-[42%] rounded-full opacity-15 blur-3xl dark:opacity-15"
        style={{
          background: "radial-gradient(ellipse, var(--accent-2), transparent 70%)",
        }}
      />
      <div
        data-blob
        className="absolute top-[22%] left-[42%] h-[38%] w-[32%] rounded-full opacity-10 blur-3xl dark:opacity-10"
        style={{
          background: "radial-gradient(ellipse, var(--accent-2), transparent 70%)",
        }}
      />
    </div>
  );
}
