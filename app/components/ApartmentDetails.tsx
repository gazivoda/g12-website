'use client';

import { useState } from 'react';
import { Phone, Mail, X, Maximize2 } from 'lucide-react';
import { getApartmentById } from '@/app/consts/consts';
import Link from 'next/link';
import { Breadcrumbs } from '@/app/components/Breadcrumbs';
import InteriorGallery from '@/app/components/InteriorGallery';
import { ApartmentRoomsTable } from '@/app/components/ApartmentRoomsTable';
import { Apartment } from '@/app/types';

interface ApartmentDetailsProps {
  id: string;
}

export function ApartmentDetails({ id }: ApartmentDetailsProps) {
  const apartment: Apartment | undefined = getApartmentById(id);
  const [selectedView, setSelectedView] = useState<'3d' | 'floor'>('3d');
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string>('');

  // Early return if apartment not found
  if (!apartment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-primary mb-4">Apartman nije pronađen</h1>
          <Link href="/apartments" className="text-accent underline">
            Vrati se na listu
          </Link>
        </div>
      </div>
    );
  }

  const openImageModal = (image: string) => {
    setModalImage(image);
    setImageModalOpen(true);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-cream overflow-hidden pt-32">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #d4c5b0 1px, transparent 1px),
              linear-gradient(to bottom, #d4c5b0 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 pb-8 md:pb-16 relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Stanovi', href: '/apartments' },
              { label: apartment.name }
            ]}
          />

          {/* Title Section */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary-light">dostupan</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-primary tracking-tight mb-16">
              {apartment.name}
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Image Display */}
            <div className="space-y-4">
              {/* Image Tabs */}
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedView('3d')}
                  className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                    selectedView === '3d'
                      ? 'bg-accent text-white'
                      : 'bg-white text-primary-light hover:bg-accent hover:text-white'
                  }`}
                >
                  3D Prikaz
                </button>
                <button
                  onClick={() => setSelectedView('floor')}
                  className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                    selectedView === 'floor'
                      ? 'bg-accent text-white'
                      : 'bg-white text-primary-light hover:bg-accent hover:text-white'
                  }`}
                >
                  Osnova
                </button>
              </div>

              {/* Image */}
              <div className="relative aspect-4/3 bg-white overflow-hidden group cursor-pointer">
                <img
                  src={selectedView === '3d' ? apartment.image3D : apartment.floorPlan}
                  alt={selectedView === '3d' ? '3D Prikaz' : 'Osnova'}
                  className="w-full h-full object-contain"
                  onClick={() => openImageModal(selectedView === '3d' ? apartment.image3D : apartment.floorPlan)}
                />
                <button
                  onClick={() => openImageModal(selectedView === '3d' ? apartment.image3D : apartment.floorPlan)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-8 mt-12">
              {/* Key Stats - 4 Squares */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 border-l-4 border-accent">
                  <div className="text-4xl font-bold text-accent mb-2">{apartment.totalArea}</div>
                  <div className="text-xs uppercase tracking-widest text-primary-light">Ukupna površina m²</div>
                </div>
                <div className="bg-white p-6 border-l-4 border-accent-light">
                  <div className="text-3xl font-bold text-primary mt-2 mb-2">{ apartment.type }</div>
                  <div className="text-xs uppercase tracking-widest text-primary-light">Prostorije</div>
                </div>
                <div className="bg-white p-6 border-l-4 border-accent">
                  <div className="text-3xl font-bold text-accent mb-2">
                    { apartment.floor === 0 ? 'Prizemlje' : `Sprat ${apartment.floor}` }
                  </div>
                  <div className="text-xs uppercase tracking-widest text-primary-light">Sprat</div>
                </div>
                <div className="bg-white p-6 border-l-4 border-accent-light">
                  <div className="text-3xl font-bold text-primary mb-2">{ apartment.orientation }</div>
                  <div className="text-xs uppercase tracking-widest text-primary-light">Orijentacija</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-accent hover:bg-[#3d8a7b] text-white py-4 px-6 transition-colors text-sm uppercase tracking-widest font-medium flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Pozovite</span>
                </button>
                <button className="flex-1 bg-primary hover:bg-[#5a4e42] text-white py-4 px-6 transition-colors text-sm uppercase tracking-widest font-medium flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Pošaljite Upit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Details Section - Table Format */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary-light">Detaljna Struktura</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-primary tracking-tight">
              Raspored Prostorija
            </h2>
          </div>

          <div className="bg-white border border-accent-light/30">
            <ApartmentRoomsTable apartment={apartment} iconSize="w-5 h-5"/>

            {/* Total */}
            <div className="flex items-center justify-between px-6 py-4 bg-primary text-white">
              <span className="font-medium uppercase text-sm tracking-wider">Ukupna površina</span>
              <span className="text-xl font-bold">{apartment.totalArea} m²</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Gallery Section */}
      <InteriorGallery/>

      {/* Image Modal */}
      {imageModalOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setImageModalOpen(false)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setImageModalOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={modalImage}
            alt="Full size preview"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
