import Link from 'next/link';
import { Home } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "404 – Stranica nije pronađena",
  description: "Stan koji tražite ne postoji.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="text-9xl font-bold text-accent mb-6">404</div>
        <h1 className="text-4xl md:text-5xl text-primary mb-4 tracking-tight">
          Apartman nije pronađen
        </h1>
        <p className="text-lg text-primary-light mb-8">
          Apartman koji tražite ne postoji ili je uklonjen iz ponude.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/apartments"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white hover:bg-primary transition-colors uppercase tracking-widest font-medium"
          >
            <span>Vrati se na listu</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary hover:bg-primary hover:text-white border-2 border-primary transition-colors uppercase tracking-widest font-medium"
          >
            <Home className="w-4 h-4" />
            <span>Početna</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
