"use client";

import { useEffect, useRef } from "react";

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
      className="sticky top-0 z-0 bg-[#131415] px-[25px] md:px-[50px] pt-[120px] md:pt-[160px] pb-[60px] flex flex-col"
    >
      <p
        className="font-sans text-[24px] md:text-[36px] lg:text-[48px] text-white max-w-[1008px] font-light"
        style={{ lineHeight: "1.19em" }}
      >
        I partner with companies to turn ideas into well-designed, scalable
        digital products using design, technology, and AI.
      </p>


    </section>
  );
}
