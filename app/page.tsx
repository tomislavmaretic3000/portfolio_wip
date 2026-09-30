import Image from "next/image";
import Gallery from "@/components/Gallery";

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
      {/* 1. Logo ─────────────────────────────────────────────────── */}
      <section className="bg-[#131415] px-[50px] pt-[100px] pb-[50px]">
        <div className="flex flex-col gap-[5px]">
          <div className="w-[235px] h-[68px] relative">
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
      </section>

      {/* 2. Intro ────────────────────────────────────────────────── */}
      <section className="bg-[#131415] px-[50px] pb-[100px]">
        <p
          className="font-sans text-[32px] text-white max-w-[840px] font-light"
          style={{ lineHeight: "1.19em" }}
        >
          I partner with companies to figure out what to build, how it should
          work and look, and turn ideas into well-designed, scalable digital
          products using design, technology, and AI.
        </p>
      </section>

      {/* 3. Image carousel ───────────────────────────────────────── */}
      <Gallery images={galleryImages} />

      {/* 4. Capabilities ─────────────────────────────────────────── */}
      <section className="bg-[#131415] px-[50px] py-[100px]">
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

      {/* 5. Clients ──────────────────────────────────────────────── */}
      <section className="py-[50px]">
        <span
          className="font-mono text-[12px] tracking-[0.08em] text-white/50 px-[50px] mb-[30px] block"
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
    </main>
  );
}
