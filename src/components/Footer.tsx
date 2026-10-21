import React from 'react';
import { Phone, MapPin, ArrowUp, Star } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FFF8FA] text-[#2A111E] border-t border-[#FBCFE8] pt-16 pb-24 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#FBCFE8]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.14em] text-[#2A111E] hover:text-[#E05780] transition-colors inline-block"
            >
              FEM’S GLAMOUR
            </a>

            <p className="text-xs uppercase tracking-[0.25em] text-[#D6336C] font-medium">
              The Modern Beauty Atelier
            </p>

            <p className="text-xs sm:text-sm text-[#704856] leading-relaxed max-w-sm font-normal">
              A contemporary South Mumbai salon dedicated to personalized beauty care, precision hair styling, bespoke colour dimensions, radiant skincare therapies, and timeless bridal artistry.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-[#E05780]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#E05780] text-[#E05780]" />
                ))}
              </div>
              <span className="font-bold tabular-nums text-[#2A111E]">{SALON_CONFIG.googleRating} / 5</span>
              <span className="text-[#E05780]/60">·</span>
              <span className="text-[#704856] tabular-nums">{SALON_CONFIG.googleReviewCount.toLocaleString()} Google Reviews</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6336C]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#704856]">
              {SALON_CONFIG.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="hover:text-[#E05780] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Salon Information */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6336C]">
              Atelier Information
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#704856]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E05780] shrink-0 mt-0.5" />
                <span>{SALON_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E05780] shrink-0" />
                <a
                  href={SALON_CONFIG.phoneTel}
                  className="hover:text-[#E05780] font-semibold transition-colors font-mono text-[#2A111E]"
                >
                  {SALON_CONFIG.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[11px] text-[#704856]/80 italic">
                {SALON_CONFIG.hoursNotice}
              </p>
            </div>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#704856]/70">
          <p>© {new Date().getFullYear()} Fem’s Glamour. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#E05780] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E05780]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
