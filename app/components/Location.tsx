'use client';

import { Train, ShoppingBag, Dumbbell, Cross } from "lucide-react";
import Image from 'next/image';

export function Location() {
  const amenities = [
    {
      icon: Train,
      title: "Gradski prevoz",
      description: "Tramvaji & trolejbusi",
    },
    {
      icon: ShoppingBag,
      title: "Kupovina",
      description: "Super market",
    },
    {
      icon: Dumbbell,
      title: "Rekreacija",
      description: "Sportski centar Vračar & teretana",
    },
    {
      icon: Cross,
      title: "Zdravstvo",
      description: "Dom zdravlja Vračar",
    },
  ];

  return (
    <section className="py-0 xl:py-20 bg-white relative overflow-hidden">
      {/* Vertical accent lines */}
      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-accent-light/20"></div>
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-accent-light/20"></div>

      {/* Large decorative number */}
      <div className="absolute right-8 top-0 md:top-8 text-cream text-[15rem] leading-none pointer-events-none select-none font-black">
        02
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-accent"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary-light">Lokacija</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary font-medium tracking-tight max-w-2xl">
            U srcu<br />Crvenog Krsta
          </h2>
        </div>

        {/* Main Content - Horizontal Layout */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="lg:col-span-2">
              <div className="relative aspect-square bg-primary/10 flex items-center justify-center">
                <Image
                  src="/img/location.png"
                  alt="Lokacija"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-accent/95 backdrop-blur-sm text-white p-6">
                  <div className="text-xs uppercase tracking-widest mb-1 text-accent-light">Lokacija</div>
                  <div className="text-2xl">Golubačka 12, Vračar</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-3 space-y-8">
              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rotate-45"></div>
                <p className="text-primary text-2xl leading-relaxed mb-4">
                  Mirna ulica između Žičke i Kajmakčalanske u srcu Crvenog krsta,
                  najviše tačke vračarskog brda.
                </p>
                <p className="text-primary text-2xl leading-relaxed mb-6">
                  Na samo nekoliko koraka od tramvajskih šina Bulevara Kralja
                  Aleksandra i pijace Đeram s jedne strane i Žičke ulice kojom
                  saobraćaju trolejbusi s druge.
                </p>
                <p className="text-primary-light text-lg leading-relaxed italic">
                  Autentičan spoj urbanost i mira ovaj kraj čine savršenim za život.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="bg-cream -mx-8 px-8 py-16 mt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xs uppercase tracking-[0.3em] text-primary-light mb-16 text-center">U neposrednoj blizini</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="mb-2 relative">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <amenity.icon className="w-10 h-10 text-primary transition-all duration-300 group-hover:scale-110" strokeWidth={1} />
                    </div>
                  </div>
                  <h4 className="text-sm text-primary font-medium mb-2">{amenity.title}</h4>
                  <p className="text-xs text-primary-light leading-relaxed">{amenity.description}</p>
                </div>
              ))}
            </div>

            {/* Additional amenities */}
            <div className="mt-16 pt-12 border-t border-accent-light/40 text-center">
              <p className="text-sm text-primary-light leading-relaxed">
                Kafići • Restorani • Vrtići • Crkva • Beogradsko dramsko pozorište • Dečije igraonice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
