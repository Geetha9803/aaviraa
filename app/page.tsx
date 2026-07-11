import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Philosophy from "./components/Philosophy";
import Services from "./components/Services";
import Collections from "./components/Collections";
import WhyChoose from "./components/WhyChoose";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Instagram from "./components/Instagram";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Philosophy />
      <Services />
      <Collections />
      <WhyChoose />
      <Process />
      <Testimonials />
      <Instagram />
      <Contact />
      <Footer />
    </>
  );
}