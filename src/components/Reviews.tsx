import React, { useState, useEffect, useRef } from 'react';
import { Star, ExternalLink, ShieldCheck, CheckCircle2, MessageSquareHeart } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

export const Reviews: React.FC = () => {
  const [ratingCount, setRatingCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate Rating from 0 to 4.7
          const targetRating = SALON_CONFIG.googleRating;
          const ratingDuration = 1200;
          const ratingStartTime = performance.now();

          const animateRating = (time: number) => {
            const elapsed = time - ratingStartTime;
            const progress = Math.min(elapsed / ratingDuration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setRatingCount(Number((eased * targetRating).toFixed(1)));
            if (progress < 1) {
              requestAnimationFrame(animateRating);
            }
          };
          requestAnimationFrame(animateRating);

          // Animate Review Count from 0 to 2,128
          const targetReviews = SALON_CONFIG.googleReviewCount;
          const reviewsDuration = 1600;
          const reviewsStartTime = performance.now();

          const animateReviews = (time: number) => {
            const elapsed = time - reviewsStartTime;
            const progress = Math.min(elapsed / reviewsDuration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setReviewCount(Math.floor(eased * targetReviews));
            if (progress < 1) {
              requestAnimationFrame(animateReviews);
            } else {
              setReviewCount(targetReviews);
            }
          };
          requestAnimationFrame(animateReviews);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="reviews" ref={sectionRef} className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#FBCFE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D6336C] font-semibold mb-3">
            Client Trust & Reputation
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A111E] font-semibold tracking-tight text-balance">
            Google Reviews & <span className="italic font-normal text-[#E05780]">Recognition</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#704856] leading-relaxed font-normal">
            Authenticity and customer satisfaction are at the heart of our atelier. Here is our verified Google standing from clients across South Mumbai.
          </p>
        </div>

        {/* Central Verified Proof Showcase */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#FFF0F5] via-[#FFFFFF] to-[#FFF0F5] rounded-3xl p-8 sm:p-12 border border-[#FBCFE8] shadow-xl">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Animated Score Carrier */}
            <div className="md:col-span-5 text-center md:text-left md:border-r border-[#FBCFE8] md:pr-8">
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#E05780] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#E05780] text-[#E05780]" />
                ))}
              </div>
              
              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <span className="font-serif text-5xl sm:text-6xl font-bold text-[#2A111E] tabular-nums">
                  {ratingCount > 0 ? ratingCount.toFixed(1) : SALON_CONFIG.googleRating}
                </span>
                <span className="text-xl text-[#E05780] font-serif">/ 5.0</span>
              </div>

              <p className="mt-2 text-sm text-[#704856] font-normal">
                Based on <strong className="font-bold text-[#2A111E] tabular-nums font-mono text-base">{reviewCount.toLocaleString()}</strong> verified Google reviews
              </p>

              <div className="mt-6">
                <a
                  href={SALON_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-gradient-to-r from-[#E05780] to-[#D6336C] hover:from-[#D6336C] hover:to-[#BE185D] border border-[#FBCFE8]/40 transition-all shadow-md active:scale-95"
                >
                  <span>View Verified Google Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FFFFFF]" />
                </a>
              </div>
            </div>

            {/* Praise Highlights Breakdown */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#2A111E] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#E05780]" />
                <span>Verified Client Sentiments</span>
              </div>

              <p className="text-sm text-[#704856] leading-relaxed font-normal">
                With more than two thousand reviews, Fem’s Glamour is recognized by women throughout South Mumbai for:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#FBCFE8] text-xs text-[#2A111E]/90 flex items-start gap-2.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#E05780] shrink-0 mt-0.5" />
                  <span>Attentive and patient hair styling consultations</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#FBCFE8] text-xs text-[#2A111E]/90 flex items-start gap-2.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#E05780] shrink-0 mt-0.5" />
                  <span>Warm, courteous, and polite hospitality</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#FBCFE8] text-xs text-[#2A111E]/90 flex items-start gap-2.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#E05780] shrink-0 mt-0.5" />
                  <span>Gentle and hygienic skincare treatments</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#FBCFE8] text-xs text-[#2A111E]/90 flex items-start gap-2.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#E05780] shrink-0 mt-0.5" />
                  <span>Transparent guidance before every session</span>
                </div>
              </div>

              {/* Policy Note on Genuine Reviews */}
              <div className="pt-2 text-[11px] text-[#704856]/70 italic flex items-center gap-1.5">
                <MessageSquareHeart className="w-3.5 h-3.5 text-[#E05780] shrink-0" />
                <span>
                  We strictly respect review integrity: individual testimonials and quotes are kept on Google Maps rather than duplicated statically.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
