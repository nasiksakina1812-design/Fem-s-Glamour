import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

interface HeaderProps {
  onBookClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sectionIds = ['hero', 'transformations', 'about', 'services', 'beauty-edit', 'lookbook', 'reviews', 'location'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookAction = () => {
    setMobileMenuOpen(false);
    if (onBookClick) {
      onBookClick();
    } else {
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm border-b border-[#FBCFE8] py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 lg:gap-8">
          
          {/* Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex flex-col whitespace-nowrap shrink-0"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.14em] text-[#2A111E] group-hover:text-[#E05780] transition-colors leading-none">
              FEM’S GLAMOUR
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#D6336C] font-medium mt-1">
              The Modern Atelier · Mumbai
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-medium text-[#704856]">
            {SALON_CONFIG.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 group ${
                    isActive ? 'text-[#2A111E] font-semibold' : 'hover:text-[#E05780]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#E05780] transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Action: Clean Primary Appointment Button in White & Pink */}
          <div className="flex items-center gap-3.5 shrink-0">
            <button
              onClick={handleBookAction}
              className="group hidden sm:inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FFFFFF] bg-gradient-to-r from-[#E05780] via-[#D6336C] to-[#BE185D] hover:from-[#D6336C] hover:to-[#9D174D] rounded-full border border-[#FBCFE8]/40 transition-all shadow-[0_4px_14px_rgba(224,87,128,0.3)] hover:shadow-[0_6px_20px_rgba(224,87,128,0.45)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Book An Appointment</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FFFFFF] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="xl:hidden p-2.5 rounded-2xl bg-[#FFFFFF] border border-[#FBCFE8] text-[#2A111E] hover:bg-[#FFF0F5] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FFFFFF] border-b border-[#FBCFE8] px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-3.5">
            {SALON_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium uppercase tracking-wider text-[#2A111E] py-2 border-b border-[#FFF0F5] hover:text-[#E05780] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#E05780] font-mono">&rarr;</span>
              </a>
            ))}

            <div className="pt-3">
              <button
                onClick={handleBookAction}
                className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-gradient-to-r from-[#E05780] to-[#D6336C] hover:from-[#D6336C] hover:to-[#BE185D] rounded-full shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#FFFFFF]" />
                <span>Book An Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
