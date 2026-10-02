"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function StickyHero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      // Fade out over the first 40% of the hero height
      const progress = Math.min(window.scrollY / (el.offsetHeight * 0.4), 1);
      el.style.opacity = String(1 - progress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="sticky top-0 z-0 bg-[#131415] px-[25px] md:px-[50px] pt-[50px] md:pt-[100px] pb-[60px] flex flex-col gap-[40px] md:gap-[60px]"
    >
      {/* Logo — top */}
      <div className="flex flex-col gap-[5px]">
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
          className="font-mono text-[12px] tracking-[0.08em] text-white/50"
          style={{ lineHeight: "1.4em" }}
        >
          PRODUCT DESIGN &amp; BRANDING
        </span>
      </div>

      {/* Intro — bottom */}
      <p
        className="font-sans text-[24px] md:text-[36px] lg:text-[48px] text-white max-w-[1008px] font-light"
        style={{ lineHeight: "1.19em" }}
      >
        I partner with companies to turn ideas into well-designed, scalable
        digital products using design, technology, and AI.
      </p>

      {/* Fade gradient at bottom — blends into gallery sliding over */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #131415 20%, transparent 100%)" }}
      />
    </section>
  );
}
