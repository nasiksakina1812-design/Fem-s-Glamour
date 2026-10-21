import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, Clock, User, Phone, Sparkles, Send, CheckCircle2, AlertCircle, PhoneCall, MapPin, Star } from 'lucide-react';
import { SALON_CONFIG, createWhatsAppBookingUrl } from '../config/salonConfig';

interface BookingEnquiryProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export const BookingEnquiry: React.FC<BookingEnquiryProps> = ({
  preselectedService = '',
  onClearPreselectedService
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedService, setSelectedService] = useState(preselectedService || 'Bespoke Precision Haircut & Texture');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM – 01:00 PM)');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedInquiry, setSubmittedInquiry] = useState<{
    referenceId: string;
    fullName: string;
    phoneNumber: string;
    service: string;
    date: string;
    time: string;
    notes?: string;
  } | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
      const el = document.getElementById('booking');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [preselectedService]);

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setPreferredDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    const cleanedPhone = phoneNumber.replace(/[\s\-\(\)\+]/g, '');
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your mobile phone number.';
    } else if (cleanedPhone.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit mobile number.';
    }

    if (!preferredDate) {
      newErrors.preferredDate = 'Please select your preferred date.';
    }

    if (!selectedService) {
      newErrors.selectedService = 'Please select a desired service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppDirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const url = createWhatsAppBookingUrl({
      fullName,
      phone: phoneNumber,
      service: selectedService,
      preferredDate,
      preferredTime,
      message: notes,
    });

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = `FG-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedInquiry({
      referenceId: ref,
      fullName,
      phoneNumber,
      service: selectedService,
      date: preferredDate,
      time: preferredTime,
      notes: notes.trim() || undefined,
    });
  };

  const handleResetForm = () => {
    setSubmittedInquiry(null);
    setFullName('');
    setPhoneNumber('');
    setNotes('');
    if (onClearPreselectedService) onClearPreselectedService();
  };

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-16%', '16%']);

  return (
    <section
      ref={sectionRef}
      id="booking"
      className="py-24 lg:py-32 text-[#2A111E] relative overflow-hidden border-t border-[#FBCFE8]"
    >
      {/* 1. Scrolling Parallax Background Image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[25%] -bottom-[25%] w-full h-[150%] z-0 pointer-events-none parallax-bg"
      >
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=80"
          alt="Fem’s Glamour salon atmosphere background"
          className="w-full h-full object-cover object-center opacity-20"
        />
      </motion.div>

      {/* 2. Soft Pink & White Translucent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5F8]/95 via-[#FFFFFF]/92 to-[#FFF5F8]/95 backdrop-blur-[2px] z-1" />

      {/* Ambient Pink Glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-[#FCE7F3]/70 blur-3xl pointer-events-none z-1" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-[#FDF2F8]/60 blur-3xl pointer-events-none z-1" />

      {/* Decorative luxury architectural line work in Pink */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-1">
        <svg className="w-full h-full" viewBox="0 0 1000 800" fill="none">
          <circle cx="200" cy="400" r="300" stroke="#E05780" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="800" cy="400" r="300" stroke="#E05780" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M0 400 L1000 400" stroke="#E05780" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D6336C] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E05780]" />
            <span>Private Atelier Reservation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A111E] font-semibold tracking-tight text-balance">
            Book Your <span className="italic font-normal text-[#E05780]">Visit</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#704856] leading-relaxed font-normal">
            Reserve your consultation at Princess Building. Our salon concierge will reach out promptly to confirm your scheduled slot.
          </p>
        </motion.div>

        {/* Striking Split Screen Layout: Atmospheric Left Card + Pure White Form Panel Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Visual Atmosphere Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative h-full min-h-[420px] rounded-3xl overflow-hidden border border-[#FBCFE8] shadow-xl flex flex-col justify-between p-8 bg-[#1F0B16]">
              
              {/* Background Photo with Scrim */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
                  alt="Fem’s Glamour luxury beauty salon concierge"
                  className="w-full h-full object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14050D] via-[#1F0B16]/80 to-[#1F0B16]/30" />
              </div>

              {/* Top Details */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F9A8D4] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#E05780]" />
                  <span>The Concierge Desk</span>
                </div>
                <h3 className="font-serif text-3xl font-semibold text-white mt-2 leading-tight">
                  Your Signature Experience Awaits
                </h3>
              </div>

              {/* Bottom Quote & Trust Markers */}
              <div className="relative z-10 space-y-4 pt-12">
                <blockquote className="font-serif italic text-base sm:text-lg text-[#FFF0F5] border-l-2 border-[#E05780] pl-4">
                  “A sanctuary where every detail is tailored to celebrate your personal radiance and peace of mind.”
                </blockquote>

                <div className="pt-4 border-t border-[#FBCFE8]/30 space-y-2 text-xs text-[#F9A8D4]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#E05780] shrink-0" />
                    <span>Princess Building, C-Block, JJ Flyover, South Mumbai</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#E05780] fill-[#E05780] shrink-0" />
                    <span>Rated 4.7 / 5 by 2,128+ verified Google clients</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Sophisticated White Form Panel */}
          <div className="lg:col-span-7">
            {submittedInquiry ? (
              /* Confirmation Screen in White Panel */
              <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 text-[#2A111E] border border-[#FBCFE8] shadow-xl h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#FFF0F5] text-[#E05780] flex items-center justify-center mx-auto mb-6 shadow-sm border border-[#FBCFE8]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="text-center">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D6336C] font-semibold">
                      Enquiry Prepared
                    </span>
                    <h3 className="font-serif text-3xl font-semibold text-[#2A111E] mt-1">
                      Request Registered
                    </h3>
                    <p className="text-sm text-[#704856] mt-2 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-[#2A111E]">{submittedInquiry.fullName}</span>. Your enquiry for <strong className="text-[#D6336C]">{submittedInquiry.service}</strong> is saved under reference <span className="font-mono font-semibold text-[#E05780]">{submittedInquiry.referenceId}</span>.
                    </p>
                  </div>

                  {/* Verification Notice */}
                  <div className="mt-6 p-4 rounded-2xl bg-[#FFF0F5] border border-[#FBCFE8] flex items-start gap-3 text-xs text-[#704856]">
                    <AlertCircle className="w-4 h-4 text-[#E05780] shrink-0 mt-0.5" />
                    <div>
                      <strong>Important Notice:</strong> This appointment request is <span className="underline decoration-[#E05780] font-semibold text-[#2A111E]">not a confirmed booking</span> until our salon team verifies availability with you via phone or WhatsApp.
                    </div>
                  </div>

                  {/* Summary Details Grid */}
                  <div className="mt-6 grid grid-cols-2 gap-4 text-xs p-4 rounded-2xl bg-[#FFF8FA] border border-[#FBCFE8]">
                    <div>
                      <span className="text-[#704856]/70 block">Client Contact</span>
                      <span className="font-medium text-[#2A111E]">{submittedInquiry.phoneNumber}</span>
                    </div>
                    <div>
                      <span className="text-[#704856]/70 block">Target Date & Slot</span>
                      <span className="font-medium text-[#2A111E]">{submittedInquiry.date} · {submittedInquiry.time.split(' ')[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <a
                      href={createWhatsAppBookingUrl({
                        fullName: submittedInquiry.fullName,
                        phone: submittedInquiry.phoneNumber,
                        service: submittedInquiry.service,
                        preferredDate: submittedInquiry.date,
                        preferredTime: submittedInquiry.time,
                        message: submittedInquiry.notes,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 py-3.5 px-5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-gradient-to-r from-[#E05780] to-[#D6336C] hover:from-[#D6336C] hover:to-[#BE185D] border border-[#FBCFE8]/40 flex items-center justify-center gap-2 shadow-md transition-all text-center"
                    >
                      <Send className="w-3.5 h-3.5 text-[#FFFFFF]" />
                      <span>Send via WhatsApp Now</span>
                    </a>

                    <a
                      href={SALON_CONFIG.phoneTel}
                      className="w-full sm:flex-1 py-3.5 px-5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#2A111E] bg-[#FFF0F5] hover:bg-[#FFFFFF] border border-[#FBCFE8] flex items-center justify-center gap-2 transition-all text-center"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#E05780]" />
                      <span>Call Atelier Directly</span>
                    </a>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      onClick={handleResetForm}
                      className="text-xs text-[#D6336C] hover:underline cursor-pointer font-medium"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* White Form Panel */
              <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 text-[#2A111E] border border-[#FBCFE8] shadow-xl">
                
                <div className="mb-6 pb-6 border-b border-[#FBCFE8] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-[#2A111E]">Fem’s Glamour Atelier Desk</span>
                    <span className="text-[#704856]/70 block sm:inline sm:ml-2">Princess Building, South Mumbai</span>
                  </div>
                </div>

                <form onSubmit={handleOnlineSubmit} noValidate className="space-y-6">
                  
                  {/* Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-[#2A111E] uppercase tracking-wider mb-2">
                        Full Name <span className="text-[#E05780]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E05780]">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="fullName"
                          type="text"
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                          }}
                          placeholder="Your full name"
                          className={`w-full pl-10 pr-4 py-3 bg-[#FFFFFF] rounded-2xl border text-sm text-[#2A111E] placeholder:text-[#704856]/40 transition-colors focus:outline-none ${
                            errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-[#FBCFE8] focus:border-[#E05780]'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-semibold text-[#2A111E] uppercase tracking-wider mb-2">
                        Mobile Phone <span className="text-[#E05780]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E05780]">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          id="phoneNumber"
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                            if (errors.phoneNumber) setErrors((prev) => ({ ...prev, phoneNumber: '' }));
                          }}
                          placeholder="e.g. 09821141422"
                          className={`w-full pl-10 pr-4 py-3 bg-[#FFFFFF] rounded-2xl border text-sm text-[#2A111E] placeholder:text-[#704856]/40 transition-colors focus:outline-none ${
                            errors.phoneNumber ? 'border-red-400 bg-red-50/30' : 'border-[#FBCFE8] focus:border-[#E05780]'
                          }`}
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="mt-1 text-xs text-red-500">{errors.phoneNumber}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="service" className="block text-xs font-semibold text-[#2A111E] uppercase tracking-wider">
                        Requested Service <span className="text-[#E05780]">*</span>
                      </label>
                      {preselectedService && (
                        <span className="text-[11px] text-[#D6336C] font-semibold bg-[#FFF0F5] px-2.5 py-0.5 rounded-full border border-[#FBCFE8]">
                          Pre-selected from menu
                        </span>
                      )}
                    </div>
                    <select
                      id="service"
                      value={selectedService}
                      onChange={(e) => {
                        setSelectedService(e.target.value);
                        if (errors.selectedService) setErrors((prev) => ({ ...prev, selectedService: '' }));
                      }}
                      className={`w-full px-4 py-3 bg-[#FFFFFF] rounded-2xl border text-sm text-[#2A111E] transition-colors focus:outline-none cursor-pointer ${
                        errors.selectedService ? 'border-red-400' : 'border-[#FBCFE8] focus:border-[#E05780]'
                      }`}
                    >
                      {SALON_CONFIG.services.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} ({s.category.toUpperCase()})
                        </option>
                      ))}
                      <option value="Bespoke Bridal & Occasion Consultations">
                        Bespoke Bridal & Occasion Consultations
                      </option>
                      <option value="Custom General Beauty Consultation">
                        Custom General Beauty Consultation
                      </option>
                    </select>
                  </div>

                  {/* Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#2A111E] uppercase tracking-wider mb-2">
                        Preferred Date <span className="text-[#E05780]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E05780]">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <input
                          id="preferredDate"
                          type="date"
                          value={preferredDate}
                          onChange={(e) => {
                            setPreferredDate(e.target.value);
                            if (errors.preferredDate) setErrors((prev) => ({ ...prev, preferredDate: '' }));
                          }}
                          className={`w-full pl-10 pr-4 py-3 bg-[#FFFFFF] rounded-2xl border text-sm text-[#2A111E] transition-colors focus:outline-none ${
                            errors.preferredDate ? 'border-red-400' : 'border-[#FBCFE8] focus:border-[#E05780]'
                          }`}
                        />
                      </div>
                      {errors.preferredDate && (
                        <p className="mt-1 text-xs text-red-500">{errors.preferredDate}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-xs font-semibold text-[#2A111E] uppercase tracking-wider mb-2">
                        Preferred Window
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E05780]">
                          <Clock className="w-4 h-4" />
                        </div>
                        <select
                          id="preferredTime"
                          value={preferredTime}
                          onChange={(e) => setPreferredTime(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-[#FFFFFF] rounded-2xl border border-[#FBCFE8] text-sm text-[#2A111E] focus:outline-none focus:border-[#E05780] transition-colors cursor-pointer"
                        >
                          <option value="Morning (10:00 AM – 01:00 PM)">Morning (10:00 AM – 01:00 PM)</option>
                          <option value="Afternoon (01:00 PM – 04:00 PM)">Afternoon (01:00 PM – 04:00 PM)</option>
                          <option value="Evening (04:00 PM – 08:00 PM)">Evening (04:00 PM – 08:00 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label htmlFor="notes" className="block text-xs font-semibold text-[#2A111E] uppercase tracking-wider mb-2">
                      Personal Notes / Hair Sensitivity (Optional)
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Share your current hair condition, scalp sensitivity, or bridal date..."
                      className="w-full px-4 py-3 bg-[#FFFFFF] rounded-2xl border border-[#FBCFE8] text-sm text-[#2A111E] placeholder:text-[#704856]/40 focus:outline-none focus:border-[#E05780] transition-colors"
                    />
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-[#FFFFFF] bg-gradient-to-r from-[#E05780] to-[#D6336C] hover:from-[#D6336C] hover:to-[#BE185D] border border-[#FBCFE8]/40 shadow-[0_4px_16px_rgba(224,87,128,0.3)] hover:shadow-[0_8px_24px_rgba(224,87,128,0.45)] transition-all cursor-pointer text-center"
                    >
                      Submit Appointment Request
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:flex-1 py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-[#2A111E] bg-[#FFF0F5] hover:bg-[#FFFFFF] border border-[#FBCFE8] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5 text-[#E05780]" />
                      <span>Enquire via WhatsApp</span>
                    </button>
                  </div>

                  <div className="text-center pt-2">
                    <a
                      href={SALON_CONFIG.phoneTel}
                      className="text-xs text-[#2A111E] hover:text-[#D6336C] font-semibold tracking-wide inline-flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#E05780]" />
                      <span>Prefer speaking directly? Call {SALON_CONFIG.phoneDisplay}</span>
                    </a>
                  </div>

                </form>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
