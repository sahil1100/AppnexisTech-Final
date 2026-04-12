"use client";

import Image from "next/image";

/**
 * BrandLogo - Direct and simplified logo component.
 * Optimized scaling for inconsistent source assets.
 */
export default function BrandLogo({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-start transition-all duration-300 ${className}`}>
      {/* Light Theme Logo Container */}
      {/* Using extreme scaling to compensate for the large dead space in logowhitebg.png */}
      <div className="dark:hidden block relative  h-16 md:h-20 w-[160px] md:w-[200px]">
        <Image
          src="/gemini.png"
          alt="AppNexis Logo"
          fill
          priority
          className="object-contain origin-left"
          unoptimized
        />
      </div>

      {/* Dark Theme Logo Container */}
      {/* Kept large and clear as per preference */}
      <div className="hidden dark:block relative h-16 md:h-20 w-[160px] md:w-[200px]">
        <Image
          src="/logos.png"
          alt="AppNexis Logo"
          fill
          priority
          className="object-contain origin-left"
          unoptimized
        />
      </div>
    </div>
  );
}
