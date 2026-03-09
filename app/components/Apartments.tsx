'use client';

import { useState } from 'react';
import Image from 'next/image';
import { apartmentsByFloor } from '@/app/consts/consts';
import Link from 'next/link';
import { ApartmentRoomsTable } from '@/app/components/ApartmentRoomsTable';

export function Apartments() {
  const [selectedRoomType, setSelectedRoomType] = useState<string>('all');

  // Get all apartments from all floors
  const allApartments = Object.values(apartmentsByFloor).flat();

  // Define room types with Serbian labels
  const typeOrder = ['Jednosoban', 'Dvosoban', 'Trosoban', 'Četvorosoban'];

  const roomTypes = [
    { id: 'all', label: 'Svi stanovi' },
    ...Array.from(new Set(allApartments.map(apartment => apartment.type)))
      .sort((a, b) => typeOrder.indexOf(a) - typeOrder.indexOf(b))
      .map(type => ({
        id: type,
        label: type,
      })),
  ];

  // Filter apartments by room type
  const currentApartments = selectedRoomType === 'all'
    ? allApartments
    : allApartments.filter(apt => apt.type === selectedRoomType);

  // Count apartments by room type
  const getApartmentCount = (type: string) => {
    if (type === 'all') return allApartments.length;
    return allApartments.filter(apt => apt.type === type).length;
  };

  const getPluralForm = (n: number) => {
    if (n % 10 === 1 && n % 100 !== 11) return 'stan';
    if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) return 'stana';
    return 'stanova';
  }

  return (
    <section className="py-36 bg-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-accent-light/20"></div>
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-accent-light/20"></div>

      {/* Large decorative number */}
      <div className="absolute left-8 top-8 text-white/5 text-[15rem] leading-none pointer-events-none select-none" style={{ fontWeight: 900 }}>
        03
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Page Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-accent"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary-light">Dostupni stanovi</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-primary tracking-tight mb-6">
            Stanovi
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
            Istražite naše pažljivo dizajnirane stanove, od kojih je svaki kreiran za komfor i moderan život.
          </p>
        </div>

        {/* Room Type Tabs */}
        <div className="mb-16">
          <h3 className="text-xs uppercase tracking-[0.3em] text-primary-light mb-6">
            Izaberite Tip Stana
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {roomTypes.map((roomType) => {
              const apartmentCount = getApartmentCount(roomType.id);

              return (
                <button
                  key={roomType.id}
                  onClick={() => setSelectedRoomType(roomType.id)}
                  className={`
                    h-22
                    flex flex-col items-center justify-center
                    px-3
                    text-center
                    transition-all duration-300
                    ${
                      selectedRoomType === roomType.id
                        ? 'bg-accent text-white shadow-lg'
                        : 'bg-white text-primary hover:bg-primary hover:text-white'
                    }
                  `}
                >
                  <div className="text-sm uppercase tracking-wider font-medium leading-tight">
                    {roomType.label}
                  </div>
                  <div className="text-xs mt-1 opacity-80">
                    {apartmentCount} {getPluralForm(apartmentCount)}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Apartments Grid */}
        <div className="grid gap-6">
          {currentApartments.map((apartment) => (
            <div key={apartment.id} className="group">
              {/* Horizontal Card Layout */}
              <div className="bg-white shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col lg:flex-row lg:items-stretch">

                {/* Left Side - Image with Overlay Info */}
                <div className="lg:w-[55%] relative lg:flex lg:flex-col">
                  <div className="bg-white aspect-16/10 lg:aspect-auto lg:flex-1 relative overflow-hidden">
                    <Image
                      src={apartment.image3D}
                      alt={`${apartment.name} 3D Pogled`}
                      fill
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Dark overlay gradient - hidden on mobile */}
                    {/*<div className="hidden lg:block absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>*/}

                    {/* Key Information Overlay - hidden on mobile */}
                    <div className="hidden lg:block absolute bottom-0 left-0 right-0 p-8 pt-6 text-white bg-black/70">
                      <div className="flex items-end justify-between gap-6">
                        <div className="flex items-center gap-6">
                          {/* Floor */}
                          <div className="text-center">
                            <div className="text-4xl font-bold mb-1">
                              {apartment.floor === 0 ? 'P' : apartment.floor}
                            </div>
                            <div className="text-xs uppercase tracking-widest opacity-90">
                              {apartment.floor === 0 ? 'Prizemlje' : 'Sprat'}
                            </div>
                          </div>

                          <div className="h-16 w-px bg-white/30"></div>

                          {/* Type */}
                          <div>
                            <div className="text-3xl font-semibold mb-1">
                              {apartment.type}
                            </div>
                            <div className="text-xs uppercase tracking-widest opacity-90">
                              Tip Stana
                            </div>
                          </div>
                        </div>

                        {/* Surface - Prominent */}
                        <div className="text-right">
                          <span className="text-sm tracking-widest">
                            m²
                          </span>
                          <div className="text-6xl font-bold text-accent">
                            {apartment.totalArea}
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Right Side - Room Details */}
                <div className="lg:w-[45%] p-4 sm:p-8 flex flex-col">
                  {/* Mobile Info Header - visible only on mobile */}
                  <div className="lg:hidden mb-6 pb-4 border-b border-accent-light/30">
                    <div className="flex items-center justify-between gap-2 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                        <div className="text-center shrink-0">
                          <div className="text-xl sm:text-2xl font-bold text-primary mb-0.5">
                            {apartment.floor === 0 ? 'P' : apartment.floor}
                          </div>
                          <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-primary-light">
                            {apartment.floor === 0 ? 'Prizemlje' : 'Sprat'}
                          </div>
                        </div>

                        <div className="h-10 w-px bg-accent-light/30 shrink-0"></div>

                        <div className="min-w-0 flex-1">
                          <div className="text-base sm:text-xl font-semibold text-primary mb-0.5 truncate">
                            {apartment.type}
                          </div>
                          <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-primary-light">
                            Tip Stana
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-[9px] sm:text-[10px] tracking-wider text-primary-light">
                          m²
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-accent">
                          {apartment.totalArea}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2 sm:mb-6">
                    <h3 className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-primary-light font-medium">
                      Prostorije
                    </h3>
                  </div>

                  {/* Room Grid - With Icons */}
                  <div className="flex-1 mb-4 sm:mb-6">
                    <ApartmentRoomsTable apartment={apartment} />
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/apartments/${apartment.id}`}
                    className="w-full bg-primary hover:bg-accent text-white py-4 px-6 transition-colors text-sm uppercase tracking-widest font-medium group/btn text-center block"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span>Pogledaj Detalje</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
