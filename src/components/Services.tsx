import React, { useState } from 'react';
import { ArrowUpRight, Check, HelpCircle, Clock, Tag } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('hair');

  const filteredServices = SALON_CONFIG.services.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#FBCFE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D6336C] font-semibold mb-3">
            Atelier Menu & Rituals
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A111E] font-semibold tracking-tight text-balance">
            Services & <span className="italic font-normal text-[#E05780]">Treatments</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#704856] leading-relaxed font-normal">
            Choose from our proposed atelier categories. Each discipline is customized during your consultation according to your hair profile, skin sensitivity, and desired finish.
          </p>

          {/* Honest Proposed Category Disclosure */}
          <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-[#704856] bg-[#FFF0F5] py-1.5 px-4 rounded-full border border-[#FBCFE8] shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#E05780]" />
            <span>Proposed menu categories · Final pricing and timeline tailored upon personal consultation</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {SALON_CONFIG.serviceCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#E05780] to-[#D6336C] text-[#FFFFFF] shadow-md scale-105 border border-[#FBCFE8]/50'
                    : 'bg-[#FFF0F5] text-[#704856] hover:text-[#2A111E] border border-[#FBCFE8] hover:border-[#E05780]/40 shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid for Active Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#FFFFFF] rounded-3xl border border-[#FBCFE8] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#E05780]/60 hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#1F0B16]">
                  <img
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B16]/80 via-transparent to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] font-semibold text-[#2A111E] border border-[#FBCFE8] shadow-sm">
                    Proposed Service
                  </div>

                  {/* Price & Duration Overlays */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-white">
                    {service.duration && (
                      <span className="flex items-center gap-1 text-[11px] text-[#F9A8D4]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{service.duration}</span>
                      </span>
                    )}
                    {service.price && (
                      <span className="flex items-center gap-1 font-serif text-sm font-semibold text-[#FFFFFF]">
                        <Tag className="w-3.5 h-3.5 text-[#F9A8D4]" />
                        <span>{service.price}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-7">
                  <h3 className="font-serif text-2xl font-semibold text-[#2A111E] group-hover:text-[#E05780] transition-colors leading-snug">
                    {service.name}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#704856] leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#2A111E]/90 font-normal">
                        <span className="mt-0.5 w-3.5 h-3.5 rounded-full bg-[#FFF0F5] text-[#E05780] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Working CTA */}
              <div className="px-7 pb-7 pt-0">
                <div className="pt-4 border-t border-[#FBCFE8] flex items-center justify-between gap-4">
                  <span className="text-[11px] text-[#704856]/70 italic">
                    Consultation advised
                  </span>

                  <button
                    onClick={() => onSelectService(service.name)}
                    className="group/btn px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-[#FFFFFF] bg-gradient-to-r from-[#E05780] to-[#D6336C] hover:from-[#D6336C] hover:to-[#BE185D] border border-[#FBCFE8]/30 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
                  >
                    <span>Select Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FFFFFF] transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
