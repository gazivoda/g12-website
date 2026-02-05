'use client';

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Background Image - Split Layout for Desktop, Full Background for Mobile */}
      <div className="absolute inset-0">
        {/* Mobile: Full background image */}
        <div className="md:hidden absolute inset-0">
          <Image
            src="/img/building.jpg"
            alt="G12 Zgrada"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability on mobile */}
          <div className="absolute inset-0"></div>
        </div>

        {/* Desktop: Split layout */}
        <div className="hidden md:flex flex-row absolute inset-0">
          <div className="w-1/2 bg-cream"></div>
          <div className="w-1/2 relative">
            <Image
              src="/img/building.jpg"
              alt="G12 Zgrada"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0"></div>
          </div>
        </div>
      </div>

      {/* Geometric overlay patterns - Desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Vertical lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-accent-light/20"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-accent-light/20"></div>
        {/* Horizontal lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-accent-light/20"></div>
        <div className="absolute top-2/3 left-0 right-0 h-px bg-accent-light/20"></div>

        {/* Corner brackets */}
        <div className="absolute top-32 left-32 w-16 h-16 border-t-2 border-l-2 border-accent/40"></div>
        <div className="absolute bottom-32 right-32 w-16 h-16 border-b-2 border-r-2 border-accent/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-8 py-16 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl md:max-w-2xl lg:max-w-3xl bg-cream/85 md:bg-cream/70 backdrop-blur-sm p-8 md:p-12 border-l-4 border-accent">
            <div className="inline-block px-4 py-2 bg-accent text-white text-xs uppercase tracking-[0.3em] mb-6 md:mb-8">
              Crveni Krst
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-primary mb-6 md:mb-8 leading-[0.95] tracking-tight">
              Mi smo<br />
              ugodan komšiluk na<br />
              Crvenom krstu.
            </h1>
            <div className="w-24 md:w-32 h-1 bg-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
