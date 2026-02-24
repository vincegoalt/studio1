const siteUrl = "https://studio1tul.com";

export const healthClubSchema = {
  "@context": "https://schema.org",
  "@type": ["HealthClub", "Organization"],
  name: "Studio 1",
  description:
    "Independent boutique fitness studio in Tulsa's Brookside neighborhood offering Barre, TRX, Pilates, and Yoga classes.",
  url: siteUrl,
  telephone: "+1-918-555-0123",
  email: "hello@studio1tul.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3509 S Peoria Ave, 2nd Floor",
    addressLocality: "Tulsa",
    addressRegion: "OK",
    postalCode: "74105",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.1185,
    longitude: -95.9785,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  image: `${siteUrl}/images/hero-yoga.jpg`,
  sameAs: [
    "https://instagram.com/studio1tul",
    "https://facebook.com/studio1tul",
  ],
};

export const courseSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Barre Classes",
    description:
      "Low-impact, high-intensity workout combining ballet-inspired movements, pilates, and light weights. Build long, lean muscle at Studio 1 in Tulsa's Brookside.",
    provider: {
      "@type": "Organization",
      name: "Studio 1",
      url: siteUrl,
    },
    courseMode: "onsite",
    locationCreated: {
      "@type": "Place",
      name: "Studio 1",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tulsa",
        addressRegion: "OK",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "TRX Suspension Training",
    description:
      "Suspension training using your body weight for a full-body workout. Build strength, balance, and flexibility at Studio 1 in Tulsa's Brookside.",
    provider: {
      "@type": "Organization",
      name: "Studio 1",
      url: siteUrl,
    },
    courseMode: "onsite",
    locationCreated: {
      "@type": "Place",
      name: "Studio 1",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tulsa",
        addressRegion: "OK",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Pilates Classes",
    description:
      "Core-focused movement emphasizing alignment, breath, and controlled movement. Strengthen and lengthen with mat and reformer options at Studio 1 in Tulsa.",
    provider: {
      "@type": "Organization",
      name: "Studio 1",
      url: siteUrl,
    },
    courseMode: "onsite",
    locationCreated: {
      "@type": "Place",
      name: "Studio 1",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tulsa",
        addressRegion: "OK",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Yoga Classes",
    description:
      "From gentle flow to power vinyasa. Multiple styles offered weekly at Studio 1 in Tulsa's Brookside neighborhood. All levels welcome.",
    provider: {
      "@type": "Organization",
      name: "Studio 1",
      url: siteUrl,
    },
    courseMode: "onsite",
    locationCreated: {
      "@type": "Place",
      name: "Studio 1",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tulsa",
        addressRegion: "OK",
      },
    },
  },
];

export const offerSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Intro Offer — 2 Weeks Unlimited",
    description:
      "Try Studio 1 with 2 weeks of unlimited Barre, TRX, Pilates, and Yoga classes for just $39. New members only.",
    price: "39.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Studio 1",
      url: siteUrl,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Monthly Unlimited Membership",
    description:
      "Unlimited monthly access to all Barre, TRX, Pilates, and Yoga classes at Studio 1 in Tulsa's Brookside.",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Studio 1",
      url: siteUrl,
    },
  },
];

export const personSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Emma Richardson",
    jobTitle: "Yoga & Meditation Instructor",
    worksFor: { "@type": "Organization", name: "Studio 1", url: siteUrl },
    description:
      "Emma has been teaching yoga for over 10 years, with a focus on vinyasa flow and mindfulness practices.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Michael Torres",
    jobTitle: "TRX & Strength Instructor",
    worksFor: { "@type": "Organization", name: "Studio 1", url: siteUrl },
    description:
      "Michael brings 15 years of fitness experience to Studio 1. His TRX classes challenge you to find strength you didn't know you had.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sophie Anderson",
    jobTitle: "Barre Instructor",
    worksFor: { "@type": "Organization", name: "Studio 1", url: siteUrl },
    description:
      "Sophie's barre classes are high-energy and empowering. A former dancer, she brings grace and precision to every movement.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rachel Kim",
    jobTitle: "Pilates Instructor",
    worksFor: { "@type": "Organization", name: "Studio 1", url: siteUrl },
    description:
      "Rachel is a certified Pilates instructor with expertise in both mat and reformer. She focuses on alignment, breath, and controlled movement.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Chen",
    jobTitle: "Yoga Instructor",
    worksFor: { "@type": "Organization", name: "Studio 1", url: siteUrl },
    description:
      "David specializes in power yoga and gentle flow. His classes meet you where you are, whether you're a beginner or advanced practitioner.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amanda Foster",
    jobTitle: "TRX & HIIT Instructor",
    worksFor: { "@type": "Organization", name: "Studio 1", url: siteUrl },
    description:
      "Amanda's classes are dynamic and fun. She believes fitness should be enjoyable, and her energy is contagious.",
  },
];

export const placeSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Studio 1",
  description:
    "Independent boutique fitness studio in Tulsa's Brookside neighborhood.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3509 S Peoria Ave, 2nd Floor",
    addressLocality: "Tulsa",
    addressRegion: "OK",
    postalCode: "74105",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.1185,
    longitude: -95.9785,
  },
  hasMap: "https://maps.google.com/?q=3509+S+Peoria+Ave+Tulsa+OK+74105",
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Studio 1 related to Balance Yoga Barre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Studio 1 is the independent continuation of the BYB community. We have the same teachers, many of the same members, and we're returning to the same location at 3509 S Peoria Ave. However, Studio 1 is independently owned and operated — not a franchise.",
      },
    },
    {
      "@type": "Question",
      name: "Will my favorite instructor be at Studio 1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most of the BYB instructors have joined Studio 1! Our founding team includes many of the teachers you know and love.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Studio 1 located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We currently have a temporary location in the Center 1 Building above Oren in Brookside. Our permanent home at 3509 S Peoria Ave (the original BYB location) will open on August 1, 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to create a new account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Studio 1 uses a new booking system, so you'll need to create a new account. Our Intro Offer ($39 for 2 weeks unlimited) gives you a great way to try us out!",
      },
    },
    {
      "@type": "Question",
      name: "What classes will Studio 1 offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer Barre, TRX, Pilates, and Yoga — the same disciplines you loved at BYB. Our class schedule includes a variety of levels and styles.",
      },
    },
    {
      "@type": "Question",
      name: "Will pricing be the same?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We've worked hard to keep pricing competitive and accessible. Our Intro Offer is $39 for 2 weeks unlimited. We offer monthly memberships, class packs, and drop-in options.",
      },
    },
  ],
};
