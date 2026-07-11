import About from "../components/about";
import faqs from "../components/data/faqs.json";
import Faqs from "../components/faqs";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Header from "@/components/header";
import ParallaxSection from "@/components/parallax-section";
import Reveal from "@/components/reveal";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-serif">
      <main className="flex min-h-screen w-full flex-col items-center">
        <Header />
        <Hero />
        <ParallaxSection>
          <Reveal><About /></Reveal>
          <Reveal><Faqs faqs={faqs} /></Reveal>
          <Reveal><Sponsors /></Reveal>
          <Reveal>
            <div className="footer">
              <Footer />
            </div>
          </Reveal>
        </ParallaxSection>
      </main>
    </div>
  );
}
