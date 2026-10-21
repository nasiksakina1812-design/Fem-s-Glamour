import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';
import { VisualMedia } from './VisualMedia';

interface GalleryProps {
  onEnquireLook?: (lookTitle: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onEnquireLook }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Visuals' },
    { id: 'hair', label: 'Hair Styling' },
    { id: 'bridal', label: 'Bridal Glamour' },
    { id: 'skin', label: 'Skincare & Glow' },
    { id: 'makeup', label: 'Makeup Artistry' },
    { id: 'nails', label: 'Nails & Details' },
  ];

  const filteredItems = activeFilter === 'all'
    ? SALON_CONFIG.gallery
    : SALON_CONFIG.gallery.filter((item) => item.category === activeFilter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-gradient-to-b from-[#FFFFFF] via-[#FBF0F0] to-[#FFFFFF] text-[#5A2331] relative overflow-hidden">
      {/* Decorative concentric geometry in soft blush */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 800" fill="none">
          <circle cx="500" cy="400" r="350" stroke="#D48E92" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="500" cy="400" r="480" stroke="#EFCACA" strokeWidth="0.5" />
          <path d="M0 400 L1000 400" stroke="#EFCACA" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[#873E4F] font-semibold mb-3">
            Haute Beauty Showcase
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#5A2331] font-semibold tracking-tight text-balance">
            The Aesthetic <span className="italic font-normal text-[#873E4F]">Portfolio</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5A2331]/75 leading-relaxed font-normal">
            A visual reflection of radiant hair textures, timeless bridal grace, and glowing skincare rituals. Tap any visual to view in full editorial scale.
          </p>
        </div>

        {/* Working Category Filters in Blush & White */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.15em] font-semibold rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#873E4F] text-white shadow-md'
                    : 'bg-[#FFFFFF] text-[#5A2331] hover:text-[#873E4F] border border-[#EFCACA] hover:border-[#D48E92] shadow-sm'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Grid in White Cards with Blush Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-lg bg-[#FFFFFF] border border-[#EFCACA] hover:border-[#D48E92]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#FBF0F0]">
                <VisualMedia
                  type={item.fallbackType as any}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                  title={item.title}
                  category={item.categoryLabel}
                  className="w-full h-full rounded-none"
                />

                {/* Hover Zoom Scrim */}
                <div className="absolute inset-0 bg-[#5A2331]/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="px-5 py-2.5 rounded-full bg-[#FFFFFF]/95 text-[#5A2331] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-2xl backdrop-blur-md">
                    <ZoomIn className="w-4 h-4 text-[#873E4F]" />
                    <span>Expand Visual</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authentic Salon Visuals Disclosure */}
        <div className="mt-10 text-center text-xs text-[#873E4F]/75 max-w-xl mx-auto">
          <span>* Visual concepts curated for inspiration. We uphold absolute honesty and do not misrepresent stock imagery as verified client transformations.</span>
        </div>

      </div>

      {/* Lightbox Modal in Crisp Pure White & Blush Pink */}
      {lightboxIndex !== null && activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#5A2331]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FFFFFF] rounded-3xl overflow-hidden shadow-2xl border border-[#EFCACA] text-[#5A2331] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#FBF0F0] bg-[#FFFFFF]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D48E92]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#873E4F] font-semibold">
                  {activeItem.categoryLabel}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close Preview"
                className="p-1.5 rounded-full hover:bg-[#FBF0F0] text-[#5A2331]/70 hover:text-[#5A2331] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Visual Content */}
            <div className="p-6">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#FBF0F0]">
                <VisualMedia
                  type={activeItem.fallbackType as any}
                  imageUrl={activeItem.imageUrl}
                  alt={activeItem.alt}
                  title={activeItem.title}
                  category={activeItem.categoryLabel}
                  className="w-full h-full rounded-none"
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#5A2331]">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A2331]/75 mt-1 font-normal">
                    {activeItem.caption}
                  </p>
                </div>

                <button
                  onClick={() => {
                    const title = activeItem.title;
                    setLightboxIndex(null);
                    if (onEnquireLook) {
                      onEnquireLook(title);
                    } else {
                      const el = document.getElementById('booking');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-white bg-[#873E4F] hover:bg-[#5A2331] border border-[#EFCACA] transition-all shrink-0 cursor-pointer shadow-md"
                >
                  Enquire For This Look
                </button>
              </div>
            </div>

            {/* Modal Navigation Footer */}
            <div className="flex items-center justify-between px-6 py-3.5 border-t border-[#FBF0F0] bg-[#FBF0F0] text-xs text-[#5A2331]/80 font-medium">
              <button
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
                  )
                }
                className="flex items-center gap-1.5 hover:text-[#873E4F] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span className="tabular-nums font-mono font-semibold">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>

              <button
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
                }
                className="flex items-center gap-1.5 hover:text-[#873E4F] transition-colors cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
