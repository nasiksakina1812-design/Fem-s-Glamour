/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { BookingEnquiry } from './components/BookingEnquiry';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { MobileBookingBar } from './components/MobileBookingBar';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('');

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForBooking(serviceName);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#5A2331] font-sans antialiased selection:bg-[#F6E2E2] selection:text-[#5A2331] flex flex-col">
      {/* Sticky Luxury Header */}
      <Header onBookClick={handleBookClick} />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* 1 & 2. Hero Section */}
        <Hero
          onBookClick={handleBookClick}
          onExploreServices={handleExploreServices}
        />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. About Section */}
        <About />

        {/* 5. Services & Offerings (Proposed Categories) */}
        <Services onSelectService={handleSelectService} />

        {/* 6. Beauty & Aesthetic Gallery with Lightbox */}
        <Gallery onEnquireLook={handleSelectService} />

        {/* 7. Customer Proof & Google Reviews with Count-Up */}
        <Reviews />

        {/* 8. Refined Blush Pink & White Split-Screen Appointment Enquiry Form */}
        <BookingEnquiry
          preselectedService={selectedServiceForBooking}
          onClearPreselectedService={() => setSelectedServiceForBooking('')}
        />

        {/* 9. Contact, Address & Location Map */}
        <ContactLocation />
      </main>

      {/* 10. Luxury Blush Pink & White Brand Footer */}
      <Footer />

      {/* Fixed Quick Actions Bar for Mobile */}
      <MobileBookingBar onBookClick={handleBookClick} />
    </div>
  );
}
