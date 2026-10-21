import React from 'react';
import { Sparkles } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

export const BeautyManifesto: React.FC = () => {
  const statement = SALON_CONFIG.manifestoText;

  return (
    <section className="py-6 bg-[#FFF0F5] text-[#2A111E] overflow-hidden border-y border-[#FBCFE8] relative">
      <div className="relative w-full flex items-center">
        {/* Continuous Marquee Stream */}
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex items-center gap-12 shrink-0">
              <span className="font-serif text-lg sm:text-2xl font-semibold tracking-[0.22em] text-[#2A111E] uppercase">
                {statement}
              </span>
              <Sparkles className="w-4 h-4 text-[#E05780] shrink-0" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#D6336C] font-medium font-sans">
                Fem’s Glamour Atelier
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E05780] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
