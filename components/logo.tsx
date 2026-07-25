import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  compact?: boolean;
  light?: boolean;
};

export function Logo({ compact = false, light = false }: LogoProps) {
  return (
    <Link href="/" className={`brand-logo ${compact ? "brand-logo--compact" : ""}`} aria-label="Mavera Business Group home">
      <span className="brand-logo__mark" aria-hidden="true">
        <svg viewBox="0 0 120 74" fill="none">
          <path d="M13 10V61L43 25L60 45L77 25L107 61V10" stroke={light ? "#F5F5F3" : "#D1D2D4"} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" opacity=".95" />
          <path d="M13 10V61L43 25L60 45L77 25L107 61V10" stroke="#FCB040" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {!compact && (
        <span className="brand-logo__wordmark">
          <strong>MAVERA</strong>
          <small>BUSINESS GROUP</small>
        </span>
      )}
    </Link>
  );
}

export function CoffeeLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/mavera-coffee-house.svg"
      alt="Mavera Coffee House — member of Mavera Business Group"
      width={760}
      height={420}
      className={className}
      priority
    />
  );
}
