import Image from "next/image";

export default function StickyNav() {
  return (
    <header
      className="fixed top-0 left-0 z-50 px-[25px] md:px-[50px] pt-[30px] md:pt-[40px] flex flex-col gap-[5px] pointer-events-none"
      style={{ mixBlendMode: "difference" }}
    >
      <div className="w-[142px] h-[41px] md:w-[235px] md:h-[68px] relative">
        <Image
          src="/assets/SZNhRjkZ1taYTDTSeRL6ldcAMY.svg"
          alt="Studio logo"
          fill
          className="object-contain object-left invert"
          priority
        />
      </div>
      <span
        className="font-mono text-[12px] tracking-[0.08em] text-white"
        style={{ lineHeight: "1.4em" }}
      >
        PRODUCT DESIGN &amp; BRANDING
      </span>
    </header>
  );
}
