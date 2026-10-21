/**
 * Central Configuration for Fem’s Glamour — The Modern Beauty Atelier
 * All business details, service categories, products, offers, and gallery items.
 */

export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'colour' | 'treatments' | 'styling' | 'skin' | 'makeup';
  shortDesc: string;
  highlights: string[];
  price?: string; // Optional confirmed price or consultation indicator
  duration?: string; // Optional duration
  isVerifiedService: boolean;
  imageUrl: string;
  imageAlt: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  imageUrl: string;
  alt: string;
  aspect: 'tall' | 'wide' | 'square';
}

export interface RetailProductItem {
  id: string;
  title: string;
  category: string;
  description: string;
  volume: string;
  imageUrl: string;
  alt: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  category: 'hair' | 'colour' | 'bridal' | 'skin' | 'nails' | 'styling';
  categoryLabel: string;
  caption: string;
  imageUrl: string;
  alt: string;
}

export const SALON_CONFIG = {
  businessName: "Fem’s Glamour",
  subTitle: "The Modern Beauty Atelier",
  category: "Salon",
  phone: "09821141422",
  phoneDisplay: "+91 98211 41422",
  phoneTel: "tel:+919821141422",
  whatsappNumber: "919821141422",
  address: "1st Floor, Princess Building, C-Block Ramchandra Bhatt Marg, JJ Flyover, above General Medical Signal, Junction, Mumbai, Maharashtra 400003",
  addressShort: "Princess Building, C-Block Ramchandra Bhatt Marg, JJ Flyover, South Mumbai 400003",
  landmark: "Above General Medical Signal, JJ Flyover Junction",
  googleRating: 4.7,
  googleReviewCount: 2128,
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Fem%27s+Glamour+Princess+Building+Ramchandra+Bhatt+Marg+Mumbai+400003",
  hoursNotice: "Please call or message to confirm current daily timings and schedule your salon appointment.",
  
  // Hero Section
  hero: {
    headline: "A little glam. A lot of you.",
    supportingCopy: "Your beauty, your style, your moment. Discover a salon experience that lets your individuality shine.",
    locationLabel: "Princess Building · South Mumbai",
    scrollCue: "Scroll to explore the atelier"
  },

  // Beauty Manifesto
  manifestoText: "GOOD HAIR. GREAT ENERGY. YOUR KIND OF GLAM.",

  // About Section
  about: {
    eyebrow: "The Modern Beauty Atelier",
    heading: "Beauty, with a little more feeling.",
    copyParagraph1: "Situated at Princess Building along Ramchandra Bhatt Marg in South Mumbai, Fem’s Glamour is envisioned as a contemporary atelier where refined technique meets personal warmth.",
    copyParagraph2: "We believe an exceptional salon visit begins with thoughtful conversation. Whether revitalizing your hair tone, shaping a bespoke cut, exploring deep skincare hydration, or preparing for an auspicious bridal milestone, every detail is tailored around your individual confidence.",
    copyParagraph3: "Clean tools, gentle formulations, and attentive listening ensure you step out feeling deeply refreshed and authentically yourself."
  },

  // Seasonal Promotional Offer Banner (editable, set active: false to hide)
  seasonalOffer: {
    active: true,
    badge: "Seasonal Atelier Highlight",
    headline: "Bespoke Bridal & Occasion Consultations",
    subheading: "Planning a wedding or private celebration in South Mumbai? Request a tailored pre-event styling and makeup discussion with our senior artists.",
    ctaText: "Enquire For Dates",
    notice: "Subject to appointment availability at our Princess Building salon."
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "Makeovers", href: "#transformations" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Beauty Edit", href: "#beauty-edit" },
    { label: "Lookbook", href: "#lookbook" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#location" },
  ],

  // Signature Makeovers / Transformation Showcase
  transformations: [
    {
      id: "tr-1",
      title: "Dimensional Caramel Gloss",
      category: "Colour & Balayage",
      caption: "Soft hand-painted accents woven through dark espresso silk for multi-tonal light reflection.",
      imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
      alt: "Dimensional caramel gloss hair color makeover",
      aspect: "tall"
    },
    {
      id: "tr-2",
      title: "Sculpted French Lob & Volume",
      category: "Hair Architecture",
      caption: "Face-framing curtain layers combined with high-shine blowout finish for effortless bounce.",
      imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
      alt: "Sculpted lob haircut and volume blowout",
      aspect: "wide"
    },
    {
      id: "tr-3",
      title: "Regal Heritage Bridal Artistry",
      category: "Bridal Couture",
      caption: "Luminous dewy skin foundation paired with defined bronze eyes and heritage jewellery placement.",
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
      alt: "Heritage bridal makeup and hair artistry",
      aspect: "tall"
    },
    {
      id: "tr-4",
      title: "Hydra-Infusion Glass Skin",
      category: "Skin Therapy",
      caption: "Restorative deep-cleanse and antioxidant hydration mask restoring natural barrier radiance.",
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
      alt: "Hydra facial treatment glowing skin",
      aspect: "square"
    }
  ] as TransformationItem[],

  // Configurable Service Categories
  serviceCategories: [
    { id: "hair", label: "Hair & Cuts" },
    { id: "colour", label: "Colour & Balayage" },
    { id: "treatments", label: "Restorative Rituals" },
    { id: "styling", label: "Blowdry & Styling" },
    { id: "skin", label: "Skin & Facials" },
    { id: "makeup", label: "Makeup & Bridal" }
  ],

  // Proposed Services Menu (Explicitly presented as proposed/inquiry-guided until verified)
  services: [
    // Hair & Cuts
    {
      id: "srv-cut-layer",
      name: "Bespoke Precision Haircut & Texture",
      category: "hair",
      shortDesc: "Face-profiling hair analysis followed by layered contouring, weight removal, and texturizing.",
      highlights: ["Personal face shape consultation", "Custom layer graduation", "Wash & sensory scalp cleanse", "Signature blowout finish"],
      price: "Consultation Guided",
      duration: "45–60 mins",
      isVerifiedService: false,
      imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Precision haircutting and texturizing"
    },
    {
      id: "srv-cut-bob",
      name: "Modern French Bob & Lob Shaping",
      category: "hair",
      shortDesc: "Sharp, tailored perimeter blunt cuts with invisible internal graduation for natural movement.",
      highlights: ["Geometric line precision", "Fringe or curtain framing", "Thermal styling polish"],
      price: "Consultation Guided",
      duration: "45–60 mins",
      isVerifiedService: false,
      imageUrl: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Modern bob haircut consultation"
    },

    // Colour & Balayage
    {
      id: "srv-balayage",
      name: "Dimensional Sun-Kissed Balayage",
      category: "colour",
      shortDesc: "Freehand ribbon highlights designed to grow out seamlessly with zero harsh demarcation lines.",
      highlights: ["Custom shade formulation", "Plex bond protector infusion", "Gloss toning bath", "Velvet shine blowdry"],
      price: "Custom Estimate on Strand Test",
      duration: "150–210 mins",
      isVerifiedService: false,
      imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Dimensional balayage hair color"
    },
    {
      id: "srv-gloss",
      name: "High-Gloss Color Glaze & Root Blend",
      category: "colour",
      shortDesc: "Semi-permanent acidic tint that seals the cuticle, neutralizes brassiness, and imparts mirror-like shine.",
      highlights: ["Ammonia-free gentle formula", "Root touch-up coverage", "Moisture locking rinse"],
      price: "Consultation Guided",
      duration: "60–90 mins",
      isVerifiedService: false,
      imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Hair glossing glaze treatment"
    },

    // Restorative Rituals
    {
      id: "srv-keratin",
      name: "Intensive Moisture Keratin Spa",
      category: "treatments",
      shortDesc: "Deep lipid replenishment and hydrolyzed protein infusion to eliminate humidity frizz in coastal weather.",
      highlights: ["Nano-steam cuticle opening", "Micro-nutrient hair mask", "Scalp acupressure massage", "Thermal seal"],
      price: "Consultation Guided",
      duration: "75–90 mins",
      isVerifiedService: false,
      imageUrl: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Keratin hair spa therapy"
    },
    {
      id: "srv-scalp-detox",
      name: "Revitalizing Scalp Detox & Exfoliation",
      category: "treatments",
      shortDesc: "Clarifying scrub removing product buildup and hard-water deposits, stimulating healthy follicular growth.",
      highlights: ["Pre-wash enzyme treatment", "Botanical tea tree soothing", "Cool rinse & leave-in serum"],
      price: "Consultation Guided",
      duration: "45 mins",
      isVerifiedService: false,
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Scalp detox therapy"
    },

    // Styling & Blowdry
    {
      id: "srv-blowout",
      name: "Signature Red-Carpet Volume Blowout",
      category: "styling",
      shortDesc: "Round-brush velocity drying creating opulent body, smooth root lift, and long-lasting curl bounce.",
      highlights: ["Heat defense barrier", "Roller set setting option", "Gloss mist hold"],
      price: "Consultation Guided",
      duration: "40–50 mins",
      isVerifiedService: false,
      imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Signature blowout styling"
    },
    {
      id: "srv-curls",
      name: "S-Wave & Editorial Tongs Styling",
      category: "styling",
      shortDesc: "Soft undulating waves crafted with ceramic irons for red carpet celebrations and cocktail evenings.",
      highlights: ["Texturizing spray prep", "Individual curl pinning", "Luminous finish"],
      price: "Consultation Guided",
      duration: "45 mins",
      isVerifiedService: false,
      imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      imageAlt: "S-wave editorial hair styling"
    },

    // Skin & Facials
    {
      id: "srv-facial-glow",
      name: "Instant Radiance C-Glow Facial",
      category: "skin",
      shortDesc: "Multi-step brightening facial with pure Vitamin C and botanical extracts for tired, city-exposed skin.",
      highlights: ["Ultrasonic gentle peeling", "Lymphatic drainage massage", "Alginate cooling mask"],
      price: "Consultation Guided",
      duration: "60 mins",
      isVerifiedService: false,
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Radiance facial skin therapy"
    },
    {
      id: "srv-cleanse",
      name: "Deep Pore Purifying & Extraction Ritual",
      category: "skin",
      shortDesc: "Thorough clarifying treatment for congested skin, rebalancing sebum without disrupting hydration.",
      highlights: ["Warm ozone steam", "Sterile manual extractions", "High-frequency calming wand"],
      price: "Consultation Guided",
      duration: "60 mins",
      isVerifiedService: false,
      imageUrl: "https://images.unsplash.com/photo-1512290900672-1f55b965b090?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Deep pore facial treatment"
    },

    // Makeup & Bridal
    {
      id: "srv-bridal",
      name: "Couture Bridal Artistry & Dupatta Draping",
      category: "makeup",
      shortDesc: "Full bespoke bridal look orchestration: waterproof HD base, customized lash craft, hair design, and jewellery pinning.",
      highlights: ["Look development preview", "Sweat-resistant HD base", "Dupatta & veil architectural drape", "Touch-up kit"],
      price: "Consultation & Package Quote",
      duration: "180+ mins",
      isVerifiedService: false,
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Couture bridal makeup and styling"
    },
    {
      id: "srv-event-glam",
      name: "Celebration & Cocktail Party Makeup",
      category: "makeup",
      shortDesc: "Sculpted features, seamless eyeshadow blending, and custom lip shades tailored to your event ensemble.",
      highlights: ["Skin prep with hydration base", "Individual cluster lashes", "All-night setting seal"],
      price: "Consultation Guided",
      duration: "60–75 mins",
      isVerifiedService: false,
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Evening event glamour makeup"
    }
  ] as ServiceItem[],

  // Curated Retail & Aftercare Products (The Beauty Edit)
  beautyEditProducts: [
    {
      id: "prod-1",
      title: "Velvet Silk Hair Elixir",
      category: "Hair Aftercare",
      description: "Weightless botanical blend of organic argan and cold-pressed camellia seed oil for frizz protection in Mumbai weather.",
      volume: "50 ml / 1.7 fl. oz.",
      imageUrl: "https://images.unsplash.com/photo-1608248597359-57303f8a0ffc?auto=format&fit=crop&w=700&q=80",
      alt: "Luxury hair serum bottle"
    },
    {
      id: "prod-2",
      title: "Bio-Lipid Restorative Mask",
      category: "Weekly Ritual",
      description: "Intense peptide and plant keratin complex restoring elastic resilience to balayaged and blow-dried tresses.",
      volume: "200 ml / 6.7 fl. oz.",
      imageUrl: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=700&q=80",
      alt: "Hair treatment mask jar"
    },
    {
      id: "prod-3",
      title: "Damask Rose Hydrating Mist",
      category: "Skin Radiance",
      description: "Pure steam-distilled floral water with micro-hyaluronic acid to refresh and replenish facial moisture throughout the day.",
      volume: "100 ml / 3.4 fl. oz.",
      imageUrl: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=700&q=80",
      alt: "Facial toner spray bottle"
    },
    {
      id: "prod-4",
      title: "Nectar Cuticle & Nail Therapy",
      category: "Hand Care",
      description: "Fortifying squalane and jojoba elixir with sweet almond essence to maintain supple, salon-smooth cuticles.",
      volume: "15 ml / 0.5 fl. oz.",
      imageUrl: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80",
      alt: "Cuticle oil hand care elixir"
    }
  ] as RetailProductItem[],

  // Lookbook Gallery Items
  lookbook: [
    {
      id: "lb-1",
      title: "Soft Dimensional Waves",
      category: "hair",
      categoryLabel: "Hair Styling",
      caption: "Sleek root transition opening into luminous honey and hazelnut reflections.",
      imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
      alt: "Styled brunette voluminous hair waves"
    },
    {
      id: "lb-2",
      title: "Timeless Bridal Splendour",
      category: "bridal",
      categoryLabel: "Bridal Couture",
      caption: "Regal bridal artistry highlighting intricate jewellery detailing and velvet rose tones.",
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
      alt: "Indian bridal beauty styling"
    },
    {
      id: "lb-3",
      title: "Golden Hour Balayage",
      category: "colour",
      categoryLabel: "Colour Artistry",
      caption: "Seamless warm ribbons catching ambient salon light with mirror-like shine.",
      imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
      alt: "Golden hour balayage hair color"
    },
    {
      id: "lb-4",
      title: "Luminous Glass Skin Glow",
      category: "skin",
      categoryLabel: "Skincare",
      caption: "Replenished, balanced complexion following our signature hydra-infusion facial.",
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
      alt: "Glowing radiant skin after facial"
    },
    {
      id: "lb-5",
      title: "Rose Nude Minimalist Nails",
      category: "nails",
      categoryLabel: "Nail Care",
      caption: "Clean, understated blush gel polish accented with delicate champagne gold leaf.",
      imageUrl: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80",
      alt: "Rose nude manicure with gold accents"
    },
    {
      id: "lb-6",
      title: "Sculpted Evening Glamour",
      category: "styling",
      categoryLabel: "Makeover",
      caption: "Sophisticated contouring with velvet wine lips for a festive red carpet evening.",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
      alt: "Evening makeup with velvet lips"
    }
  ] as LookbookItem[]
};

/**
 * Creates a prefilled WhatsApp link for booking or product enquiries
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
    `Hello Fem's Glamour team, I would like to request an appointment at Princess Building:`,
    `• *Name:* ${details.fullName}`,
    `• *Contact Phone:* ${details.phone}`,
    `• *Desired Service:* ${details.service}`,
    `• *Preferred Date:* ${details.preferredDate}`,
    `• *Preferred Time Window:* ${details.preferredTime}`,
    details.message ? `• *Note / Request:* ${details.message}` : null,
    ``,
    `Please let me know if this slot is available. Thank you!`
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Creates a prefilled WhatsApp link for retail / product inquiries
 */
export function createWhatsAppProductUrl(productTitle: string): string {
  const text = `Hello Fem's Glamour team, I would like to enquire about the availability and consultation details for "${productTitle}".`;
  return `https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
