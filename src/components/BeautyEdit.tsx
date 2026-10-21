import React from 'react';
import { Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { SALON_CONFIG, createWhatsAppProductUrl } from '../config/salonConfig';

export const BeautyEdit: React.FC = () => {
  return (
    <section id="beauty-edit" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#FBCFE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D6336C] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E05780]" />
            <span>Retail & Aftercare</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A111E] font-semibold tracking-tight text-balance">
            The Beauty <span className="italic font-normal text-[#E05780]">Edit</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#704856] leading-relaxed font-normal">
            Extend your salon finish at home with curated botanical elixirs, bond-rebuilding masks, and nourishing floral mists available during your atelier consultation.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SALON_CONFIG.beautyEditProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#FFFFFF] rounded-3xl border border-[#FBCFE8] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#E05780]/70 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Product Image Frame */}
                <div className="relative aspect-square overflow-hidden bg-[#FFF0F5] p-6 flex items-center justify-center">
                  <img
                    src={product.imageUrl}
                    alt={product.alt}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md text-[9px] uppercase tracking-[0.2em] font-semibold text-[#2A111E] border border-[#FBCFE8]">
                    {product.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6">
                  <span className="text-[11px] text-[#704856]/70 font-mono block mb-1">
                    {product.volume}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#2A111E] group-hover:text-[#E05780] transition-colors leading-snug">
                    {product.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-[#704856] leading-relaxed font-normal">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Working Real Enquiry Action */}
              <div className="px-6 pb-6 pt-0">
                <a
                  href={createWhatsAppProductUrl(product.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full text-xs font-semibold uppercase tracking-[0.14em] text-[#2A111E] bg-[#FFF0F5] hover:bg-[#E05780] hover:text-[#FFFFFF] border border-[#FBCFE8] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#E05780] group-hover:text-[#FFFFFF]" />
                  <span>Enquire Availability</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Retail Policy Notice */}
        <div className="mt-10 text-center text-xs text-[#704856]/70 max-w-md mx-auto">
          <span>* Available directly at our Princess Building salon desk. Enquire via WhatsApp or phone to reserve products prior to your appointment.</span>
        </div>

      </div>
    </section>
  );
};
