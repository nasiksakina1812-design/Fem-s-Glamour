import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, SlidersHorizontal, CheckCircle2, RefreshCw } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

interface TransformationProps {
  onViewLookbook?: () => void;
  onEnquireLook?: (lookTitle: string) => void;
}

export const Transformation: React.FC<TransformationProps> = ({
  onViewLookbook,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isSwapped, setIsSwapped] = useState<boolean>(true); // Swapped by default
  const comparisonContainerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll on section background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const bgParallaxY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSliderMove = (clientX: number) => {
    if (!comparisonContainerRef.current) return;
    const rect = comparisonContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleSliderMove(e.clientX);
  };

  // Swapped images
  const picA = {
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80',
    label: 'Salon Transformation: Balayage Gloss',
    badge: 'After: Salon Finish'
  };

  const picB = {
    url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1400&q=80',
    label: 'Initial Profile: Natural Texture',
    badge: 'Before: Natural Baseline'
  };

  const leftPic = isSwapped ? picA : picB;
  const rightPic = isSwapped ? picB : picA;

  return (
    <section
      ref={sectionRef}
      id="transformations"
      className="py-20 lg:py-28 relative overflow-hidden border-b border-[#FBCFE8]"
    >
      {/* 1. Scrolling Parallax Background Image */}
      <motion.div
        style={{ y: bgParallaxY }}
        className="absolute inset-0 -top-[25%] -bottom-[25%] w-full h-[150%] z-0 pointer-events-none parallax-bg"
      >
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=2000&q=80"
          alt="Salon atelier atmosphere background"
          className="w-full h-full object-cover object-center opacity-20"
        />
      </motion.div>

      {/* 2. Soft Pink & White Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF]/96 via-[#FFF5F8]/92 to-[#FFFFFF]/96 backdrop-blur-[2px] z-1" />

      {/* Ambient Pink Glows */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-[#FCE7F3]/60 blur-3xl pointer-events-none z-1" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-[#FDF2F8]/60 blur-3xl pointer-events-none z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D6336C] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#E05780]" />
              <span>Makeover Atelier</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A111E] font-semibold tracking-tight text-balance">
              Signature <span className="italic font-normal text-[#E05780]">Transformations</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#704856] max-w-xl font-normal leading-relaxed">
              From dimensional sunlit balayage to couture bridal draping and precision bob architecture, explore looks designed to celebrate personal elegance.
            </p>
          </div>

          <button
            onClick={() => (onViewLookbook ? onViewLookbook() : scrollTo('lookbook'))}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#2A111E] bg-[#FFF0F5] hover:bg-[#FFFFFF] border border-[#FBCFE8] transition-all shadow-sm shrink-0 self-start md:self-auto cursor-pointer"
          >
            <span>View Full Lookbook</span>
            <ArrowRight className="w-4 h-4 text-[#E05780] transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Interactive Before & After Comparison Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div className="flex items-center gap-2 text-xs font-medium text-[#704856]">
              <span className="font-semibold uppercase tracking-wider text-[#D6336C]">Interactive Visualizer:</span>
              <span>Slide cursor or finger to compare treatment finish</span>
            </div>

            {/* Quick Swap Button */}
            <button
              onClick={() => setIsSwapped(!isSwapped)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D6336C] hover:text-[#2A111E] px-3 py-1.5 rounded-full bg-[#FFF0F5] border border-[#FBCFE8] transition-all hover:shadow-sm"
              title="Reverse Before / After views"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Swap View Direction</span>
            </button>
          </div>

          <div
            ref={comparisonContainerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-[#FBCFE8] select-none cursor-ew-resize bg-[#2A111E]"
          >
            {/* Background Image (Right) */}
            <img
              src={rightPic.url}
              alt={rightPic.label}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#FBCFE8] text-[11px] font-semibold tracking-wider uppercase text-[#2A111E] pointer-events-none shadow-md">
              {rightPic.badge}
            </div>

            {/* Foreground Image (Left, clipped by sliderPosition) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={leftPic.url}
                alt={leftPic.label}
                className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                style={{ width: comparisonContainerRef.current ? `${comparisonContainerRef.current.clientWidth}px` : '100%' }}
              />
              <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#FBCFE8] text-[11px] font-semibold tracking-wider uppercase text-[#2A111E] pointer-events-none shadow-md">
                {leftPic.badge}
              </div>
            </div>

            {/* Slider Dividing Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#FFFFFF] shadow-[0_0_12px_rgba(224,87,128,0.6)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 -ml-4.5 top-1/2 -translate-y-1/2 absolute rounded-full bg-[#FFFFFF] border-2 border-[#D6336C] shadow-lg flex items-center justify-center text-[#D6336C] pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-[#704856]">
            <CheckCircle2 className="w-4 h-4 text-[#E05780]" />
            <span>Hydrating bond protection applied during every lifting step</span>
          </div>
        </motion.div>

        {/* Portfolio Feature Cards (Clean editorial gallery without repetitive button spam) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Tall Feature Card (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 group relative rounded-3xl overflow-hidden bg-[#1F0B16] min-h-[420px] sm:min-h-[460px] border border-[#FBCFE8] shadow-xl flex flex-col justify-end p-8"
          >
            <img
              src={SALON_CONFIG.transformations[0].imageUrl}
              alt={SALON_CONFIG.transformations[0].alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B16] via-[#1F0B16]/60 to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#F9A8D4] font-semibold">
                {SALON_CONFIG.transformations[0].category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                {SALON_CONFIG.transformations[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#FFF0F5]/90 max-w-md font-normal">
                {SALON_CONFIG.transformations[0].caption}
              </p>
            </div>
          </motion.div>

          {/* Card 2: Medium Card (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 group relative rounded-3xl overflow-hidden bg-[#1F0B16] min-h-[420px] sm:min-h-[460px] border border-[#FBCFE8] shadow-xl flex flex-col justify-end p-8"
          >
            <img
              src={SALON_CONFIG.transformations[1].imageUrl}
              alt={SALON_CONFIG.transformations[1].alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B16] via-[#1F0B16]/60 to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#F9A8D4] font-semibold">
                {SALON_CONFIG.transformations[1].category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                {SALON_CONFIG.transformations[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#FFF0F5]/90 font-normal">
                {SALON_CONFIG.transformations[1].caption}
              </p>
            </div>
          </motion.div>

          {/* Card 3: Feature Bridal Card (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 group relative rounded-3xl overflow-hidden bg-[#1F0B16] min-h-[360px] border border-[#FBCFE8] shadow-xl flex flex-col justify-end p-8"
          >
            <img
              src={SALON_CONFIG.transformations[2].imageUrl}
              alt={SALON_CONFIG.transformations[2].alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B16] via-[#1F0B16]/60 to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#F9A8D4] font-semibold">
                {SALON_CONFIG.transformations[2].category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                {SALON_CONFIG.transformations[2].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#FFF0F5]/90 font-normal">
                {SALON_CONFIG.transformations[2].caption}
              </p>
            </div>
          </motion.div>

          {/* Card 4: Wide Feature Card (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 group relative rounded-3xl overflow-hidden bg-[#1F0B16] min-h-[360px] border border-[#FBCFE8] shadow-xl flex flex-col justify-end p-8"
          >
            <img
              src={SALON_CONFIG.transformations[3].imageUrl}
              alt={SALON_CONFIG.transformations[3].alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B16] via-[#1F0B16]/60 to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#F9A8D4] font-semibold">
                {SALON_CONFIG.transformations[3].category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                {SALON_CONFIG.transformations[3].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#FFF0F5]/90 max-w-md font-normal">
                {SALON_CONFIG.transformations[3].caption}
              </p>
            </div>
          </motion.div>

        </div>

        {/* Honest Disclosure Note */}
        <div className="mt-8 text-center text-xs text-[#704856]/70 max-w-lg mx-auto">
          <span>* Visual concepts displayed for inspiration. We uphold client privacy and never misrepresent stock photography as verified personal case results.</span>
        </div>

      </div>
    </section>
  );
};
