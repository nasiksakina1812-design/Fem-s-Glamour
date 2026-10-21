import React from 'react';
import { ArrowUpRight, Check, HelpCircle, PhoneCall } from 'lucide-react';
import { SALON_CONFIG, ServiceCategoryItem } from '../config/salonConfig';
import { VisualMedia } from './VisualMedia';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FBF0F0] border-t border-[#EFCACA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#873E4F] font-semibold mb-3">
            Bespoke Offerings
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#5A2331] font-semibold tracking-tight text-balance">
            Curated <span className="italic font-normal text-[#873E4F]">Beauty Rituals</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5A2331]/75 leading-relaxed font-normal">
            Explore our proposed offerings across hair, skin, bridal, and makeup disciplines. Every treatment is customized to your personal features and lifestyle during your consultation.
          </p>

          {/* Transparent disclaimer on proposed status */}
          <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-[#5A2331]/75 bg-[#FFFFFF] py-1.5 px-4 rounded-full border border-[#EFCACA] shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#873E4F]" />
            <span>Proposed service disciplines · Custom consultations & pricing upon enquiry</span>
          </div>
        </div>

        {/* Six Image-Led Service Cards Grid in Crisp White & Blush Pink */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SALON_CONFIG.services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onEnquire={() => onSelectService(service.name)}
            />
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#FFFFFF] via-[#F6E2E2] to-[#FBF0F0] text-[#5A2331] border border-[#EFCACA] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#873E4F] font-semibold">
              Bespoke Beauty Planning
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#5A2331]">
              Planning a wedding or private occasion?
            </h3>
            <p className="text-xs sm:text-sm text-[#5A2331]/80 max-w-xl">
              Discuss bridal parties, celebration styling groups, or bespoke multi-service rituals directly with our lead stylists.
            </p>
          </div>

          <a
            href={SALON_CONFIG.phoneTel}
            className="group px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white bg-[#873E4F] hover:bg-[#5A2331] rounded-full transition-all shrink-0 active:scale-95 text-center shadow-md flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#F6E2E2]" />
            <span>Call {SALON_CONFIG.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: ServiceCategoryItem;
  index: number;
  onEnquire: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onEnquire }) => {
  const displayIndex = String(index + 1).padStart(2, '0');

  return (
    <div className="group bg-[#FFFFFF] rounded-3xl border border-[#EFCACA] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#D48E92] hover:shadow-xl hover:-translate-y-1.5">
      
      <div>
        {/* Image Carrier with Elegant Caption & Zoom */}
        <div className="relative w-full aspect-[16/11] overflow-hidden bg-[#FBF0F0]">
          <VisualMedia
            type={service.fallbackType as any}
            imageUrl={service.imageUrl}
            alt={service.imageAlt}
            title={service.name}
            category={service.proposedStatus}
            className="w-full h-full rounded-none"
          />

          {/* Number Tag in Top Corner */}
          <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md text-[11px] font-serif font-bold text-[#873E4F] border border-[#EFCACA] shadow-sm tabular-nums">
            {displayIndex}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#873E4F] font-semibold mb-2">
            {service.proposedStatus}
          </div>

          <h3 className="font-serif text-2xl font-semibold text-[#5A2331] group-hover:text-[#873E4F] transition-colors leading-snug">
            {service.name}
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-[#5A2331]/75 leading-relaxed font-normal">
            {service.shortDesc}
          </p>

          {/* Highlights List */}
          <div className="mt-5 space-y-2">
            {service.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#5A2331]/80">
                <span className="mt-0.5 w-3.5 h-3.5 rounded-full bg-[#F6E2E2] text-[#873E4F] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer with Consultation Note & Enquiry CTA */}
      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0">
        <div className="text-[11px] text-[#873E4F] mb-4 italic border-t border-[#FBF0F0] pt-3">
          {service.consultationNote}
        </div>

        <button
          onClick={onEnquire}
          className="group/btn w-full py-3 px-4 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-[#5A2331] bg-[#FBF0F0] group-hover:bg-[#873E4F] group-hover:text-white border border-[#EFCACA] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
        >
          <span>Enquire About Service</span>
          <ArrowUpRight className="w-4 h-4 text-[#873E4F] group-hover:text-white transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
        </button>
      </div>

    </div>
  );
};
