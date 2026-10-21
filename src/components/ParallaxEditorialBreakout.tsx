import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, ArrowRight, Scissors, Star } from 'lucide-react';

interface ParallaxBreakoutProps {
  onExploreServices?: () => void;
}

export const ParallaxEditorialBreakout: React.FC<ParallaxBreakoutProps> = ({
  onExploreServices
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Smooth parallax translation on the background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-18%', '18%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['30px', '-30px']);
  const cardY = useTransform(scrollYProgress, [0, 1], ['40px', '-40px']);
  const rotateBadge = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[500px] lg:min-h-[580px] flex items-center justify-center overflow-hidden border-y border-[#FBCFE8]"
      aria-label="Salon Atelier Experience"
    >
      {/* 1. Parallax Scrolling Background Image */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -top-[20%] -bottom-[20%] w-full h-[140%] z-0 pointer-events-none parallax-bg"
      >
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=85"
          alt="Fem’s Glamour luxury beauty salon styling stations and mirror reflection"
          className="w-full h-full object-cover object-center scale-105 opacity-25"
        />
      </motion.div>

      {/* 2. Editorial Pink & White Frosted Veil */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/96 via-[#FFF5F8]/90 to-[#FFFFFF]/94 backdrop-blur-[3px] z-1" />

      {/* Subtle radial glow accents in Pink */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FCE7F3]/70 blur-3xl pointer-events-none z-1" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#FDF2F8]/60 blur-3xl pointer-events-none z-1" />

      {/* 3. Floating Interactive Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Editorial Text & Action */}
          <motion.div
            style={{ y: textY }}
            className="lg:col-span-8 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/95 border border-[#FBCFE8] text-xs font-semibold uppercase tracking-[0.22em] text-[#D6336C] shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#E05780]" />
              <span>The Atelier Atmosphere</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#2A111E] font-normal">South Mumbai</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A111E] font-semibold tracking-tight leading-[1.12] text-balance">
              Where quiet luxury meets{' '}
              <span className="italic font-normal text-[#E05780]">transformative artistry.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#704856] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Step into an intimate, light-filled salon on Ramchandra Bhatt Marg. Every cut, color placement, and skin treatment is designed specifically for your personal texture, undertone, and lifestyle.
            </p>

            {/* Single clean action without repeating appointments or phone numbers */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreServices}
                className="group px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-gradient-to-r from-[#E05780] to-[#D6336C] hover:from-[#D6336C] hover:to-[#BE185D] border border-[#FBCFE8]/40 shadow-[0_4px_16px_rgba(224,87,128,0.3)] hover:shadow-[0_8px_24px_rgba(224,87,128,0.45)] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Explore Service Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Floating Luxury Glass Stat Card with Scroll Rotation */}
          <motion.div
            style={{ y: cardY }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm rounded-3xl p-6 sm:p-7 bg-[#FFFFFF]/96 border border-[#FBCFE8] shadow-2xl backdrop-blur-md space-y-5 animate-float-gentle">
              
              <div className="flex items-center justify-between border-b border-[#FBCFE8] pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-[#FFF0F5] border border-[#FBCFE8] flex items-center justify-center text-[#E05780]">
                    <Scissors className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#D6336C] font-semibold">Atelier Standard</p>
                    <p className="font-serif text-sm font-semibold text-[#2A111E]">Fem’s Glamour</p>
                  </div>
                </div>

                <motion.div style={{ rotate: rotateBadge }} className="text-[#E05780]">
                  <Sparkles className="w-5 h-5" />
                </motion.div>
              </div>

              <blockquote className="font-serif italic text-sm text-[#2A111E] leading-relaxed">
                “Every woman walks in with her own story and leaves with renewed confidence and effortless grace.”
              </blockquote>

              <div className="pt-2 border-t border-[#FBCFE8] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[#E05780]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E05780]" />
                  ))}
                </div>
                <span className="font-medium text-[#2A111E]">
                  4.7 · 2,128 Reviews
                </span>
              </div>

              {/* Location Tag */}
              <div className="text-[11px] text-[#704856]/80 bg-[#FFF0F5] p-2.5 rounded-xl border border-[#FBCFE8] text-center">
                Princess Building · JJ Flyover · South Mumbai
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
