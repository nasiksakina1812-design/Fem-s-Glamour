import React from 'react';
import { HeartHandshake, Sparkles, ShieldCheck, Star } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

export const TrustStrip: React.FC = () => {
  const icons = [
    <HeartHandshake className="w-5 h-5 text-[#873E4F]" key="consult" />,
    <Sparkles className="w-5 h-5 text-[#873E4F]" key="artistry" />,
    <ShieldCheck className="w-5 h-5 text-[#873E4F]" key="hygiene" />,
    <Star className="w-5 h-5 text-[#873E4F]" key="trust" />
  ];

  return (
    <section className="py-10 bg-[#FBF0F0] border-y border-[#EFCACA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SALON_CONFIG.trustValues.map((item, idx) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFFFFF] border border-[#EFCACA] transition-all duration-300 hover:border-[#D48E92] hover:shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F6E2E2] flex items-center justify-center shrink-0 border border-[#EFCACA] shadow-sm mt-0.5">
                {icons[idx]}
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-semibold text-[#5A2331] leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5A2331]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
