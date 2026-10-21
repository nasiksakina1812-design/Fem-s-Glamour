import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Sparkles, MessageSquare, Send, CheckCircle2, AlertCircle, PhoneCall, MapPin, Star } from 'lucide-react';
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
  const [selectedService, setSelectedService] = useState(preselectedService || 'Hair Styling & Designer Cuts');
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
      notes,
    });
  };

  const handleResetForm = () => {
    setSubmittedInquiry(null);
    setFullName('');
    setPhoneNumber('');
    setNotes('');
    if (onClearPreselectedService) onClearPreselectedService();
  };

  return (
    <section id="booking" className="py-24 lg:py-32 bg-[#FBF0F0] text-[#5A2331] relative overflow-hidden border-t border-[#EFCACA]">
      {/* Decorative luxury architectural line work in soft blush */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 800" fill="none">
          <circle cx="200" cy="400" r="300" stroke="#D48E92" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="800" cy="400" r="300" stroke="#EFCACA" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M0 400 L1000 400" stroke="#EFCACA" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#873E4F] font-semibold mb-3">
            Plan Your Appointment
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#5A2331] font-semibold tracking-tight text-balance">
            Appointment <span className="italic font-normal text-[#873E4F]">Enquiry</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5A2331]/80 leading-relaxed font-normal">
            Reserve your consultation at Princess Building. Our salon concierge will reach out promptly to confirm your scheduled slot.
          </p>
        </div>

        {/* Split Screen Layout in Blush Pink & White */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Concierge Visual Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden border border-[#EFCACA] shadow-xl flex flex-col justify-between p-8 bg-gradient-to-b from-[#FFFFFF] via-[#FBF0F0] to-[#F6E2E2]">
              
              {/* Background Photo with Scrim */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
                  alt="Fem’s Glamour luxury beauty salon concierge"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FBF0F0]/80 to-transparent" />
              </div>

              {/* Top Details */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#873E4F] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#D48E92]" />
                  <span>The Concierge Desk</span>
                </div>
                <h3 className="font-serif text-3xl font-semibold text-[#5A2331] mt-2 leading-tight">
                  Your Signature Experience Awaits
                </h3>
              </div>

              {/* Bottom Quote & Trust Markers */}
              <div className="relative z-10 space-y-4 pt-12">
                <blockquote className="font-serif italic text-base sm:text-lg text-[#5A2331]/90 border-l-2 border-[#873E4F] pl-4">
                  “A sanctuary where every detail is tailored to celebrate your personal radiance and peace of mind.”
                </blockquote>

                <div className="pt-4 border-t border-[#EFCACA] space-y-2 text-xs text-[#5A2331]/85">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#873E4F] shrink-0" />
                    <span>Princess Building, C-Block, JJ Flyover, South Mumbai</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#873E4F] shrink-0" />
                    <span>Direct Telephone: {SALON_CONFIG.phoneDisplay}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#D48E92] fill-[#D48E92] shrink-0" />
                    <span>Rated 4.7 / 5 by 2,128+ verified Google clients</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Sophisticated Pure White Form Panel */}
          <div className="lg:col-span-7">
            {submittedInquiry ? (
              /* Confirmation Screen in Pure White */
              <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 text-[#5A2331] border border-[#EFCACA] shadow-xl h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#FBF0F0] text-[#873E4F] flex items-center justify-center mx-auto mb-6 shadow-sm border border-[#EFCACA]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="text-center">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#873E4F] font-semibold">
                      Enquiry Prepared
                    </span>
                    <h3 className="font-serif text-3xl font-semibold text-[#5A2331] mt-1">
                      Thank You, {submittedInquiry.fullName}
                    </h3>
                    <p className="text-xs text-[#5A2331]/60 mt-1">
                      Reference Code: <strong className="font-mono text-[#873E4F] font-bold">{submittedInquiry.referenceId}</strong>
                    </p>
                  </div>

                  {/* Clarification Notice */}
                  <div className="mt-6 p-4 rounded-2xl bg-[#FBF0F0] border border-[#EFCACA] flex items-start gap-3 text-xs text-[#5A2331]/80">
                    <AlertCircle className="w-5 h-5 text-[#873E4F] shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong>Important Notice:</strong> This appointment request is <span className="underline decoration-[#D48E92] font-semibold">not a confirmed booking</span> until our salon team verifies availability with you via phone or WhatsApp.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="mt-6 p-6 rounded-2xl bg-[#FDF8F8] border border-[#EFCACA] space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between py-1 border-b border-[#EFCACA]/50">
                      <span className="text-[#5A2331]/60">Requested Service:</span>
                      <span className="font-semibold text-[#5A2331]">{submittedInquiry.service}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#EFCACA]/50">
                      <span className="text-[#5A2331]/60">Preferred Date:</span>
                      <span className="font-medium text-[#5A2331]">{submittedInquiry.date}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#EFCACA]/50">
                      <span className="text-[#5A2331]/60">Time Slot:</span>
                      <span className="font-medium text-[#5A2331]">{submittedInquiry.time}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#5A2331]/60">Contact Phone:</span>
                      <span className="font-medium text-[#5A2331]">{submittedInquiry.phoneNumber}</span>
                    </div>
                    {submittedInquiry.notes && (
                      <div className="pt-2 text-xs text-[#5A2331]/70 border-t border-[#EFCACA]/50">
                        <span className="text-[#5A2331]/50 block mb-0.5">Note:</span>
                        <span>{submittedInquiry.notes}</span>
                      </div>
                    )}
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
                      className="w-full sm:flex-1 py-3.5 px-5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#873E4F] hover:bg-[#5A2331] border border-[#EFCACA] flex items-center justify-center gap-2 shadow-md transition-all text-center"
                    >
                      <Send className="w-3.5 h-3.5 text-[#F6E2E2]" />
                      <span>Send via WhatsApp Now</span>
                    </a>

                    <a
                      href={SALON_CONFIG.phoneTel}
                      className="w-full sm:flex-1 py-3.5 px-5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#5A2331] bg-[#FBF0F0] hover:bg-[#F6E2E2] border border-[#EFCACA] flex items-center justify-center gap-2 transition-all text-center"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#873E4F]" />
                      <span>Call {SALON_CONFIG.phone}</span>
                    </a>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      onClick={handleResetForm}
                      className="text-xs text-[#873E4F] hover:text-[#5A2331] underline cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Light Form Panel in Pure White */
              <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 text-[#5A2331] border border-[#EFCACA] shadow-xl">
                
                <div className="mb-6 pb-6 border-b border-[#FBF0F0] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-[#5A2331]">Fem’s Glamour Concierge</span>
                    <span className="text-[#5A2331]/60 block sm:inline sm:ml-2">1st Floor, Princess Building, South Mumbai</span>
                  </div>
                  <div className="text-[#873E4F] font-semibold">
                    Direct Line: {SALON_CONFIG.phoneDisplay}
                  </div>
                </div>

                <form onSubmit={handleOnlineSubmit} noValidate className="space-y-6">
                  
                  {/* Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-[#5A2331] uppercase tracking-wider mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#873E4F]">
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
                          placeholder="e.g. Sakina Merchant"
                          className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FDF8F8] border text-sm text-[#5A2331] placeholder-[#5A2331]/40 focus:outline-none focus:ring-2 focus:ring-[#D48E92] transition-all ${
                            errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-[#EFCACA] focus:border-[#D48E92]'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-semibold text-[#5A2331] uppercase tracking-wider mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#873E4F]">
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
                          className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FDF8F8] border text-sm text-[#5A2331] placeholder-[#5A2331]/40 focus:outline-none focus:ring-2 focus:ring-[#D48E92] transition-all ${
                            errors.phoneNumber ? 'border-red-400 bg-red-50/30' : 'border-[#EFCACA] focus:border-[#D48E92]'
                          }`}
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="mt-1 text-xs text-red-500">{errors.phoneNumber}</p>
                      )}
                    </div>
                  </div>

                  {/* Desired Service Selection */}
                  <div>
                    <label htmlFor="serviceSelect" className="block text-xs font-semibold text-[#5A2331] uppercase tracking-wider mb-2">
                      Desired Service (Proposed Category) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#873E4F]">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <select
                        id="serviceSelect"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FDF8F8] border border-[#EFCACA] text-sm text-[#5A2331] focus:outline-none focus:ring-2 focus:ring-[#D48E92] transition-all appearance-none cursor-pointer"
                      >
                        {SALON_CONFIG.services.map((service) => (
                          <option key={service.id} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                        <option value="Custom Consultation / Multiple Services">
                          Custom Consultation / Multiple Services
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#5A2331] uppercase tracking-wider mb-2">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#873E4F]">
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
                          className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FDF8F8] border text-sm text-[#5A2331] focus:outline-none focus:ring-2 focus:ring-[#D48E92] transition-all ${
                            errors.preferredDate ? 'border-red-400' : 'border-[#EFCACA]'
                          }`}
                        />
                      </div>
                      {errors.preferredDate && (
                        <p className="mt-1 text-xs text-red-500">{errors.preferredDate}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="timeSlot" className="block text-xs font-semibold text-[#5A2331] uppercase tracking-wider mb-2">
                        Preferred Time Window
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#873E4F]">
                          <Clock className="w-4 h-4" />
                        </div>
                        <select
                          id="timeSlot"
                          value={preferredTime}
                          onChange={(e) => setPreferredTime(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FDF8F8] border border-[#EFCACA] text-sm text-[#5A2331] focus:outline-none focus:ring-2 focus:ring-[#D48E92] transition-all appearance-none cursor-pointer"
                        >
                          <option value="Morning (10:00 AM – 01:00 PM)">Morning (10:00 AM – 01:00 PM)</option>
                          <option value="Afternoon (01:00 PM – 04:00 PM)">Afternoon (01:00 PM – 04:00 PM)</option>
                          <option value="Evening (04:00 PM – 07:30 PM)">Evening (04:00 PM – 07:30 PM)</option>
                          <option value="Flexible / First Available">Flexible / First Available</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label htmlFor="notes" className="block text-xs font-semibold text-[#5A2331] uppercase tracking-wider mb-2">
                      Optional Message or Styling Request
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 pointer-events-none text-[#873E4F]">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        id="notes"
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Share details regarding your occasion, hair length, skin sensitivity, or preferred styling nuances..."
                        className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FDF8F8] border border-[#EFCACA] text-sm text-[#5A2331] placeholder-[#5A2331]/40 focus:outline-none focus:ring-2 focus:ring-[#D48E92] transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Clarification Notice */}
                  <div className="p-4 rounded-2xl bg-[#FBF0F0] border border-[#EFCACA] text-xs text-[#5A2331]/80 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-[#873E4F] shrink-0 mt-0.5" />
                    <span>
                      <strong>Please Note:</strong> An appointment request is not a confirmed booking until confirmed directly by the salon team. We will call or message your number to confirm the exact slot.
                    </span>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-white bg-[#873E4F] hover:bg-[#5A2331] border border-[#EFCACA] shadow-md hover:shadow-xl transition-all cursor-pointer text-center"
                    >
                      Submit Appointment Request
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:flex-1 py-4 px-6 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-[#5A2331] bg-[#FBF0F0] hover:bg-[#F6E2E2] border border-[#EFCACA] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5 text-[#873E4F]" />
                      <span>Enquire via WhatsApp</span>
                    </button>
                  </div>

                  <div className="text-center pt-2">
                    <a
                      href={SALON_CONFIG.phoneTel}
                      className="text-xs text-[#873E4F] hover:text-[#5A2331] font-semibold tracking-wide inline-flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#873E4F]" />
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
