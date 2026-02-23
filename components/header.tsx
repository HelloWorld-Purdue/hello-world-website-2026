'use client';

import { useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '#about',        label: 'About'         },
  { href: '#faqs',         label: 'FAQs'          },
  { href: '#sponsors',     label: 'Sponsors'      },
  { href: '#sponsor-track',label: 'Sponsor Track' },
  { href: '/schedule',     label: 'Schedule'      },
  { href: '/apply',        label: 'Apply'         },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="shrink-0">
          <img
            src="/images/logo.png"
            alt="HelloWorld"
            className="h-10 w-auto"
            draggable={false}
          />
        </Link>

        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-white/80 hover:text-white transition-colors duration-200 [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2 text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {menuOpen && (
        <ul className="md:hidden border-t border-white/10 flex flex-col px-6 py-4 gap-4 text-sm font-medium">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block text-white/80 hover:text-white transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
