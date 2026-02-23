'use client';

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { Phone } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-accent-light/10">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <Link href="/" className="relative h-10 w-10">
          <Image
            src="/img/logo.png"
            alt="G12 Zgrada"
            fill
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          <Link href="/" className="text-primary hover:text-accent transition-colors text-sm uppercase tracking-widest">
            Početna
          </Link>
          <Link href="/apartments" className="text-primary hover:text-accent transition-colors text-sm uppercase tracking-widest">
            Stanovi
          </Link>
          <Link href="/contact" className="text-primary hover:text-accent transition-colors text-sm uppercase tracking-widest">
            Kontakt
          </Link>
          {/* Phone Link */}
          <a
            href="tel:+381658778202"
            className="flex items-center gap-2 text-sm text-[#4a9d8e] hover:text-[#6b5d4f] transition-colors border-l border-[#d4c5b0]/80 pl-8"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">+381 65 877 8202</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden  border-b border-accent-light/10">
          <nav className="flex flex-col px-6 py-4">
            <Link
              href="/"
              className="py-3 text-sm uppercase tracking-wider text-[#6b5d4f] hover:text-[#4a9d8e] transition-colors border-b border-[#d4c5b0]/60 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              Početna
            </Link>
            <Link
              href="/apartments"
              className="py-3 text-sm uppercase tracking-wider text-[#6b5d4f] hover:text-[#4a9d8e] transition-colors border-b border-[#d4c5b0]/60 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              Stanovi
            </Link>
            <Link
              href="/contact"
              className="py-3 text-sm uppercase tracking-wider text-[#6b5d4f] hover:text-[#4a9d8e] transition-colors border-b border-[#d4c5b0]/60 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>

            {/* Phone Link in Mobile Menu */}
            <a
              href="tel:+381234567890"
              onClick={() => setIsOpen(false)}
              className="py-3 flex items-center gap-2 text-sm text-[#4a9d8e] hover:text-[#6b5d4f] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+381 23 456 7890</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
