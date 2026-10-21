import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Copy, Check, Navigation, ExternalLink } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

export const ContactLocation: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALON_CONFIG.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#FBCFE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D6336C] font-semibold mb-3">
            Atelier Location & Directions
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A111E] font-semibold tracking-tight text-balance">
            Find & <span className="italic font-normal text-[#E05780]">Connect</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#704856] leading-relaxed font-normal">
            Centrally situated at Princess Building along Ramchandra Bhatt Marg in South Mumbai. We welcome appointments and consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Details Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Primary Address Card */}
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#FBCFE8] relative shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF0F5] text-[#E05780] flex items-center justify-center shrink-0 border border-[#FBCFE8] shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#2A111E]">Salon Address</h3>
                  <p className="text-xs sm:text-sm text-[#704856] mt-2 leading-relaxed font-normal">
                    {SALON_CONFIG.address}
                  </p>
                  
                  <div className="mt-2 text-xs text-[#D6336C] font-semibold">
                    Landmark: {SALON_CONFIG.landmark}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#2A111E] bg-[#FFF0F5] hover:bg-[#FFFFFF] border border-[#FBCFE8] transition-all cursor-pointer shadow-sm active:scale-95"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Address Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#E05780]" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <a
                      href={SALON_CONFIG.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#FFFFFF] bg-gradient-to-r from-[#E05780] to-[#D6336C] hover:from-[#D6336C] hover:to-[#BE185D] transition-all shadow-sm active:scale-95"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#FFFFFF]" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Telephone & WhatsApp */}
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#FBCFE8] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF0F5] text-[#E05780] flex items-center justify-center shrink-0 border border-[#FBCFE8] shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="font-serif text-2xl font-semibold text-[#2A111E]">Direct Telephone</h3>
                  <p className="text-xs text-[#704856] mt-1 font-normal">
                    Call our salon reception to schedule your appointment.
                  </p>
                  
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={SALON_CONFIG.phoneTel}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-[#2A111E] bg-[#FFF0F5] hover:bg-[#FFFFFF] border border-[#FBCFE8] transition-colors shadow-sm font-mono"
                    >
                      <span>{SALON_CONFIG.phone}</span>
                    </a>

                    <a
                      href={`https://wa.me/${SALON_CONFIG.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-[#2A111E] bg-[#FFF0F5] hover:bg-[#FFFFFF] border border-[#FBCFE8] transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#E05780]" />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Scheduling Notice (Clean and unrepeated) */}
            <div className="p-6 rounded-3xl bg-[#FFF0F5] border border-[#FBCFE8] flex items-start gap-3 text-xs text-[#704856] shadow-sm">
              <Clock className="w-4 h-4 text-[#E05780] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#2A111E] block">Appointment Scheduling</span>
                <span className="text-[#704856]/80 mt-0.5 block font-normal">
                  {SALON_CONFIG.hoursNotice}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Map with Refined Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden border border-[#FBCFE8] shadow-xl relative bg-[#FFFFFF] flex flex-col">
              
              {/* Map Header in Pink & White */}
              <div className="p-4 bg-[#FFF0F5] text-[#2A111E] flex items-center justify-between text-xs px-5 border-b border-[#FBCFE8]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E05780]" />
                  <span className="font-medium tracking-wide">Princess Building · JJ Flyover Junction</span>
                </div>
                <a
                  href={SALON_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#D6336C] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#E05780]" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative flex-1 w-full min-h-[340px]">
                <iframe
                  title="Fem’s Glamour Location Map"
                  src="https://www.google.com/maps?q=Princess+Building,+Ramchandra+Bhatt+Marg,+Mumbai+400003&output=embed"
                  className="w-full h-full min-h-[350px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bottom Map Info Strip */}
              <div className="p-3.5 bg-[#FFFFFF] border-t border-[#FBCFE8] text-[11px] text-[#704856] flex items-center justify-between px-5 font-normal">
                <span>Above General Medical Signal, C-Block, 1st Floor</span>
                <span className="text-[#2A111E] font-semibold">Mumbai, Maharashtra 400003</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
