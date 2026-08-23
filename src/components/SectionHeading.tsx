interface SectionHeadingProps {
  children: string;
  index?: string;
}

export default function SectionHeading({ children, index }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      {index && <p className="mb-2 font-mono text-sm font-medium text-accent">{`// ${index}`}</p>}
      <h2 className="font-display text-[clamp(2.4rem,6vw,4.25rem)] leading-[1.02] font-bold">
        {children}
      </h2>
    </div>
  );
}
