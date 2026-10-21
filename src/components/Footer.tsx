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
    <footer className="bg-[#FBF0F0] text-[#5A2331] border-t border-[#EFCACA] pt-16 pb-24 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#EFCACA]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.1em] text-[#5A2331] hover:text-[#873E4F] transition-colors inline-block"
            >
              FEM’S GLAMOUR
            </a>

            <p className="text-xs sm:text-sm text-[#5A2331]/80 leading-relaxed max-w-sm font-normal">
              A boutique South Mumbai salon dedicated to personalized beauty care, precision hair styling, radiant skincare therapies, and timeless bridal artistry.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-[#873E4F]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D48E92] text-[#D48E92]" />
                ))}
              </div>
              <span className="font-bold tabular-nums text-[#5A2331]">{SALON_CONFIG.googleRating} / 5</span>
              <span className="text-[#EFCACA]">·</span>
              <span className="text-[#5A2331]/80 tabular-nums">{SALON_CONFIG.googleReviewCount.toLocaleString()} Google Reviews</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#873E4F]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#5A2331]/80">
              {SALON_CONFIG.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="hover:text-[#873E4F] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#booking"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#booking');
                  }}
                  className="text-[#873E4F] hover:underline font-semibold"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Salon Information */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#873E4F]">
              Salon Information
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#5A2331]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#873E4F] shrink-0 mt-0.5" />
                <span>{SALON_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#873E4F] shrink-0" />
                <a
                  href={SALON_CONFIG.phoneTel}
                  className="hover:text-[#873E4F] font-semibold transition-colors"
                >
                  {SALON_CONFIG.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[11px] text-[#873E4F]/80 italic">
                {SALON_CONFIG.hoursNotice}
              </p>
            </div>
          </div>

        </div>

        {/* Quiet Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A2331]/70">
          <p>© {new Date().getFullYear()} Fem’s Glamour. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#873E4F] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#873E4F]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
