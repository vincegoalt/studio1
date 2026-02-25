import Link from "next/link";

interface LogoProps {
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", light = false, size = "md" }: LogoProps) {
  const color = light ? "text-white" : "text-charcoal";

  const sizeMap = {
    sm: {
      text: "text-lg",
      circle: "w-7 h-7 border-[2px]",
      num: "text-sm",
      gap: "gap-1.5",
      tracking: "tracking-[0.18em]",
    },
    md: {
      text: "text-2xl",
      circle: "w-9 h-9 border-[2.5px]",
      num: "text-lg",
      gap: "gap-2",
      tracking: "tracking-[0.18em]",
    },
    lg: {
      text: "text-3xl",
      circle: "w-11 h-11 border-[3px]",
      num: "text-xl",
      gap: "gap-2.5",
      tracking: "tracking-[0.18em]",
    },
  };

  const s = sizeMap[size];

  return (
    <Link
      href="/"
      className={`flex items-center ${s.gap} ${color} ${className}`}
      aria-label="Studio 1 — Home"
    >
      <span
        className={`font-logo font-bold ${s.text} ${s.tracking} lowercase leading-none`}
      >
        studio
      </span>
      <span
        className={`flex items-center justify-center ${s.circle} border-current rounded-full leading-none`}
      >
        <span className={`font-logo font-bold ${s.num} leading-none`}>
          1
        </span>
      </span>
    </Link>
  );
}
