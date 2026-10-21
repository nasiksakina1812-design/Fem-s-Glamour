import React, { useState } from 'react';
import { Sparkles, Scissors, Heart, Flower2, Droplets, Sun, Sparkle } from 'lucide-react';

interface VisualCardProps {
  type: 'hero' | 'about' | 'hair-waves' | 'bridal-glam' | 'skincare-facial' | 'balayage-tones' | 'champagne-nails' | 'evening-glam' | 'service';
  title?: string;
  category?: string;
  imageUrl?: string;
  alt?: string;
  className?: string;
}

/**
 * Editorial Rotating Circular Badge in Blush Pink & White
 */
export const CircularTextBadge: React.FC<{ text?: string; className?: string }> = ({
  text = "• FEM’S GLAMOUR • SOUTH MUMBAI • PRIVATE SALON •",
  className = ""
}) => {
  return (
    <div className={`relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center ${className}`}>
      {/* Rotating SVG Text Ring */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full animate-spin-slow pointer-events-none select-none text-[#873E4F]"
      >
        <path
          id="circlePath"
          d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          fill="none"
        />
        <text className="text-[7.8px] font-sans uppercase tracking-[0.28em] fill-current font-medium">
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center Icon Crest */}
      <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#EFCACA] text-[#873E4F] flex items-center justify-center shadow-md">
        <Sparkles className="w-4 h-4 text-[#D48E92]" />
      </div>
    </div>
  );
};

/**
 * Editorial Blush Watercolor Brushstroke
 */
export const BlushBrushstroke: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 300 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      <path
        d="M10 40C45 20 85 45 130 35C175 25 210 50 250 38C275 30 290 42 295 40"
        stroke="#F6E2E2"
        strokeWidth="34"
        strokeLinecap="round"
        strokeOpacity="0.85"
        filter="blur(5px)"
      />
      <path
        d="M25 45C60 30 110 50 160 38C210 26 250 48 285 42"
        stroke="#EFCACA"
        strokeWidth="14"
        strokeLinecap="round"
        strokeOpacity="0.6"
        filter="blur(2px)"
      />
    </svg>
  );
};

/**
 * Editorial Luxury Visual Container - Blush Pink & White
 */
export const VisualMedia: React.FC<VisualCardProps> = ({
  type,
  title = "Fem’s Glamour",
  category = "Editorial Beauty",
  imageUrl,
  alt = "Fem’s Glamour editorial beauty",
  className = ""
}) => {
  const [imgError, setImgError] = useState(false);

  // If real image URL is loaded, display with delicate blush border and soft scrim
  if (imageUrl && !imgError) {
    return (
      <div className={`relative overflow-hidden rounded-3xl group ${className}`}>
        <img
          src={imageUrl}
          alt={alt}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Soft blush-rose photo overlay gradient for cohesion */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#5A2331]/80 via-transparent to-[#FBF0F0]/10 pointer-events-none" />

        {/* Delicate white & blush border */}
        <div className="absolute inset-0 rounded-3xl border border-[#EFCACA]/60 pointer-events-none group-hover:border-[#D48E92] transition-colors" />

        {/* Bottom subtle editorial caption */}
        {title && (
          <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between text-white pointer-events-none">
            <div>
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#F6E2E2] font-semibold block">
                {category}
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-medium tracking-tight text-white">
                {title}
              </h4>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-[#FBF0F0]/90 font-mono">
              FG · MUMBAI
            </span>
          </div>
        )}
      </div>
    );
  }

  // Fallback vector luxury containers in Blush Pink & White
  if (type === 'hero') {
    return (
      <div className={`relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#FBF0F0] via-[#F6E2E2] to-[#FFFFFF] p-6 sm:p-8 flex flex-col justify-between text-[#5A2331] border border-[#EFCACA] shadow-xl ${className}`}>
        {/* Decorative concentric geometry */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 500 650" fill="none">
            <circle cx="250" cy="220" r="190" stroke="#D48E92" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="250" cy="220" r="230" stroke="#EFCACA" strokeWidth="0.75" />
            <path d="M250 20 L250 630" stroke="#EFCACA" strokeWidth="0.5" />
            <rect x="25" y="25" width="450" height="600" rx="20" stroke="#D48E92" strokeWidth="1" />
          </svg>
        </div>

        {/* Ambient warm blush glows */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#FFFFFF]/80 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#EFCACA]/50 blur-3xl pointer-events-none" />

        {/* Top Header Stamp */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#EFCACA] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D48E92]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#873E4F] font-semibold">South Mumbai Studio</span>
          </div>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#873E4F]/75">Princess Building · JJ Flyover</span>
        </div>

        {/* Central Silhouette Vector in Blush & Rose */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center py-4">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-[#D48E92]/60 p-2 flex items-center justify-center bg-gradient-to-b from-[#FFFFFF] to-[#FBF0F0] shadow-md">
            <div className="w-full h-full rounded-full border border-[#EFCACA] flex flex-col items-center justify-center relative overflow-hidden bg-white/60">
              <svg viewBox="0 0 200 200" className="w-36 h-36 text-[#873E4F]" fill="none">
                <path
                  d="M100 25 C120 25, 138 38, 142 58 C145 74, 138 90, 130 102 C122 114, 118 126, 122 140 C125 152, 135 162, 148 168 C132 172, 112 170, 96 160 C80 150, 72 134, 70 116 C68 96, 75 78, 82 60 C88 45, 93 30, 100 25 Z"
                  fill="url(#blushGradHero)"
                  opacity="0.9"
                />
                <circle cx="120" cy="72" r="2.5" fill="#5A2331" />
                <path d="M125 84 Q120 88 116 87" stroke="#5A2331" strokeWidth="1.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="blushGradHero" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#873E4F" />
                    <stop offset="0.5" stopColor="#BC6E74" />
                    <stop offset="1" stopColor="#D48E92" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute top-5 right-5">
                <Sparkles className="w-5 h-5 text-[#873E4F] animate-pulse" />
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="font-serif italic text-lg sm:text-xl text-[#5A2331] tracking-wide">
              Bespoke Hair, Skincare & Bridal Styling
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-[#873E4F] mt-1 font-semibold">
              Curated for Modern Elegance
            </p>
          </div>
        </div>

        {/* Bottom Editorial Badge */}
        <div className="relative z-10 flex items-center justify-between border-t border-[#EFCACA] pt-3 text-xs text-[#5A2331]/80">
          <div>
            <span className="block font-serif text-lg text-[#873E4F] font-bold leading-none">4.7 / 5</span>
            <span className="text-[11px] text-[#873E4F]/80">2,128 Verified Google Reviews</span>
          </div>
          <div className="text-right">
            <span className="block text-[11px] text-[#873E4F] uppercase tracking-wider font-semibold">Fem’s Glamour</span>
            <span className="text-[11px] text-[#873E4F]/80">Private Consultation</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'about') {
    return (
      <div className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#FBF0F0] to-[#F6E2E2] p-8 flex flex-col justify-between border border-[#EFCACA] shadow-lg ${className}`}>
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
            <circle cx="200" cy="150" r="120" stroke="#873E4F" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M50 250 C120 180, 280 180, 350 250" stroke="#D48E92" strokeWidth="1.5" />
            <rect x="20" y="20" width="360" height="260" rx="16" stroke="#EFCACA" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 flex justify-between items-start">
          <span className="text-xs uppercase tracking-[0.2em] text-[#873E4F] font-semibold">The Sanctuary</span>
          <span className="text-xs text-[#873E4F]/75 font-serif italic">1st Floor · Princess Building</span>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4">
          <div className="w-16 h-16 rounded-full bg-[#FFFFFF] text-[#873E4F] flex items-center justify-center mb-4 shadow-md border border-[#EFCACA]">
            <Flower2 className="w-8 h-8 text-[#873E4F]" />
          </div>
          <h4 className="font-serif text-2xl text-[#5A2331] font-medium leading-tight">
            A Thoughtful Beauty Retreat
          </h4>
          <p className="text-xs text-[#5A2331]/75 mt-2 max-w-sm">
            Calm ambience, attentive listeners, and tailored beauty treatments in the heart of South Mumbai.
          </p>
        </div>

        <div className="relative z-10 flex justify-between items-center text-[11px] text-[#5A2331]/70 border-t border-[#EFCACA] pt-3">
          <span>Gentle Care & Clean Tools</span>
          <span className="text-[#873E4F] font-semibold">JJ Flyover Junction</span>
        </div>
      </div>
    );
  }

  // Gallery Card Visuals in Blush & White
  const galleryThemes: Record<string, { icon: React.ReactNode; bg: string; symbol: string; badge: string }> = {
    'hair-waves': {
      icon: <Scissors className="w-6 h-6 text-[#873E4F]" />,
      bg: "from-[#FFFFFF] via-[#FBF0F0] to-[#F6E2E2]",
      symbol: "Waves & Gloss",
      badge: "Hair Artistry"
    },
    'bridal-glam': {
      icon: <Sparkles className="w-6 h-6 text-[#873E4F]" />,
      bg: "from-[#FBF0F0] via-[#F6E2E2] to-[#EFCACA]/60",
      symbol: "Regal Elegance",
      badge: "Bridal Suite"
    },
    'skincare-facial': {
      icon: <Droplets className="w-6 h-6 text-[#873E4F]" />,
      bg: "from-[#FFFFFF] via-[#F8E8E8] to-[#F6E2E2]",
      symbol: "Hydra Replenish",
      badge: "Skin Radiance"
    },
    'balayage-tones': {
      icon: <Sun className="w-6 h-6 text-[#873E4F]" />,
      bg: "from-[#FBF0F0] via-[#FFFFFF] to-[#F6E2E2]",
      symbol: "Dimension & Shine",
      badge: "Colour Studio"
    },
    'champagne-nails': {
      icon: <Heart className="w-6 h-6 text-[#873E4F]" />,
      bg: "from-[#FFFFFF] via-[#FBF0F0] to-[#EFCACA]/50",
      symbol: "Blush Details",
      badge: "Nail Care"
    },
    'evening-glam': {
      icon: <Sparkle className="w-6 h-6 text-[#873E4F]" />,
      bg: "from-[#FBF0F0] via-[#F6E2E2] to-[#FFFFFF]",
      symbol: "Velvet & Rose",
      badge: "Evening Artistry"
    }
  };

  const theme = galleryThemes[type] || galleryThemes['hair-waves'];

  return (
    <div className={`group relative w-full h-full min-h-[260px] rounded-3xl overflow-hidden bg-gradient-to-br ${theme.bg} p-6 flex flex-col justify-between text-[#5A2331] border border-[#EFCACA] transition-all duration-300 hover:border-[#D48E92] hover:shadow-xl ${className}`}>
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#873E4F] font-semibold">
          {theme.badge}
        </span>
        <div className="w-8 h-8 rounded-full bg-[#FFFFFF] flex items-center justify-center border border-[#EFCACA] shadow-sm group-hover:scale-110 transition-transform">
          {theme.icon}
        </div>
      </div>

      <div className="relative z-10 my-auto py-4 text-center">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#873E4F]/75 block mb-1 font-semibold">
          {theme.symbol}
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#5A2331] group-hover:text-[#873E4F] transition-colors">
          {title}
        </h3>
        <p className="text-xs text-[#5A2331]/75 mt-2 line-clamp-2 max-w-xs mx-auto">
          {category}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-[#EFCACA] pt-3 text-[11px] text-[#873E4F]">
        <span>Fem’s Glamour</span>
        <span className="font-semibold group-hover:underline">View In Fullscreen &rarr;</span>
      </div>
    </div>
  );
};
