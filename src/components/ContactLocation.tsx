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
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#873E4F] font-semibold mb-3">
            Find & Connect
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#5A2331] font-semibold tracking-tight text-balance">
            Location & <span className="italic font-normal text-[#873E4F]">Directions</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5A2331]/75 leading-relaxed font-normal">
            Conveniently situated in South Mumbai at Princess Building on Ramchandra Bhatt Marg. We welcome enquiries and appointment bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Details Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Primary Address Card */}
            <div className="p-8 rounded-3xl bg-[#FBF0F0] border border-[#EFCACA] relative shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FFFFFF] text-[#873E4F] flex items-center justify-center shrink-0 border border-[#EFCACA] shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#5A2331]">Salon Address</h3>
                  <p className="text-xs sm:text-sm text-[#5A2331]/85 mt-2 leading-relaxed font-normal">
                    {SALON_CONFIG.address}
                  </p>
                  
                  <div className="mt-2 text-xs text-[#873E4F] font-medium">
                    Landmark: {SALON_CONFIG.landmark}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#5A2331] bg-[#FFFFFF] hover:bg-[#F6E2E2] border border-[#EFCACA] transition-all cursor-pointer shadow-sm active:scale-95"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Address Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#873E4F]" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <a
                      href={SALON_CONFIG.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#873E4F] hover:bg-[#5A2331] transition-all shadow-sm active:scale-95"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#F6E2E2]" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Telephone & WhatsApp */}
            <div className="p-8 rounded-3xl bg-[#FBF0F0] border border-[#EFCACA] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FFFFFF] text-[#873E4F] flex items-center justify-center shrink-0 border border-[#EFCACA] shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="font-serif text-2xl font-semibold text-[#5A2331]">Direct Telephone</h3>
                  <p className="text-xs text-[#5A2331]/75 mt-1 font-normal">
                    Call our desk to speak directly with our stylists.
                  </p>
                  
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={SALON_CONFIG.phoneTel}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-[#5A2331] bg-[#FFFFFF] hover:bg-[#F6E2E2] border border-[#EFCACA] transition-colors shadow-sm"
                    >
                      <span>{SALON_CONFIG.phone}</span>
                    </a>

                    <a
                      href={`https://wa.me/${SALON_CONFIG.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-[#5A2331] bg-[#FFFFFF] hover:bg-[#F6E2E2] border border-[#EFCACA] transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#873E4F]" />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Scheduling Notice */}
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#EFCACA] flex items-start gap-3 text-xs text-[#5A2331]/80 shadow-sm">
              <Clock className="w-4 h-4 text-[#873E4F] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#5A2331] block">Appointment Scheduling</span>
                <span className="text-[#5A2331]/75 mt-0.5 block font-normal">
                  {SALON_CONFIG.hoursNotice}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Map with Refined Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden border border-[#EFCACA] shadow-xl relative bg-[#FBF0F0] flex flex-col">
              
              {/* Map Header */}
              <div className="p-4 bg-[#873E4F] text-white flex items-center justify-between text-xs px-5 border-b border-[#EFCACA]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F6E2E2]" />
                  <span className="font-medium tracking-wide">Princess Building · JJ Flyover Junction</span>
                </div>
                <a
                  href={SALON_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#F6E2E2] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
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
              <div className="p-3.5 bg-[#FFFFFF] border-t border-[#EFCACA] text-[11px] text-[#5A2331]/75 flex items-center justify-between px-5 font-normal">
                <span>Above General Medical Signal, C-Block, 1st Floor</span>
                <span className="text-[#873E4F] font-semibold">Mumbai, Maharashtra 400003</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
