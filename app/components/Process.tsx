export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Dream Together",
      description:
        "We begin by understanding your vision, traditions and celebration goals.",
    },
    {
      number: "02",
      title: "Design Beautifully",
      description:
        "Every colour palette, floral arrangement and décor element is thoughtfully curated.",
    },
    {
      number: "03",
      title: "Craft With Care",
      description:
        "Our team handcrafts every detail with precision, elegance and passion.",
    },
    {
      number: "04",
      title: "Celebrate Joyfully",
      description:
        "Relax and enjoy every unforgettable moment while we bring your celebration to life.",
    },
  ];

  return (
    <section className="pt-16 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] text-[#C9A24D] text-sm">
            Our Process
          </p>

          <h2 className="mt-6 text-6xl font-serif text-[#0F4D46]">
            Every Dream Begins
            <br />
            With A Conversation
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {steps.map((step) => (

            <div
              key={step.number}
              className="relative text-center transition-all duration-500 hover:-translate-y-2"
            >

              <div className="text-7xl font-serif text-[#C9A24D] opacity-15 mb-6">
                {step.number}
              </div>

              <h3 className="text-4xl font-serif text-[#0F4D46] mb-5">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {step.description}
              </p>

              {step.number !== "04" && (
                <div className="hidden lg:block absolute top-10 -right-8 w-16 border-t border-[#E5D7B8]" />
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}