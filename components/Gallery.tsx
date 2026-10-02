"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  naturalWidth: number;
  naturalHeight: number;
};

const SCROLL_SPEED_MOBILE = 1.95; // 1.5 * 1.3
const SCROLL_SPEED_DESKTOP = 1.5;

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const animRef = useRef<number>(undefined);

  // Autoplay: scroll right continuously, loop seamlessly
  const tick = useCallback(() => {
    const el = scrollRef.current;
    if (el && !isPaused.current) {
      const speed = window.innerWidth < 768 ? SCROLL_SPEED_MOBILE : SCROLL_SPEED_DESKTOP;
      el.scrollLeft += speed;
      // Reset to start of first copy once we've scrolled through half
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    }
    animRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [tick]);

  // Drag handlers
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    isPaused.current = true;
    startX.current = e.clientX;
    startScrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const dx = e.clientX - startX.current;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = startScrollLeft.current - dx;
    }
  };

  const onPointerUp = () => {
    isDragging.current = false;
    isPaused.current = false;
  };

  // Duplicate images for seamless loop
  const loopedImages = [...images, ...images];

  return (
    <section className="py-[10px] bg-[#131415]">
      <div
        ref={scrollRef}
        className="flex gap-[10px] overflow-x-auto scrollbar-hide px-[25px] md:px-[50px] cursor-grab active:cursor-grabbing select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {loopedImages.map((img, i) => (
          <div key={i} className="flex-shrink-0">
            <Image
              src={img.src}
              alt={i < images.length ? `Project ${i + 1}` : ""}
              width={img.naturalWidth}
              height={img.naturalHeight}
              className="h-[373px] md:h-[533px] w-auto block rounded-[12px]"
              unoptimized={img.src.endsWith(".gif")}
              draggable={false}
              aria-hidden={i >= images.length}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
