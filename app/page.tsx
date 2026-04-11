import About from "../components/about";
import faqs from "../components/data/faqs.json";
import Faqs from "../components/faqs";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Header from "@/components/header";
import ParallaxSection from "@/components/parallax-section";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full flex-col items-center">
        <Header />
        <Hero />
        <ParallaxSection>
          <About />
          <Faqs faqs={faqs} />
          <Sponsors />

          <div className="footer">
            <Footer />
          </div>
        </ParallaxSection>
      </main>
    </div>
  );
}
