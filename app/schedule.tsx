import Header from "@/components/header";
import Schedule from "@/components/schedule";
import Footer from "@/components/footer";
import Reveal from "@/components/reveal";

export default function SchedulePage() {
  return (
    <div className="flex min-h-screen items-center justify-center font-serif">
      <main className="flex min-h-screen w-full flex-col items-center">
        <Header />
        <Reveal>
          <Schedule />
        </Reveal>
        <Reveal>
          <div className="footer">
            <Footer />
          </div>
        </Reveal>
      </main>
    </div>
  );
}
