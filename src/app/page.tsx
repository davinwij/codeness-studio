import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import WhyUs from "@/components/landing/WhyUs";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <Footer />
    </div>
  );
}
