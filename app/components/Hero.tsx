import Image from "next/image";

export default function Hero() {
  return (
    <section 
    id="home"
    className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Luxury Wedding"
        fill
        priority
        className="object-cover brightness-90"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        <p className="uppercase tracking-[0.45em] text-[#D6B15E] text-sm md:text-base mb-8">
          Where Dreams Bloom
        </p>

        <h1
          className="font-serif text-white text-6xl md:text-8xl tracking-[0.15em]"
          style={{
            textShadow: "0 5px 20px rgba(0,0,0,0.55)",
          }}
        >
          AAVIRAA
        </h1>

        <p
          className="mt-8 text-[#E5C36A] uppercase tracking-[0.35em] text-lg md:text-xl"
          style={{
            textShadow: "0 2px 12px rgba(0,0,0,.45)",
          }}
        >
          Crafting Timeless Celebrations
        </p>

        <button className="mt-12 px-10 py-4 bg-[#C9A24D] rounded-full text-black font-medium text-lg hover:bg-[#D6B15E] transition duration-500 shadow-xl hover:scale-105">
          Begin Your Journey
        </button>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white animate-bounce">

        <p className="tracking-[0.35em] text-xs uppercase">
          Scroll
        </p>

        <div className="text-3xl mt-2">
          ↓
        </div>

      </div>

    </section>
  );
}