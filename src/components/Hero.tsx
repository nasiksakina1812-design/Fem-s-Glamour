import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';
import { VisualMedia, CircularTextBadge, EditorialBrushstroke } from './VisualMedia';

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
    <section id="hero" className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FFF8FA] via-[#FFFFFF] to-[#FFFFFF]">
      {/* Decorative ambient gradients in Pink & White */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FCE7F3]/60 via-[#FDF2F8]/40 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FFF0F5] blur-3xl pointer-events-none" />

      {/* Floating ambient sparkles in Pink */}
      <div className="absolute top-36 left-12 text-[#E05780]/40 pointer-events-none hidden lg:block animate-float-gentle">
        <Sparkles className="w-5 h-5" />
      </div>
      <div className="absolute top-1/2 right-16 text-[#E05780]/30 pointer-events-none hidden lg:block animate-float-reverse">
        <Sparkles className="w-6 h-6" />
      </div>

      {/* Oversized decorative watermark in background */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 text-[14vw] font-serif font-bold text-[#E05780]/[0.05] tracking-[0.18em] whitespace-nowrap select-none pointer-events-none uppercase">
        MODERN ATELIER
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetrical Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center relative z-10"
          >
            
            {/* Small uppercase eyebrow & location tag */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#D6336C] font-semibold mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E05780]" />
              <span>{SALON_CONFIG.hero.locationLabel}</span>
            </motion.div>

            {/* Oversized Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-6 w-72 h-20 -z-10 opacity-70">
                <EditorialBrushstroke />
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#2A111E] font-semibold leading-[1.04] tracking-tight text-balance">
                A little glam. <br />
                <span className="italic font-normal text-[#E05780] pr-2">A lot of you.</span>
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 text-base sm:text-lg text-[#704856] leading-relaxed max-w-lg font-normal"
            >
              {SALON_CONFIG.hero.supportingCopy}
            </motion.p>

            {/* Verified Google Review Proof Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 py-3 px-5 bg-[#FFFFFF] border border-[#FBCFE8] rounded-2xl max-w-md shadow-sm"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#E05780]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E05780] text-[#E05780]" />
                  ))}
                </div>
                <span className="font-serif text-xl font-bold text-[#2A111E] ml-1 tabular-nums">
                  {SALON_CONFIG.googleRating}
                </span>
                <span className="text-xs text-[#704856]/70 font-sans">/ 5</span>
              </div>

              <div className="h-4 w-px bg-[#FBCFE8] hidden sm:block" />

              <div className="text-xs text-[#704856] font-medium">
                <span className="font-bold text-[#2A111E] tabular-nums">
                  {SALON_CONFIG.googleReviewCount.toLocaleString()}
                </span>{' '}
                Verified Google Reviews
              </div>
            </motion.div>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={() => (onBookClick ? onBookClick() : scrollTo('booking'))}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFFFFF] bg-gradient-to-r from-[#E05780] to-[#D6336C] hover:from-[#D6336C] hover:to-[#BE185D] rounded-full border border-[#FBCFE8]/40 shadow-[0_4px_16px_rgba(224,87,128,0.3)] hover:shadow-[0_8px_24px_rgba(224,87,128,0.45)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Book Your Visit</span>
                <ArrowRight className="w-4 h-4 text-[#FFFFFF] transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              <button
                onClick={() => (onExploreServices ? onExploreServices() : scrollTo('services'))}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase text-[#2A111E] bg-[#FFFFFF] hover:bg-[#FFF0F5] rounded-full border border-[#FBCFE8] shadow-sm transition-all cursor-pointer"
              >
                Explore Services
              </button>
            </motion.div>

            {/* Scroll Cue for Desktop */}
            <div className="mt-10 hidden lg:flex items-center gap-2 text-xs text-[#704856]/70 uppercase tracking-[0.2em]">
              <ArrowDown className="w-3.5 h-3.5 text-[#E05780] animate-bounce" />
              <span>{SALON_CONFIG.hero.scrollCue}</span>
            </div>

          </motion.div>

          {/* Right Column: Cinematic Beauty Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-7 flex justify-center relative"
          >
            <div className="relative w-full max-w-xl lg:max-w-none">
              
              <VisualMedia
                type="hero"
                imageUrl="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
                alt="Fem’s Glamour cinematic beauty portrait"
                title="The Modern Beauty Atelier"
                category="Couture Hair & Makeover"
                className="w-full aspect-[4/5] sm:aspect-[16/14] lg:aspect-[16/13] rounded-3xl shadow-xl border border-[#FBCFE8]"
              />

              {/* Decorative Rotating Circular Text Badge */}
              <div className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 z-20">
                <CircularTextBadge text="• THE MODERN BEAUTY ATELIER • SOUTH MUMBAI • FEM'S GLAMOUR •" />
              </div>

              {/* Top-Right Decorative Atelier Stamp */}
              <div className="absolute -top-4 -right-4 z-20 px-4 py-2 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#FBCFE8] rounded-full shadow-lg text-[10px] uppercase tracking-[0.25em] text-[#2A111E] font-semibold hidden sm:flex items-center gap-1.5 animate-float-gentle">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E05780]" />
                <span>JJ Flyover Junction · Mumbai</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
