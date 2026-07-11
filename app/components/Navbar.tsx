export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-serif tracking-[0.20em] text-[#0F4D46] cursor-pointer"
        >
          AAVIRAA
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.18em] text-gray-700">

          <li>
            <a
              href="#home"
              className="transition duration-300 hover:text-[#0F4D46]"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#story"
              className="transition duration-300 hover:text-[#0F4D46]"
            >
              Our Story
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="transition duration-300 hover:text-[#0F4D46]"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              className="transition duration-300 hover:text-[#0F4D46]"
            >
              Gallery
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="transition duration-300 hover:text-[#0F4D46]"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="
            hidden
            md:block
            px-6
            py-3
            rounded-full
            border
            border-[#0F4D46]
            text-[#0F4D46]
            font-medium
            transition-all
            duration-300
            hover:bg-[#0F4D46]
            hover:text-white
            hover:scale-105
          "
        >
          Plan Your Celebration
        </a>

      </div>

    </nav>
  );
}