export default function Footer() {
  return (
    <footer className="bg-[#0F4D46] text-white">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-3 gap-12">

          <div>

            <h2 className="text-4xl font-serif tracking-[0.25em]">
              AAVIRAA
            </h2>

            <p className="mt-6 text-gray-300 leading-8">
              Crafting timeless celebrations inspired by
              tradition, elegance and unforgettable memories.
            </p>

          </div>

          <div>

            <h3 className="text-[#E6C36A] uppercase tracking-[0.3em] text-sm">
              Explore
            </h3>

            <ul className="mt-6 space-y-3 text-gray-300">

              <li>Home</li>

              <li>Our Story</li>

              <li>Services</li>

              <li>Gallery</li>

              <li>Contact</li>

            </ul>

          </div>

          <div>

            <h3 className="text-[#E6C36A] uppercase tracking-[0.3em] text-sm">
              Stay Inspired
            </h3>

            <ul className="mt-6 space-y-3 text-gray-300">

              <li>Instagram</li>

              <li>WhatsApp</li>

              <li>Pinterest</li>

              <li>Email</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400">

          © 2026 AAVIRAA • Crafted with elegance.

        </div>

      </div>

    </footer>
  );
}