import { logoText } from "@/lib/data";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

export default function Logo({ onClick, className, ...props }: LogoProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "cursor-pointer border max-w-fit px-2 py-1 rounded-md text-sm font-medium",
        "transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        className
      )}
      {...props}
    >
      {logoText}
    </button>
  );
}
