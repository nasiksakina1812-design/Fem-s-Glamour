import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

interface MobileBookingBarProps {
  onBookClick?: () => void;
}

export const MobileBookingBar: React.FC<MobileBookingBarProps> = ({ onBookClick }) => {
  const handleBook = () => {
    if (onBookClick) {
      onBookClick();
    } else {
      const el = document.getElementById('booking');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      aria-label="Quick Mobile Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#EFCACA] px-4 py-2.5 shadow-2xl"
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={SALON_CONFIG.phoneTel}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#5A2331] bg-[#FBF0F0] border border-[#EFCACA] active:scale-95 transition-all text-center whitespace-nowrap shrink-0"
        >
          <Phone className="w-3.5 h-3.5 text-[#873E4F]" />
          <span>Call Salon</span>
        </a>

        {/* Book / Enquire Button */}
        <button
          onClick={handleBook}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#873E4F] border border-[#EFCACA] shadow-md active:scale-95 transition-all text-center whitespace-nowrap shrink-0 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-[#F6E2E2]" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
};
