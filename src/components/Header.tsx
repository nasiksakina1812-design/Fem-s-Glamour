import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'services', 'gallery', 'reviews', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm border-b border-[#EFCACA] py-3'
          : 'bg-[#FFFFFF] border-b border-[#FBF0F0] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Refined Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex flex-col whitespace-nowrap shrink-0"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.1em] text-[#5A2331] group-hover:text-[#873E4F] transition-colors leading-none">
              FEM’S GLAMOUR
            </span>
          </a>

          {/* Zone 2: Spacious Navigation with Animated Underlines */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#5A2331]/80">
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
                    isActive ? 'text-[#873E4F] font-semibold' : 'hover:text-[#873E4F]'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Animated underline in blush rose */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#D48E92] transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Blush Rose Booking Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleBookAction}
              className="group hidden sm:inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#873E4F] rounded-full hover:bg-[#5A2331] border border-[#EFCACA] transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F6E2E2] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-xl text-[#5A2331] hover:bg-[#FBF0F0] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#EFCACA] px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {SALON_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium uppercase tracking-wider text-[#5A2331] py-2 border-b border-[#FBF0F0] hover:text-[#873E4F] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={handleBookAction}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#873E4F] rounded-full shadow-sm active:scale-95 transition-transform"
              >
                Book an Appointment
              </button>

              <a
                href={SALON_CONFIG.phoneTel}
                className="w-full py-2.5 flex items-center justify-center gap-2 text-xs font-medium tracking-wide text-[#5A2331] bg-[#FBF0F0] rounded-full border border-[#EFCACA]"
              >
                <Phone className="w-3.5 h-3.5 text-[#873E4F]" />
                Call {SALON_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
