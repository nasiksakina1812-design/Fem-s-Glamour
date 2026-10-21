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
 * Editorial Rotating Circular Badge in Pink & White
 */
export const CircularTextBadge: React.FC<{ text?: string; className?: string }> = ({
  text = "• THE MODERN BEAUTY ATELIER • SOUTH MUMBAI • FEM'S GLAMOUR •",
  className = ""
}) => {
  return (
    <div className={`relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center ${className}`}>
      {/* Rotating SVG Text Ring */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full animate-spin-slow pointer-events-none select-none text-[#E05780]"
      >
        <path
          id="circlePath"
          d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          fill="none"
        />
        <text className="text-[7.4px] font-sans uppercase tracking-[0.27em] fill-current font-medium">
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center Icon Crest */}
      <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-[#FFF0F5] border border-[#FBCFE8] text-[#E05780] flex items-center justify-center shadow-md">
        <Sparkles className="w-4 h-4 text-[#E05780]" />
      </div>
    </div>
  );
};

/**
 * Editorial Watercolor Brushstroke Accent in Pink
 */
export const EditorialBrushstroke: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 300 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      <path
        d="M10 40C45 20 85 45 130 35C175 25 210 50 250 38C275 30 290 42 295 40"
        stroke="#FCE7F3"
        strokeWidth="34"
        strokeLinecap="round"
        strokeOpacity="0.85"
        filter="blur(5px)"
      />
      <path
        d="M25 45C60 30 110 50 160 38C210 26 250 48 285 42"
        stroke="#F9A8D4"
        strokeWidth="14"
        strokeLinecap="round"
        strokeOpacity="0.6"
        filter="blur(2px)"
      />
    </svg>
  );
};

/**
 * Editorial Luxury Visual Container
 */
export const VisualMedia: React.FC<VisualCardProps> = ({
  type,
  title = "Fem’s Glamour",
  category = "Editorial Atelier",
  imageUrl,
  alt = "Fem’s Glamour editorial beauty",
  className = ""
}) => {
  const [imgError, setImgError] = useState(false);

  // If real image URL is loaded, display with delicate pink border and soft scrim
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

        {/* Soft luxury editorial gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B16]/85 via-transparent to-transparent pointer-events-none" />

        {/* Fine border in Pink */}
        <div className="absolute inset-0 rounded-3xl border border-[#FBCFE8] pointer-events-none group-hover:border-[#E05780]/70 transition-colors" />

        {/* Bottom subtle editorial caption */}
        {title && (
          <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between text-white pointer-events-none">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#F9A8D4] font-semibold block">
                {category}
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-medium tracking-tight text-white">
                {title}
              </h4>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-[#F9A8D4] font-mono">
              FG · ATELIER
            </span>
          </div>
        )}
      </div>
    );
  }

  // Fallback vector luxury containers in Pink & White
  if (type === 'hero') {
    return (
      <div className={`relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFF0F5] via-[#FFFFFF] to-[#FCE7F3] p-6 sm:p-8 flex flex-col justify-between text-[#2A111E] border border-[#FBCFE8] shadow-xl ${className}`}>
        {/* Decorative concentric geometry */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <svg className="w-full h-full" viewBox="0 0 500 650" fill="none">
            <circle cx="250" cy="220" r="190" stroke="#E05780" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="250" cy="220" r="230" stroke="#E05780" strokeWidth="0.75" />
            <path d="M250 20 L250 630" stroke="#E05780" strokeWidth="0.5" />
            <rect x="25" y="25" width="450" height="600" rx="20" stroke="#E05780" strokeWidth="1" />
          </svg>
        </div>

        {/* Ambient warm glows */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#FCE7F3] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#FFF0F5] blur-3xl pointer-events-none" />

        {/* Top Header Stamp */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#FBCFE8] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E05780]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D6336C] font-medium">South Mumbai Atelier</span>
          </div>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#704856]/70">Princess Building · JJ Flyover</span>
        </div>

        {/* Central Silhouette Vector with Pink Accents */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center py-4">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-[#FBCFE8] p-2 flex items-center justify-center bg-[#FFFFFF] shadow-sm">
            <div className="w-full h-full rounded-full border border-[#FBCFE8] flex flex-col items-center justify-center relative overflow-hidden bg-[#FFF8FA]">
              <svg viewBox="0 0 200 200" className="w-36 h-36 text-[#E05780]" fill="none">
                <path
                  d="M100 25 C120 25, 138 38, 142 58 C145 74, 138 90, 130 102 C122 114, 118 126, 122 140 C125 152, 135 162, 148 168 C132 172, 112 170, 96 160 C80 150, 72 134, 70 116 C68 96, 75 78, 82 60 C88 45, 93 30, 100 25 Z"
                  fill="url(#pinkGradAtelier)"
                  opacity="0.9"
                />
                <circle cx="120" cy="72" r="2.5" fill="#2A111E" />
                <path d="M125 84 Q120 88 116 87" stroke="#2A111E" strokeWidth="1.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="pinkGradAtelier" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E05780" />
                    <stop offset="0.5" stopColor="#F472B6" />
                    <stop offset="1" stopColor="#F9A8D4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute top-5 right-5">
                <Sparkles className="w-5 h-5 text-[#E05780] animate-pulse" />
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="font-serif italic text-lg sm:text-xl text-[#2A111E] tracking-wide">
              Bespoke Hair, Skincare & Bridal Couture
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D6336C] mt-1 font-medium">
              Curated for Modern Elegance
            </p>
          </div>
        </div>

        {/* Bottom Editorial Badge */}
        <div className="relative z-10 flex items-center justify-between border-t border-[#FBCFE8] pt-3 text-xs text-[#704856]">
          <div>
            <span className="block font-serif text-lg text-[#2A111E] font-bold leading-none">4.7 / 5</span>
            <span className="text-[11px] text-[#D6336C]">2,128 Verified Google Reviews</span>
          </div>
          <div className="text-right">
            <span className="block text-[11px] text-[#2A111E] uppercase tracking-wider font-semibold">Fem’s Glamour</span>
            <span className="text-[11px] text-[#D6336C]">Private Consultation</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'about') {
    return (
      <div className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#FFF8FA] to-[#FFF0F5] p-8 flex flex-col justify-between border border-[#FBCFE8] shadow-lg ${className}`}>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
            <circle cx="200" cy="150" r="120" stroke="#E05780" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M50 250 C120 180, 280 180, 350 250" stroke="#F9A8D4" strokeWidth="1.5" />
            <rect x="20" y="20" width="360" height="260" rx="16" stroke="#E05780" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 flex justify-between items-start">
          <span className="text-xs uppercase tracking-[0.2em] text-[#2A111E] font-semibold">The Sanctuary</span>
          <span className="text-xs text-[#D6336C] font-serif italic">1st Floor · Princess Building</span>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4">
          <div className="w-16 h-16 rounded-full bg-[#FFF0F5] text-[#E05780] flex items-center justify-center mb-4 shadow-sm border border-[#FBCFE8]">
            <Flower2 className="w-8 h-8 text-[#E05780]" />
          </div>
          <h4 className="font-serif text-2xl text-[#2A111E] font-medium leading-tight">
            Beauty, with a little more feeling.
          </h4>
          <p className="text-xs text-[#704856] mt-2 max-w-sm">
            Calm ambience, attentive listeners, and tailored beauty treatments in the heart of South Mumbai.
          </p>
        </div>

        <div className="relative z-10 flex justify-between items-center text-[11px] text-[#704856] border-t border-[#FBCFE8] pt-3">
          <span>Gentle Care & Clean Tools</span>
          <span className="text-[#2A111E] font-semibold">JJ Flyover Junction</span>
        </div>
      </div>
    );
  }

  // Gallery Card Visuals in Pink & White
  const galleryThemes: Record<string, { icon: React.ReactNode; bg: string; symbol: string; badge: string }> = {
    'hair-waves': {
      icon: <Scissors className="w-6 h-6 text-[#E05780]" />,
      bg: "from-[#FFF0F5] via-[#FFFFFF] to-[#FCE7F3]",
      symbol: "Waves & Gloss",
      badge: "Hair Artistry"
    },
    'bridal-glam': {
      icon: <Sparkles className="w-6 h-6 text-[#E05780]" />,
      bg: "from-[#FFFFFF] via-[#FFF0F5] to-[#FCE7F3]",
      symbol: "Regal Elegance",
      badge: "Bridal Suite"
    },
    'skincare-facial': {
      icon: <Droplets className="w-6 h-6 text-[#E05780]" />,
      bg: "from-[#FFF8FA] via-[#FFF0F5] to-[#FFFFFF]",
      symbol: "Hydra Replenish",
      badge: "Skin Radiance"
    },
    'balayage-tones': {
      icon: <Sun className="w-6 h-6 text-[#E05780]" />,
      bg: "from-[#FFF0F5] via-[#FFFFFF] to-[#FCE7F3]",
      symbol: "Dimension & Shine",
      badge: "Colour Studio"
    },
    'champagne-nails': {
      icon: <Heart className="w-6 h-6 text-[#E05780]" />,
      bg: "from-[#FFFFFF] via-[#FFF8FA] to-[#FFF0F5]",
      symbol: "Rose Accents",
      badge: "Nail Care"
    },
    'evening-glam': {
      icon: <Sparkle className="w-6 h-6 text-[#E05780]" />,
      bg: "from-[#FFF0F5] via-[#FFFFFF] to-[#FCE7F3]",
      symbol: "Velvet & Bronze",
      badge: "Evening Artistry"
    }
  };

  const theme = galleryThemes[type] || galleryThemes['hair-waves'];

  return (
    <div className={`group relative w-full h-full min-h-[260px] rounded-3xl overflow-hidden bg-gradient-to-br ${theme.bg} p-6 flex flex-col justify-between text-[#2A111E] border border-[#FBCFE8] transition-all duration-300 hover:border-[#E05780]/70 hover:shadow-xl ${className}`}>
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#D6336C] font-semibold">
          {theme.badge}
        </span>
        <div className="w-8 h-8 rounded-full bg-[#FFF0F5] flex items-center justify-center border border-[#FBCFE8] shadow-sm group-hover:scale-110 transition-transform">
          {theme.icon}
        </div>
      </div>

      <div className="relative z-10 my-auto py-4 text-center">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#E05780] block mb-1 font-semibold">
          {theme.symbol}
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#2A111E] group-hover:text-[#E05780] transition-colors">
          {title}
        </h3>
        <p className="text-xs text-[#704856] mt-2 line-clamp-2 max-w-xs mx-auto">
          {category}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-[#FBCFE8] pt-3 text-[11px] text-[#D6336C]">
        <span>Fem’s Glamour</span>
        <span className="font-semibold group-hover:underline text-[#2A111E]">View In Fullscreen &rarr;</span>
      </div>
    </div>
  );
};
