import Image from "next/image";
import Gallery from "@/components/Gallery";
import FadeUp from "@/components/FadeUp";
import StickyHero from "@/components/StickyHero";

const galleryImages = [
  { src: "/assets/pcM67Y0M0FscNIgmr72HCZP4iXU.jpg", naturalWidth: 650, naturalHeight: 499 },
  { src: "/assets/9ORN9E12jdvNhWlEYRwTvvMT4.jpg",   naturalWidth: 507, naturalHeight: 410 },
  { src: "/assets/RiFrmlZFCsL1zT5EfPPWmXC8eyc.jpg",  naturalWidth: 507, naturalHeight: 410 },
  { src: "/assets/L89Z27TrPeC9ttlx0FMDDd8pA0.jpg",   naturalWidth: 507, naturalHeight: 410 },
  { src: "/assets/HKr4aPugqsZa9PsJd9U7KxwGy0.jpg",   naturalWidth: 507, naturalHeight: 410 },
  { src: "/assets/febMKokqtysPEYzhY6RY66ba0.jpg",     naturalWidth: 650, naturalHeight: 424 },
  { src: "/assets/OE3EBJWscrAu2hSkr2LonHsYSEo.jpg",  naturalWidth: 485, naturalHeight: 424 },
  { src: "/assets/1wkn8sRhGD68SebC3Jqc4ERqg.jpg",    naturalWidth: 507, naturalHeight: 410 },
  { src: "/assets/idQVLZVpewTpmNXcEkRpwPGNI.jpg",    naturalWidth: 507, naturalHeight: 410 },
  { src: "/assets/o8BwMlTbYxpa9ZG5OGPCIoCezkg.jpg",  naturalWidth: 507, naturalHeight: 410 },
  { src: "/assets/qWQFgDjuoE5WPhtIMRt6kSNavM.jpg",   naturalWidth: 563, naturalHeight: 410 },
  { src: "/assets/uURvuooMgmvyx1QEE91fbbaZcMs.gif",  naturalWidth: 570, naturalHeight: 424 },
];

const capabilities = [
  "Digital Product Design",
  "Branding and Visual Identity",
  "Websites & Ecommerce",
];

export default function Home() {
  return (
    <main>
      {/* Sticky hero — fades out on scroll, gallery slides over it */}
      <StickyHero />

      {/* Scrolling content — sits on top of sticky hero */}
      <div className="relative z-10">
        <Gallery images={galleryImages} />

        <FadeUp delay={0}>
          <section className="bg-[#131415] px-[25px] md:px-[50px] py-[100px]">
            <span
              className="font-mono text-[12px] tracking-[0.08em] text-white/50 mb-[20px] block"
              style={{ lineHeight: "1.4em" }}
            >
              CAPABILITIES
            </span>
            <div className="flex flex-col max-w-[700px]">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-[10px] py-[20px]"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <span
                    className="font-sans text-[18px] text-white"
                    style={{ lineHeight: "1.2em" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        <FadeUp delay={150}>
          <section className="py-[50px] bg-[#131415]">
            <span
              className="font-mono text-[12px] tracking-[0.08em] text-white/50 px-[25px] md:px-[50px] mb-[30px] block"
              style={{ lineHeight: "1.4em" }}
            >
              WE PARTNER WITH INDUSTRY LEADERS
            </span>
            <div className="overflow-hidden mt-[20px]">
              <div className="marquee-track-reverse opacity-50">
                <Image
                  src="/assets/rDbxRh2dJbaUUoEabNpkm9gO3bs.svg"
                  alt="Partner logos"
                  width={2219}
                  height={105}
                  className="invert flex-shrink-0"
                />
                <Image
                  src="/assets/rDbxRh2dJbaUUoEabNpkm9gO3bs.svg"
                  alt=""
                  width={2219}
                  height={105}
                  className="invert flex-shrink-0"
                  aria-hidden
                />
              </div>
            </div>
          </section>
        </FadeUp>
      </div>
    </main>
  );
}
