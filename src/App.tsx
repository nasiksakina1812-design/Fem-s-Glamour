/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BeautyManifesto } from './components/BeautyManifesto';
import { Transformation } from './components/Transformation';
import { About } from './components/About';
import { ParallaxEditorialBreakout } from './components/ParallaxEditorialBreakout';
import { Services } from './components/Services';
import { BeautyEdit } from './components/BeautyEdit';
import { Offers } from './components/Offers';
import { Lookbook } from './components/Lookbook';
import { Reviews } from './components/Reviews';
import { BookingEnquiry } from './components/BookingEnquiry';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('');

  // Top page scroll indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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

  const handleViewLookbook = () => {
    const lookbookSection = document.getElementById('lookbook');
    if (lookbookSection) {
      lookbookSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#2A111E] font-sans antialiased selection:bg-[#FBCFE8] selection:text-[#2A111E] flex flex-col relative">
      {/* Editorial Pink & White Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E05780] via-[#F472B6] to-[#D6336C] origin-left z-50 pointer-events-none"
      />

      {/* 1. Header with Clean Brand Navigation and Primary CTA */}
      <Header onBookClick={handleBookClick} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onBookClick={handleBookClick}
          onExploreServices={handleExploreServices}
        />

        {/* 3. Beauty Manifesto (Slim Editorial Marquee Strip) */}
        <BeautyManifesto />

        {/* 4. Transformation (Parallax Background & Interactive Before/After Comparison) */}
        <Transformation
          onViewLookbook={handleViewLookbook}
          onEnquireLook={handleSelectService}
        />

        {/* 5. About (The Modern Atelier Introduction & Circular Badge) */}
        <About />

        {/* 6. Parallax Editorial Breakout (Atmosphere Story & Explore Services) */}
        <ParallaxEditorialBreakout
          onExploreServices={handleExploreServices}
        />

        {/* 7. Services (Category-Based Tabs Menu with Preselection) */}
        <Services onSelectService={handleSelectService} />

        {/* 8. Beauty Edit (Retail & Aftercare Products with Real Enquiry) */}
        <BeautyEdit />

        {/* 9. Offers (Seasonal Atelier Highlight Banner with Parallax Depth) */}
        <Offers
          onEnquireOffer={() => handleSelectService('Bespoke Bridal & Occasion Consultations')}
        />

        {/* 10. Lookbook (Full-Width Masonry Gallery & Lightbox) */}
        <Lookbook onEnquireLook={handleSelectService} />

        {/* 11. Reviews (4.7/5 & 2,128 Google Reviews with Count-Up) */}
        <Reviews />

        {/* 12. Booking (Private Consultation Reservation Form) */}
        <BookingEnquiry
          preselectedService={selectedServiceForBooking}
          onClearPreselectedService={() => setSelectedServiceForBooking('')}
        />

        {/* 13. Location (Exact Address, Directions, Map Embed & Hours) */}
        <ContactLocation />
      </main>

      {/* 14. Footer (Clean White and Pink Atelier Footer) */}
      <Footer />
    </div>
  );
}
