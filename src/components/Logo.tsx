"use client";

import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <div
      className={`relative flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logos/RB_Holdings_Logo.webp"
        alt="R&B Holdings Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
