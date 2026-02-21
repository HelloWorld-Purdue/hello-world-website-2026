import Image from "next/image";
import About from "../components/about";
import {Button} from "@/components/ui/button";
import faqs from "../components/data/faqs.json";
import Faqs from "../components/faqs";
import { Card, CardContent } from "@/components/ui/card";
import sponsors from "../components/data/sponsors.json";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Header from "@/components/header";
import ParallaxSection from "@/components/parallax-section";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <Header />
        <Hero />
        <ParallaxSection>
          <About />
          <Faqs Card={Card} faqs={faqs} CardContent={CardContent} />
          <Sponsors sponsors={sponsors} />

          <div className="footer">
            <Footer />
          </div>
        </ParallaxSection>
      </main>
    </div>
  );
}
