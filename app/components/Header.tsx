'use client';

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

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
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-accent-light/10">
          <nav className="max-w-7xl mx-auto px-8 py-6 flex flex-col gap-4">
            <Link
              href="/"
              className="text-primary hover:text-accent transition-colors text-sm uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Početna
            </Link>
            <Link
              href="/apartments"
              className="text-primary hover:text-accent transition-colors text-sm uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Stanovi
            </Link>
            <Link
              href="/contact"
              className="text-primary hover:text-accent transition-colors text-sm uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
