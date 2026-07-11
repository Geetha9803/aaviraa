import Image from "next/image";

export default function Story() {
  return (
    <section 
    id="story"
    className="bg-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}

          <div className="relative overflow-hidden rounded-3xl shadow-2xl group">

            <Image
              src="/images/contact-bg.jpg"
              alt="AAVIRAA Story"
              width={620}
              height={900}
              className="object-cover w-full h-[620px] transition-all duration-700 group-hover:scale-105"
            />

            {/* Soft Luxury Overlay */}

            <div className="absolute inset-0 bg-[#0F4D46]/10"></div>

          </div>

          {/* Right Content */}

          <div className="max-w-xl">

            <p className="uppercase tracking-[0.4em] text-[#C9A24D] text-sm">
              Our Story
            </p>

            <h2 className="mt-5 text-5xl lg:text-6xl font-serif text-[#0F4D46] leading-tight">
              Where Tradition
              <br />
              Meets Timeless Elegance
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-8">
              At <strong>AAVIRAA</strong>, we believe every celebration
              deserves to feel timeless, personal, and unforgettable.
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              Whether it's a grand South Indian wedding,
              an intimate engagement,
              a joyful baby shower,
              or a warm housewarming,
              we thoughtfully design every celebration
              to reflect your traditions,
              your personality,
              and your dreams.
            </p>

            <p className="mt-6 text-gray-600 text-lg italic leading-8">
              Every flower.
              <br />
              Every colour palette.
              <br />
              Every handcrafted detail.
            </p>

            {/* Quote */}

            <div className="mt-10 pt-6 border-t border-[#E8DFCF]">

              <p className="text-[#0F4D46] text-2xl italic font-serif leading-relaxed">
                "Because memories deserve beautiful beginnings."
              </p>

            </div>

            {/* CTA */}

            <div className="mt-10 mb-6">

              <button className="bg-[#C9A24D] hover:bg-[#B58E3B] text-white px-9 py-4 rounded-full font-medium tracking-wide transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105">
                Explore Our Gallery
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}