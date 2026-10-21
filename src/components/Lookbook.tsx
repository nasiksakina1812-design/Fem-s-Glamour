import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Sparkles } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

interface LookbookProps {
  onEnquireLook?: (lookTitle: string) => void;
}

export const Lookbook: React.FC<LookbookProps> = ({ onEnquireLook }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Atelier Looks' },
    { id: 'hair', label: 'Hair Styling' },
    { id: 'colour', label: 'Colour & Balayage' },
    { id: 'bridal', label: 'Bridal Couture' },
    { id: 'skin', label: 'Skin Radiance' },
    { id: 'nails', label: 'Nail Details' },
  ];

  const filteredItems = activeFilter === 'all'
    ? SALON_CONFIG.lookbook
    : SALON_CONFIG.lookbook.filter((item) => item.category === activeFilter);

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
    <section id="lookbook" className="py-24 lg:py-32 bg-[#FFF8FA] text-[#2A111E] relative overflow-hidden border-b border-[#FBCFE8]">
      {/* Decorative concentric geometry in Pink */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 800" fill="none">
          <circle cx="500" cy="400" r="350" stroke="#E05780" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="500" cy="400" r="480" stroke="#E05780" strokeWidth="0.5" />
          <path d="M0 400 L1000 400" stroke="#E05780" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D6336C] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E05780]" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A111E] font-semibold tracking-tight text-balance">
            The Atelier <span className="italic font-normal text-[#E05780]">Lookbook</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#704856] leading-relaxed font-normal">
            A visual anthology of glossy hair dimensions, festive transformations, and bespoke bridal elegance. Tap any look to view in high detail.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.16em] font-semibold rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#E05780] to-[#D6336C] text-[#FFFFFF] shadow-md scale-105 border border-[#FBCFE8]/40'
                    : 'bg-[#FFFFFF] text-[#704856] hover:text-[#2A111E] border border-[#FBCFE8] hover:border-[#E05780]/40'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Grid in Pink & White */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-xl bg-[#FFFFFF] border border-[#FBCFE8] hover:border-[#E05780]/70"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1F0B16]">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                  loading="lazy"
                />
                
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B16] via-[#1F0B16]/30 to-transparent pointer-events-none" />

                {/* Hover Zoom Scrim */}
                <div className="absolute inset-0 bg-[#E05780]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="px-5 py-2.5 rounded-full bg-[#FFFFFF] text-[#2A111E] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-2xl backdrop-blur-md">
                    <ZoomIn className="w-4 h-4 text-[#E05780]" />
                    <span>Expand Look</span>
                  </div>
                </div>

                {/* Caption Bar */}
                <div className="absolute bottom-5 left-5 right-5 z-10 pointer-events-none">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#F9A8D4] font-semibold block mb-1">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FFF0F5]/85 mt-1 line-clamp-2 font-normal">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lookbook Disclosure */}
        <div className="mt-10 text-center text-xs text-[#704856]/70 max-w-lg mx-auto">
          <span>* Visual concepts presented for look planning and consultation. Stock photos are used as editorial inspirations, not claimed as personal client records.</span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#1F0B16]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FFFFFF] rounded-3xl overflow-hidden shadow-2xl border border-[#FBCFE8] text-[#2A111E] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#FBCFE8] bg-[#FFF0F5]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E05780]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#2A111E] font-semibold">
                  {activeItem.categoryLabel}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close Preview"
                className="p-1.5 rounded-full hover:bg-[#FFFFFF] text-[#2A111E] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Visual Content */}
            <div className="p-6">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#1F0B16]">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2A111E]">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#704856] mt-1 font-normal">
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
                  className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-[#FFFFFF] bg-gradient-to-r from-[#E05780] to-[#D6336C] hover:from-[#D6336C] hover:to-[#BE185D] border border-[#FBCFE8]/40 transition-all shrink-0 cursor-pointer shadow-md"
                >
                  Enquire For This Look
                </button>
              </div>
            </div>

            {/* Modal Navigation Footer */}
            <div className="flex items-center justify-between px-6 py-3.5 border-t border-[#FBCFE8] bg-[#FFF8FA] text-xs text-[#704856] font-medium">
              <button
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
                  )
                }
                className="flex items-center gap-1.5 hover:text-[#E05780] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span className="tabular-nums font-mono font-semibold text-[#2A111E]">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>

              <button
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
                }
                className="flex items-center gap-1.5 hover:text-[#E05780] transition-colors cursor-pointer"
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
