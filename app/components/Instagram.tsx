import Image from "next/image";

const images = [
  "/images/hero1.jpg",
  "/images/engagement-2.jpg",
  "/images/housewarming-2.jpg",
  "/images/baby-shower.jpg",
  "/images/Wedding-garland.jpg",
  "/images/reception-garland.jpg",
];

export default function Instagram() {
  return (
    <section 
    id="gallery"
    className="bg-white py-32">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-[0.4em] text-[#C9A24D] text-sm">
            Follow Our Journey
          </p>

          <h2 className="mt-6 text-6xl font-serif text-[#0F4D46]">
            Every Celebration
            <br />
            Tells A New Story
          </h2>

          <p className="mt-8 text-gray-500 text-lg max-w-2xl mx-auto leading-8">
            A glimpse into the beautiful celebrations we thoughtfully create,
            one unforgettable moment at a time.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {images.map((img, index) => (

            <div
              key={index}
              className="relative overflow-hidden rounded-3xl group cursor-pointer shadow-xl"
            >

              <Image
                src={img}
                alt="Instagram"
                width={600}
                height={700}
                className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-[#0F4D46]/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                <div className="text-center">

                  <p className="text-white text-3xl">
                    ✿
                  </p>

                  <p className="mt-4 text-white tracking-[0.3em] uppercase text-sm">
                    View Celebration
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="text-center mt-16">

          <button className="border border-[#0F4D46] text-[#0F4D46] px-8 py-4 rounded-full hover:bg-[#0F4D46] hover:text-white transition duration-300">
            Follow @aaviraa_events
          </button>

        </div>

      </div>

    </section>
  );
}