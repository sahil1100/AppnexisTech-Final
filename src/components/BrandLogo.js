import Image from "next/image";

const sizeStyles = {
  navbar: {
    wrapper: "gap-3 sm:gap-3.5",
    icon: "h-10 w-10 sm:h-11 sm:w-11",
    text: "text-[1.95rem] sm:text-[2.2rem]",
  },
  footer: {
    wrapper: "gap-2.5",
    icon: "h-9 w-9",
    text: "text-[1.75rem] sm:text-[1.95rem]",
  },
};

export default function BrandLogo({ theme = "dark", size = "navbar" }) {
  const styles = sizeStyles[size] ?? sizeStyles.navbar;
  const appTextColor = theme === "dark" ? "text-white" : "text-[#111827]";

  return (
    <div className="inline-flex items-center gap-3">
  
  {/* Logo Icon */}
  {/* <div className="relative w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] shrink-0">
    <Image
      src="/IMG_9561.PNG"
      alt="AppNexis icon"
      fill
      priority
      className="object-contain"
    />
  </div> */}

  {/* Logo Text */}
  <div className="flex items-end leading-none">
    <span className={`${appTextColor} text-[32px] sm:text-[36px] font-black tracking-[-0.045em]`}>
      App
    </span>
    <span className="text-[32px] sm:text-[36px] font-black tracking-[-0.04em] bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 bg-clip-text text-transparent">
      nexis
    </span>
  </div>

</div>
  );
}
