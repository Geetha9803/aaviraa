import {
  Sparkles,
  Flower2,
  Landmark,
  Clock3,
  Gem,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Bespoke Designs",
    description:
      "Designed around your traditions, style, and vision.",
  },
  {
    icon: Flower2,
    title: "Premium Floral Design",
    description:
      "Elegant floral arrangements crafted with fresh blooms and timeless palettes.",
  },
  {
    icon: Landmark,
    title: "South Indian Heritage",
    description:
      "Traditional South Indian décor with a refined modern touch.",
  },
  {
    icon: Clock3,
    title: "Flawless Execution",
    description:
      "Every detail is completed perfectly before your celebration begins.",
  },
  {
    icon: Gem,
    title: "Luxury Experience",
    description:
      "A seamless premium experience from consultation to celebration.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description:
      "Every celebration is thoughtfully tailored just for you.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.45em] text-[#C9A24D] text-sm">
            Why Choose AAVIRAA
          </p>

          <h2 className="mt-5 text-5xl font-serif text-[#0F4D46] leading-tight">
            Crafted With Passion,
            <br />
            Delivered With Elegance
          </h2>

        </div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-[#FBF8F3]
                  rounded-3xl
                  border border-[#EFE5D5]
                  px-8
                  py-8
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-500
                "
              >

                {/* Icon */}

                <div className="w-14 h-14 rounded-full bg-[#F8E9C9] flex items-center justify-center mb-6">

                  <Icon
                    size={24}
                    className="text-[#C9A24D] transition-transform duration-300 group-hover:scale-110"
                  />

                </div>

                {/* Title */}

                <h3 className="font-serif text-2xl font-semibold text-[#0F4D46] leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-gray-600 text-base leading-7">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}