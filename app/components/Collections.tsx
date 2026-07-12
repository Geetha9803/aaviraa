import Image from "next/image";

const collections = [
  {
    title: "Engagement Decor",
    category: "ENGAGEMENT",
    image: "/images/engagement-decor.jpg",
    description:
      "A beautifully crafted engagement stage featuring elegant floral décor, luxurious seating, and timeless South Indian styling.",
  },
];

export default function Collections() {
  return (
    <section className="bg-[#F8F5F0] py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[0.4em] text-[#C9A24D] text-sm">
            Signature Collections
          </p>

          <h2 className="mt-6 text-5xl font-serif text-[#0F4D46]">
            Our Collections
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 leading-8">
            Explore a glimpse of our thoughtfully curated celebrations,
            handcrafted with elegance, tradition, and timeless beauty.
          </p>
        </div>

        {/* Collection Cards */}
        <div className="mt-12 flex flex-wrap justify-center gap-10">

          {collections.map((item) => (
            <div
              key={item.title}
              className="group w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-[360px] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              {/* Content */}
              <div className="p-8">

                <p className="uppercase tracking-[0.3em] text-xs text-[#C9A24D] font-medium">
                  {item.category}
                </p>

                <h3 className="mt-3 text-3xl font-serif text-[#0F4D46]">
                  {item.title}
                </h3>

                <p className="mt-5 text-gray-600 leading-8">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}