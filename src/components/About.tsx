import React from 'react';
import { MapPin, Sparkles, Heart, ShieldCheck } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';
import { VisualMedia, CircularTextBadge, EditorialBrushstroke } from './VisualMedia';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden border-b border-[#FBCFE8]">
      {/* Decorative Brushstroke Wash in Pink */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-tr from-[#FDF2F8]/60 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetrical Salon Photography with Circular Rotating Badge */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative">
              <VisualMedia
                type="about"
                imageUrl="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
                alt="Fem’s Glamour salon interior atmosphere"
                title="The Private Styling Suite"
                category="Princess Building · C-Block"
                className="w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl shadow-xl border border-[#FBCFE8]"
              />

              {/* Decorative Circular Text Badge */}
              <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 z-20">
                <CircularTextBadge text="• TIME FOR YOURSELF • SOUTH MUMBAI • ATTENTIVE CARE •" />
              </div>

              {/* Location Context Strip */}
              <div className="mt-4 p-4 rounded-2xl bg-[#FFF0F5] border border-[#FBCFE8] flex items-start gap-3 text-xs text-[#704856] shadow-sm">
                <MapPin className="w-4 h-4 text-[#E05780] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2A111E]">South Mumbai Sanctuary</p>
                  <p className="text-[#704856]/80 text-[11px] mt-0.5">
                    1st Floor, Princess Building, C-Block, Ramchandra Bhatt Marg (JJ Flyover Junction).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            {/* Small uppercase eyebrow */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D6336C] font-semibold mb-3">
              <span>{SALON_CONFIG.about.eyebrow}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#E05780] font-normal">Our Philosophy</span>
            </div>

            {/* Heading with Italic Word Highlighting */}
            <div className="relative">
              <div className="absolute -top-6 -left-8 w-64 h-20 -z-10 opacity-70">
                <EditorialBrushstroke />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A111E] font-semibold leading-[1.12] text-balance">
                Beauty, with a <br />
                <span className="italic font-normal text-[#E05780]">little more feeling.</span>
              </h2>
            </div>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#704856] leading-relaxed font-normal">
              <p>{SALON_CONFIG.about.copyParagraph1}</p>
              <p>{SALON_CONFIG.about.copyParagraph2}</p>
              <p>{SALON_CONFIG.about.copyParagraph3}</p>
            </div>

            {/* Refined Three Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#FBCFE8]">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#2A111E]">
                  <Heart className="w-4 h-4 text-[#E05780]" />
                  <h3 className="font-serif text-base font-semibold">Attentive Care</h3>
                </div>
                <p className="text-xs text-[#704856]/80 leading-normal">
                  Dedicated one-on-one attention to discuss your desired look before beginning.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#2A111E]">
                  <ShieldCheck className="w-4 h-4 text-[#E05780]" />
                  <h3 className="font-serif text-base font-semibold">Hygiene First</h3>
                </div>
                <p className="text-xs text-[#704856]/80 leading-normal">
                  Carefully sanitized equipment, clean workstations, and gentle products.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#2A111E]">
                  <Sparkles className="w-4 h-4 text-[#E05780]" />
                  <h3 className="font-serif text-base font-semibold">2,128+ Reviews</h3>
                </div>
                <p className="text-xs text-[#704856]/80 leading-normal">
                  Proudly holding a verified 4.7/5 rating on Google from our loyal patrons.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
