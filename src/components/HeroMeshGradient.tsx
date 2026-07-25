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
      <div
        data-blob
        className="absolute -left-[10%] -top-[10%] h-[60%] w-[50%] rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(ellipse, #1f6feb, transparent 70%)",
        }}
      />
      <div
        data-blob
        className="absolute -bottom-[15%] -right-[5%] h-[55%] w-[45%] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(ellipse, #1f6feb, transparent 70%)",
        }}
      />
      <div
        data-blob
        className="absolute left-[40%] top-[20%] h-[40%] w-[35%] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(ellipse, #58a6ff, transparent 70%)",
        }}
      />
    </div>
  );
}
