import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Products from "@/components/Products";
import Pricing from "@/components/Pricing";
import Values from "@/components/Values";
import Policies from "@/components/Policies";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <MissionVision />
        <Products />
        <Pricing />
        <Values />
        <Policies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
