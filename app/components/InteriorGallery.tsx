import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Image from 'next/image';

export default function InteriorGallery() {
  const interiorImgs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [currentInteriorIndex, setCurrentInteriorIndex] = useState(0);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const nextInteriorImage = () => {
    setCurrentInteriorIndex((p) => (p + 1) % interiorImgs.length);
  };

  const prevInteriorImage = () => {
    setCurrentInteriorIndex((p) => (p - 1 + interiorImgs.length) % interiorImgs.length);
  };

  const openImageModal = (index: number) => {
    setModalIndex(index);
    setImageModalOpen(true);
  };

  const closeModal = () => {
    setImageModalOpen(false);
    setModalIndex(null);
  };

  const nextModalImage = () => {
    setModalIndex((p) => (p === null ? 0 : (p + 1) % interiorImgs.length));
  };

  const prevModalImage = () => {
    setModalIndex((p) => (p === null ? 0 : (p - 1 + interiorImgs.length) % interiorImgs.length));
  };

  return (
    <>
      <section className="py-12 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-accent" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary-light">
                Galerija Enterijera
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl text-primary tracking-tight">
              Primeri Uređenja
            </h2>
          </div>

          {/* Main */}
          <div className="relative">
            <div className="relative aspect-16/10 bg-white overflow-hidden group">
              <Image
                src={`/img/vizuali/${interiorImgs[currentInteriorIndex]}.jpg`}
                alt={`Interior ${currentInteriorIndex + 1}`}
                fill
                className="object-cover cursor-pointer"
                onClick={() => openImageModal(currentInteriorIndex)}
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* desktop arrows */}
              <button
                onClick={prevInteriorImage}
                className="cursor-pointer hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 items-center justify-center opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>

              <button
                onClick={nextInteriorImage}
                className="cursor-pointer hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 items-center justify-center opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>

              <button
                onClick={() => openImageModal(currentInteriorIndex)}
                className="cursor-pointer absolute top-4 right-4 w-10 h-10 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100"
              >
                <Maximize2 className="w-5 h-5 text-primary" />
              </button>

              <div className="cursor-pointer absolute bottom-4 left-4 bg-primary text-white px-4 py-2 text-xs">
                {currentInteriorIndex + 1} / {interiorImgs.length}
              </div>
            </div>

            {/* thumbs */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mt-4">
              {interiorImgs.map((num, index) => (
                <button
                  key={num}
                  onClick={() => setCurrentInteriorIndex(index)}
                  className={`relative aspect-square overflow-hidden cursor-pointer ${
                    currentInteriorIndex === index
                      ? "ring-2 ring-accent ring-offset-2"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={`/img/vizuali/${num}.jpg`}
                    alt={`Interior ${num}`}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {imageModalOpen && modalIndex !== null && (
        <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center">

          {/* close backdrop */}
          <div className="absolute inset-0" onClick={closeModal} />

          {/* image with click left/right */}
          <Image
            src={`/img/vizuali/${interiorImgs[modalIndex]}.jpg`}
            alt={`Interior ${modalIndex + 1}`}
            width={1920}
            height={1080}
            className="max-w-[95vw] max-h-[90vh] object-contain relative z-20 cursor-pointer"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              if (clickX < rect.width / 2) {
                prevModalImage();
              } else {
                nextModalImage();
              }
            }}
          />

          {/* close */}
          <button
            onClick={closeModal}
            className="cursor-pointer absolute top-6 right-6 w-12 h-12 bg-white z-30 flex items-center justify-center"
          >
            <X className="w-6 h-6 text-primary" />
          </button>

          {/* desktop arrows */}
          <button
            onClick={prevModalImage}
            className="cursor-pointer hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white z-30 items-center justify-center"
          >
            <ChevronLeft className="w-7 h-7 text-primary" />
          </button>

          <button
            onClick={nextModalImage}
            className="cursor-pointer hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white z-30 items-center justify-center"
          >
            <ChevronRight className="w-7 h-7 text-primary" />
          </button>

          {/* counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 text-sm z-30">
            {modalIndex + 1} / {interiorImgs.length}
          </div>
        </div>
      )}
    </>
  );
}
