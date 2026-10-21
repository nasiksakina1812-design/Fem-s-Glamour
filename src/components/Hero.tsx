import React from 'react';
import { Star, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';
import { VisualMedia, CircularTextBadge, BlushBrushstroke } from './VisualMedia';

interface HeroProps {
  onBookClick?: () => void;
  onExploreServices?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreServices }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 sm:pt-32 pb-16 lg:pb-24 overflow-hidden bg-[#FFFFFF]">
      {/* Decorative Blush Pink and White Glows */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-blush-wash pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-[#F6E2E2]/50 blur-3xl pointer-events-none" />

      {/* Subtle Editorial Serial Watermark */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 text-[10vw] font-serif font-bold text-[#873E4F]/[0.03] tracking-[0.2em] whitespace-nowrap select-none pointer-events-none uppercase">
        FEM’S GLAMOUR
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetrical Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-10">
            
            {/* Small uppercase eyebrow in Blush Rose */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#873E4F] font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D48E92]" />
              <span>South Mumbai Beauty Sanctuary</span>
              <span aria-hidden="true" className="text-[#D48E92]">·</span>
              <span className="text-[#BC6E74] font-normal">Princess Building</span>
            </div>

            {/* Oversized Headline with Italic Accent */}
            <div className="relative">
              <div className="absolute -top-4 -left-6 w-72 h-20 -z-10 opacity-70">
                <BlushBrushstroke />
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#5A2331] font-semibold leading-[1.05] tracking-tight text-balance">
                Your Beauty. <br />
                <span className="italic font-normal text-[#873E4F] pr-2">Your Signature.</span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="mt-6 text-base sm:text-lg text-[#5A2331]/80 leading-relaxed max-w-xl font-normal">
              {SALON_CONFIG.supportingCopy}
            </p>

            {/* Verified Google Review Proof Strip in Soft Blush & White */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 py-3.5 px-5 bg-[#FBF0F0] border border-[#EFCACA] rounded-2xl max-w-lg shadow-sm">
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#D48E92]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D48E92] text-[#D48E92]" />
                  ))}
                </div>
                <span className="font-serif text-xl font-bold text-[#5A2331] ml-1 tabular-nums">
                  {SALON_CONFIG.googleRating}
                </span>
                <span className="text-xs text-[#5A2331]/60 font-sans">/ 5</span>
              </div>

              <div className="h-4 w-px bg-[#EFCACA] hidden sm:block" />

              <div className="text-xs text-[#5A2331]/85 font-medium">
                <span className="font-bold text-[#5A2331] tabular-nums">
                  {SALON_CONFIG.googleReviewCount.toLocaleString()}
                </span>{' '}
                Verified Reviews
              </div>

              <div className="h-4 w-px bg-[#EFCACA] hidden sm:block" />

              <div className="flex items-center gap-1 text-xs text-[#873E4F]">
                <MapPin className="w-3.5 h-3.5 text-[#D48E92] shrink-0" />
                <span>JJ Flyover Junction</span>
              </div>
            </div>

            {/* Dual CTAs in Blush Rose & White */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => (onBookClick ? onBookClick() : scrollTo('booking'))}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white bg-[#873E4F] rounded-full hover:bg-[#5A2331] border border-[#EFCACA] shadow-md hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Book Your Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#F6E2E2] transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              <button
                onClick={() => (onExploreServices ? onExploreServices() : scrollTo('services'))}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase text-[#5A2331] bg-[#FFFFFF] hover:bg-[#FBF0F0] rounded-full border border-[#EFCACA] shadow-sm transition-all cursor-pointer"
              >
                Explore Our Services
              </button>
            </div>

            {/* Quiet Editorial Category Ticker */}
            <div className="mt-8 flex items-center gap-2 text-xs text-[#5A2331]/65">
              <Sparkles className="w-3.5 h-3.5 text-[#D48E92]" />
              <span>Hair Styling</span>
              <span aria-hidden="true" className="text-[#EFCACA]">/</span>
              <span>Luminous Treatments</span>
              <span aria-hidden="true" className="text-[#EFCACA]">/</span>
              <span>Skincare</span>
              <span aria-hidden="true" className="text-[#EFCACA]">/</span>
              <span>Occasion & Bridal</span>
            </div>

          </div>

          {/* Right Column: Beauty Portrait with Blush & White Framing */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              <VisualMedia
                type="hero"
                imageUrl="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
                alt="Fem’s Glamour editorial beauty portrait"
                title="Your Signature Radiance"
                category="Haute Salon Experience"
                className="w-full aspect-[4/5] rounded-3xl shadow-xl"
              />

              {/* Decorative Rotating Circular Text Badge */}
              <div className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 z-20">
                <CircularTextBadge text="• FEM’S GLAMOUR • SOUTH MUMBAI • PRIVATE SALON •" />
              </div>

              {/* Top-Right Decorative Stamp */}
              <div className="absolute -top-4 -right-4 z-20 px-4 py-2 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#EFCACA] rounded-full shadow-md text-[10px] uppercase tracking-[0.25em] text-[#873E4F] font-semibold hidden sm:flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D48E92]" />
                <span>Est. South Mumbai</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
