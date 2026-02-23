import About from "../components/about";
import faqs from "../components/data/faqs.json";
import Faqs from "../components/faqs";
import Sponsors from "../components/sponsors";
import SponsorTrack from "../components/sponsor-track";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Header from "@/components/header";
import ParallaxBackground from "@/components/parallax-background";


export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between font-sans">
      <ParallaxBackground />
      <Header />
      <Hero />
      <About />
      <Faqs faqs={faqs} />
      <Sponsors />
      <SponsorTrack />
      <Footer />
    </main>
  );
}
