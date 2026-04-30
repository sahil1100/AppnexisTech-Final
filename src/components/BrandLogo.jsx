/**
 * BrandLogo - Direct and simplified logo component.
 * Optimized scaling for inconsistent source assets.
 */
export default function BrandLogo({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-start transition-all duration-300 ${className}`}>
      {/* Light Theme Logo Container */}
      <div className="dark:hidden block relative h-16 md:h-20 w-[160px] md:w-[200px]">
        <img
          src="/gemini.png"
          alt="AppNexis Logo"
          className="w-full h-full object-contain origin-left"
        />
      </div>

      {/* Dark Theme Logo Container */}
      <div className="hidden dark:block relative h-16 md:h-20 w-[160px] md:w-[200px]">
        <img
          src="/logos.png"
          alt="AppNexis Logo"
          className="w-full h-full object-contain origin-left"
        />
      </div>
    </div>
  );
}
