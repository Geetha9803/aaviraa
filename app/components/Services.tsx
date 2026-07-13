import Image from "next/image";

const services = [
  {
    title: "Luxury Weddings",
    image: "/images/hero.jpg",
    description:
      "Elegant South Indian weddings designed with timeless sophistication.",
  },
  {
    title: "Engagement",
    image: "/images/engagement-1.jpg",
    description:
      "Beautiful beginnings crafted into unforgettable memories.",
  },
  {
    title: "Housewarming",
    image: "/images/housewarming-1.jpg",
    description:
      "Warm celebrations styled with elegance and tradition.",
  },
  {
    title: "Baby Shower",
    image: "/images/baby-shower.jpg",
    description:
      "Sweet celebrations for life's most precious moments.",
  },
  {
    title: "Wedding Garland",
    image: "/images/wedding-floral-garland-1.jpg",
    description:
      "Premium floral artistry handcrafted for every ceremony.",
  },
  {
    title: "Reception Garland",
    image: "/images/reception-garland.jpg",
    description:
      "Elegant handcrafted garlands for unforgettable receptions.",
  },
];

export default function Services() {
  return (
    <section 
    id="services"
    className="bg-[#F8F5F0] py-28 px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-[#C9A24D]">
            Signature Celebrations
          </p>

          <h2 className="mt-5 text-5xl font-serif text-[#0F4D46]">
            Crafted For Every
            <br />
            Beautiful Occasion
          </h2>
        </div>

        <div className="grid gap-10 mt-20 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition duration-500" />

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-serif text-[#0F4D46]">
                  {service.title}
                </h3>


                <p className="mt-4 leading-8 text-gray-600">
                  {service.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}