import Image from "next/image";
import About from "../components/about";
import {Button} from "@/components/ui/button";
import faqs from "../components/data/faqs.json";
import Faqs from "../components/faqs";
import { Card, CardContent } from "@/components/ui/card";
import sponsors from "../components/data/sponsors.json";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        <header className="w-full mb-8">
          <nav className="flex justify-between items-center">
            <ul className="flex gap-4">
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#faqs">FAQs</Link>
              </li>
              <li>
                <Link href="#sponsors">Sponsors</Link>
              </li>
              <li>
                <Link href="/schedule">Schedule</Link>
              </li>
              <li>
                <Link href="/apply">Apply</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <About Button={Button} />
        <Faqs Card={Card} faqs={faqs} CardContent={CardContent} />
        {<Sponsors
              Card={Card}
              CardContent={CardContent}
              sponsors={sponsors}
            />}

        <div className="footer">
          <Footer />
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
