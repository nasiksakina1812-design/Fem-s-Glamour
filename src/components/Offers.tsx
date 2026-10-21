import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Calendar, HeartHandshake } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

interface OffersProps {
  onEnquireOffer?: () => void;
}

export const Offers: React.FC<OffersProps> = ({ onEnquireOffer }) => {
  const offer = SALON_CONFIG.seasonalOffer;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  // Hide the section when no valid offer is configured
  if (!offer || !offer.active) {
    return null;
  }

  const handleAction = () => {
    if (onEnquireOffer) {
      onEnquireOffer();
    } else {
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 relative overflow-hidden border-b border-[#FBCFE8]"
      aria-label="Seasonal Atelier Feature"
    >
      {/* 1. Scrolling Parallax Background Image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[25%] -bottom-[25%] w-full h-[150%] z-0 pointer-events-none parallax-bg"
      >
        <img
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury bridal and beauty editorial styling background"
          className="w-full h-full object-cover object-center opacity-25"
        />
      </motion.div>

      {/* 2. Soft Pink & White Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/96 via-[#FFF5F8]/90 to-[#FFFFFF]/96 backdrop-blur-[3px] z-1" />

      {/* Ambient Pink Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 rounded-full bg-[#FCE7F3]/70 blur-3xl pointer-events-none z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="bg-[#FFFFFF]/95 rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#FBCFE8] shadow-2xl backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#E05780] to-[#D6336C] text-[#FFFFFF] text-[10px] uppercase tracking-[0.22em] font-semibold shadow-sm">
              <Sparkles className="w-3 h-3 text-[#FFFFFF] animate-pulse-glow" />
              <span>{offer.badge}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2A111E] leading-tight text-balance">
              {offer.headline}
            </h3>

            <p className="text-xs sm:text-base text-[#704856] leading-relaxed font-normal">
              {offer.subheading}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-[#704856]/85">
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-[#E05780]" />
                Personalized Consultation
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#E05780]" />
                Advance Reservation Recommended
              </span>
            </div>

            <p className="text-[11px] text-[#704856]/60 italic pt-1">
              * {offer.notice}
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 w-full lg:w-auto justify-center">
            <button
              onClick={handleAction}
              className="w-full sm:w-auto group px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-[#FFFFFF] bg-gradient-to-r from-[#E05780] to-[#D6336C] hover:from-[#D6336C] hover:to-[#BE185D] border border-[#FBCFE8]/40 shadow-[0_4px_16px_rgba(224,87,128,0.3)] hover:shadow-[0_8px_24px_rgba(224,87,128,0.45)] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{offer.ctaText}</span>
              <ArrowRight className="w-4 h-4 text-[#FFFFFF] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
