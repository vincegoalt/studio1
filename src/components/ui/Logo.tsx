import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { width: 160, height: 32 },
  md: { width: 200, height: 40 },
  lg: { width: 275, height: 55 },
};

export function Logo({ className = "", light = false, size = "md" }: LogoProps) {
  const { width, height } = sizeMap[size];
  const src = light ? "/images/logo-studio1-white.png" : "/images/logo-studio1.png";

  return (
    <Link
      href="/"
      className={`flex-shrink-0 ${className}`}
      aria-label="Studio 1 — Home"
    >
      <Image
        src={src}
        alt="Studio 1 — Barre, TRX, Pilates, Yoga in Tulsa"
        width={width}
        height={height}
        className={`h-[${height}px] w-auto`}
        style={{ height, width: "auto" }}
        priority
      />
    </Link>
  );
}
