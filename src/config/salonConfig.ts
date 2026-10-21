/**
 * Central Business & Salon Configuration
 * Accurate, verified details for Fem’s Glamour, South Mumbai.
 */

export interface ServiceCategoryItem {
  id: string;
  name: string;
  categoryTag: 'hair' | 'treatments' | 'makeup' | 'skin' | 'nails' | 'bridal';
  shortDesc: string;
  highlights: string[];
  proposedStatus: string;
  consultationNote: string;
  imageUrl: string;
  fallbackType: 'hair-waves' | 'balayage-tones' | 'evening-glam' | 'skincare-facial' | 'champagne-nails' | 'bridal-glam';
  imageAlt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'skin' | 'makeup' | 'nails' | 'bridal';
  categoryLabel: string;
  caption: string;
  aspect: 'portrait' | 'landscape' | 'square';
  imageUrl: string;
  fallbackType: 'hair-waves' | 'bridal-glam' | 'skincare-facial' | 'balayage-tones' | 'champagne-nails' | 'evening-glam';
  alt: string;
}

export const SALON_CONFIG = {
  businessName: "Fem’s Glamour",
  category: "Salon",
  phone: "09821141422",
  phoneDisplay: "+91 98211 41422",
  phoneTel: "tel:+919821141422",
  whatsappNumber: "919821141422",
  address: "1st Floor, Princess Building, C-Block, Ramchandra Bhatt Marg, JJ Flyover, above General Medical Signal, Junction, Mumbai, Maharashtra 400003",
  addressShort: "Princess Building, C-Block, Ramchandra Bhatt Marg, JJ Flyover, South Mumbai 400003",
  landmark: "Above General Medical Signal, JJ Flyover Junction",
  googleRating: 4.7,
  googleReviewCount: 2128,
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Fem%27s+Glamour+Princess+Building+Ramchandra+Bhatt+Marg+Mumbai+400003",
  
  tagline: "Your Beauty. Your Signature.",
  supportingCopy: "Discover a beauty experience designed to celebrate your style, confidence, and individuality.",
  aboutHeading: "A Little Time for Yourself. A Beautiful Difference.",
  
  hoursNotice: "Appointment-based scheduling recommended. Call ahead or submit an enquiry to confirm same-day availability.",

  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],

  // Trust Strip Value Statements
  trustValues: [
    {
      id: "consultation",
      title: "Attentive Consultation",
      description: "Dedicated pre-service discussions tailored to your personal style and preferences."
    },
    {
      id: "artistry",
      title: "Bespoke Artistry",
      description: "Crafted cuts, dimensional tones, and radiant skin treatments curated for you."
    },
    {
      id: "hygiene",
      title: "Immaculate Hygiene",
      description: "Strict sterilization standards and clean, sanitized private care stations."
    },
    {
      id: "rating",
      title: "4.7★ South Mumbai Trust",
      description: "Over 2,128 verified Google client reviews celebrating our warm hospitality."
    }
  ],

  // Proposed service categories - explicitly treated as proposed until confirmed
  services: [
    {
      id: "hair-styling",
      name: "Hair Styling & Designer Cuts",
      categoryTag: "hair",
      shortDesc: "Tailored precision cuts, signature blowouts, and customized styling suited to your facial profile and daily lifestyle.",
      highlights: ["Precision Layered & Bob Cuts", "Signature Volume Blowdry", "Curling & Textured Styling", "Fringe & Texture Detailing"],
      proposedStatus: "Proposed Category",
      consultationNote: "Consultation-guided · Custom styling suited to your hair texture",
      imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      fallbackType: "hair-waves",
      imageAlt: "Styling and haircutting consultation at Fem’s Glamour"
    },
    {
      id: "hair-treatments",
      name: "Hair Colour & Spa Treatments",
      categoryTag: "treatments",
      shortDesc: "Gentle dimensional glosses, root touch-ups, deep conditioning spas, and restorative scalp therapies.",
      highlights: ["Luminous Balayage & Highlights", "Root Touch-up & Global Tint", "Intense Moisture Keratin Spa", "Scalp Detox & Revitalizing Mask"],
      proposedStatus: "Proposed Category",
      consultationNote: "Patch test & strand evaluation advised prior to service",
      imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
      fallbackType: "balayage-tones",
      imageAlt: "Hair colouring and revitalizing hair spa treatment"
    },
    {
      id: "makeup-artistry",
      name: "Celebration & Occasion Makeup",
      categoryTag: "makeup",
      shortDesc: "From soft dewy evening glam to bold celebration artistry, designed to enhance your natural features flawlessly.",
      highlights: ["Soft Natural Glow & HD Finish", "Party & Cocktail Glamour", "Smokey Eye & Editorial Accents", "Lash & Brow Enhancement"],
      proposedStatus: "Proposed Category",
      consultationNote: "Pre-event look consultation recommended",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      fallbackType: "evening-glam",
      imageAlt: "Professional evening and party makeup application"
    },
    {
      id: "skincare-facials",
      name: "Skincare Therapies & Facials",
      categoryTag: "skin",
      shortDesc: "Nourishing, relaxing facials crafted to replenish skin moisture, enhance clarity, and restore a healthy luminous complexion.",
      highlights: ["Instant Radiance Glow Facial", "Deep Cleansing & Extraction", "Hydra-Infusion Therapy", "Soothing Anti-Pollution Ritual"],
      proposedStatus: "Proposed Category",
      consultationNote: "Skin sensitivity assessment included prior to treatment",
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      fallbackType: "skincare-facial",
      imageAlt: "Relaxing skincare facial therapy and hydration care"
    },
    {
      id: "manicure-pedicure",
      name: "Manicure & Pedicure Rituals",
      categoryTag: "nails",
      shortDesc: "Meticulous nail shaping, gentle cuticle care, exfoliating foot scrubs, and long-lasting polish finishes.",
      highlights: ["Luxury Spa Manicure & Massage", "Gentle Callus Smoothing Pedicure", "Gel & Long-wear Polish", "Subtle Nail Art & French Tips"],
      proposedStatus: "Proposed Category",
      consultationNote: "Hygiene-first tools with single-use sanitation protocols",
      imageUrl: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
      fallbackType: "champagne-nails",
      imageAlt: "Luxury spa manicure and pedicure hand care"
    },
    {
      id: "bridal-services",
      name: "Bridal Styling & Consultation",
      categoryTag: "bridal",
      shortDesc: "Complete bespoke bridal beauty orchestration, including trial discussions, makeup, hair artistry, and dupatta draping.",
      highlights: ["Bespoke Bridal Look Planning", "Traditional & Contemporary Artistry", "Dupatta & Jewelry Placement", "Family / Bridesmaid Styling Groups"],
      proposedStatus: "Proposed Category",
      consultationNote: "Advance booking essential · Personalized consultations",
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
      fallbackType: "bridal-glam",
      imageAlt: "Bridal beauty consultation and traditional wedding styling"
    }
  ] as ServiceCategoryItem[],

  // Visual gallery showcase with editorial luxury aesthetic
  gallery: [
    {
      id: "gal-1",
      title: "Signature Luminous Waves",
      category: "hair",
      categoryLabel: "Hair Styling",
      caption: "Soft, flowing dimensional waves crafted for evening elegance.",
      aspect: "portrait",
      imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
      fallbackType: "hair-waves",
      alt: "Close-up of styled brunette voluminous hair with warm highlights"
    },
    {
      id: "gal-2",
      title: "Bespoke Bridal Splendour",
      category: "bridal",
      categoryLabel: "Bridal Glamour",
      caption: "Regal bridal artistry paired with traditional gold jewellery styling.",
      aspect: "portrait",
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
      fallbackType: "bridal-glam",
      alt: "Indian bride with elegant makeup and traditional jewellery"
    },
    {
      id: "gal-3",
      title: "Dewy Radiance Facial",
      category: "skin",
      categoryLabel: "Skincare & Glow",
      caption: "Fresh, replenished skin after an intensive moisture infusion ritual.",
      aspect: "landscape",
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
      fallbackType: "skincare-facial",
      alt: "Luminous radiant skin after a luxury facial therapy"
    },
    {
      id: "gal-4",
      title: "Dimensional Balayage Glow",
      category: "hair",
      categoryLabel: "Hair Styling",
      caption: "Subtle warm caramel tones woven through dark silk locks.",
      aspect: "landscape",
      imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
      fallbackType: "balayage-tones",
      alt: "Warm dimensional balayage hair color technique"
    },
    {
      id: "gal-5",
      title: "Refined Champagne Manicure",
      category: "nails",
      categoryLabel: "Nails & Details",
      caption: "Minimalist nude nails accented with delicate champagne gold foil.",
      aspect: "square",
      imageUrl: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80",
      fallbackType: "champagne-nails",
      alt: "Nude manicure with subtle champagne metallic details"
    },
    {
      id: "gal-6",
      title: "Evening Occasion Glamour",
      category: "makeup",
      categoryLabel: "Makeup Artistry",
      caption: "Soft sculpted eyes and velvet rose lips for a celebratory night out.",
      aspect: "portrait",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
      fallbackType: "evening-glam",
      alt: "Evening occasion makeup with soft smokey eye and defined lips"
    }
  ] as GalleryItem[]
};

/**
 * Creates a prefilled WhatsApp link for direct booking enquiry
 */
export function createWhatsAppBookingUrl(details: {
  fullName: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}): string {
  const text = [
    `*Appointment Enquiry - Fem's Glamour*`,
    `Hello Fem's Glamour team, I would like to request an appointment:`,
    `• *Name:* ${details.fullName}`,
    `• *Contact:* ${details.phone}`,
    `• *Service:* ${details.service}`,
    `• *Preferred Date:* ${details.preferredDate}`,
    `• *Preferred Time:* ${details.preferredTime}`,
    details.message ? `• *Note:* ${details.message}` : null,
    ``,
    `Please let me know if this slot is available. Thank you!`
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
