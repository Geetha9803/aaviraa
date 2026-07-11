import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactBanner() {
  return (
    <section 
    id="contact"
    className="relative overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.jpg"
          alt="Luxury Floral Decoration"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Luxury Overlay */}
        <div className="absolute inset-0 bg-[#0F4D46]/60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8 pt-40 pb-32">

        <div className="max-w-2xl ml-auto text-white">

          <p className="uppercase tracking-[0.45em] text-[#D9B15A] text-sm mb-6">
            Let's Create Something Beautiful
          </p>

          <h2 className="font-serif text-6xl lg:text-7xl leading-tight">
            Your Dream Celebration
            <br />
            Starts here
          </h2>

          <p className="mt-10 text-xl leading-9 text-white/90">
            Every unforgettable celebration begins with a conversation.
            Share your vision with us, and we'll thoughtfully craft every
            flower, every colour palette, and every elegant detail into
            a timeless celebration your family will cherish forever.
          </p>

          {/* Contact Information */}

          <div className="mt-16 space-y-8">

            {/* Phone */}

            <div className="flex items-start gap-5">

              <Phone className="w-6 h-6 text-[#D9B15A] mt-1" />

              <div>

                <p className="uppercase tracking-[0.3em] text-xs text-white/70">
                  Call Us
                </p>

                <p className="text-2xl font-light mt-2">
                  +91 XXXXX XXXXX
                </p>

              </div>

            </div>

            {/* Email */}

            <div className="flex items-start gap-5">

              <Mail className="w-6 h-6 text-[#D9B15A] mt-1" />

              <div>

                <p className="uppercase tracking-[0.3em] text-xs text-white/70">
                  Email
                </p>

                <p className="text-2xl font-light mt-2">
                  hello@aaviraa.in
                </p>

              </div>

            </div>

            {/* WhatsApp */}

            <div className="flex items-start gap-5">

              <MessageCircle className="w-6 h-6 text-[#D9B15A] mt-1" />

              <div>

                <p className="uppercase tracking-[0.3em] text-xs text-white/70">
                  WhatsApp
                </p>

                <p className="text-2xl font-light mt-2">
                  Chat With Our Team
                </p>

              </div>

            </div>

          </div>

          {/* CTA Button */}

          <button className="mt-16 bg-[#C9A24D] hover:bg-[#B68F38] transition-all duration-500 text-white px-12 py-5 rounded-full shadow-2xl hover:scale-105 text-lg tracking-wide font-medium">
            Schedule A Consultation
          </button>

        </div>

      </div>

    </section>
  );
}