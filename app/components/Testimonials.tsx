export default function Testimonials() {
  const reviews = [
    {
      name: "Shilpa & Gaudham",
      event: "Wedding",
      review:
        "AAVIRAA transformed our wedding into something beyond our imagination. Every detail felt luxurious and deeply personal.",
    },
    {
      name: "Preethi",
      event: "Baby Shower",
      review:
        "The floral styling was breathtaking. Every guest kept asking who designed the décor. It was simply perfect.",
    },
    {
      name: "Kavya & Arjun",
      event: "Engagement",
      review:
        "Elegant, professional and stress-free. They understood exactly what we dreamed of and brought it to life beautifully.",
    },
  ];

  return (
    <section className="bg-[#FAF7F2] py-32">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-[0.4em] text-[#C9A24D] text-sm">
            Client Love
          </p>

          <h2 className="mt-6 text-6xl font-serif text-[#0F4D46]">
            Words From
            <br />
            Beautiful Celebrations
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-500"
            >

              <div className="text-[#C9A24D] text-3xl mb-6">
                ★★★★★
              </div>

              <p className="text-gray-600 leading-8 italic">
                "{item.review}"
              </p>

              <div className="mt-10">

                <h3 className="font-serif text-2xl text-[#0F4D46]">
                  {item.name}
                </h3>

                <p className="text-[#C9A24D] uppercase tracking-[0.25em] text-xs mt-2">
                  {item.event}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}