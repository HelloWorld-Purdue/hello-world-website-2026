import React from 'react';
import Link from "next/link";

export default function Header() {
    return (<header className="w-full mb-8">
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
        </header>)
}