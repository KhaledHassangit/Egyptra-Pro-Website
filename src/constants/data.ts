import {
  CreditCard, CheckCircle, Wallet,
  DollarSign, ShieldCheck,
  BadgeCheck, Globe, Users, Star, Flag
} from 'lucide-react'
import { StaticImageData } from 'next/image'

export const cities = ['cairo', 'hurghada', 'luxor', 'aswan'];

// Map each city to its specific image
export const cityImages: Record<string, string> = {
  'cairo': "/images/dest1.png",
  'hurghada': "/images/dest2.jpg",
  'luxor': "/images/dest5.jpg",
  'aswan': "/images/dest3.jpg"
};

// Different image sets for each city
export const cityTourImages: Record<string, string[]> = {
  'cairo': [
    "/images/dest1.png",
    "/images/dest2.jpg",
    "/images/dest5.jpg",
    "/images/dest3.jpg",
    "/images/dest6.jpg",
    "/images/dest4.jpg"
  ],
  'hurghada': [
    "/images/dest2.jpg",
    "/images/dest5.jpg",
    "/images/dest3.jpg",
    "/images/dest6.jpg",
    "/images/dest4.jpg",
    "/images/dest1.png"
  ],
  'luxor': [
    "/images/dest5.jpg",
    "/images/dest3.jpg",
    "/images/dest6.jpg",
    "/images/dest4.jpg",
    "/images/dest1.png",
    "/images/dest2.jpg"
  ],
  'aswan': [
    "/images/dest3.jpg",
    "/images/dest6.jpg",
    "/images/dest4.jpg",
    "/images/dest1.png",
    "/images/dest2.jpg",
    "/images/dest5.jpg"
  ]
};

// Tour data for each city
export const tourData: Record<string, { city: string; title: string; price: string; rating: string }[]> = {
  'cairo': [
    { city: 'Cairo', title: 'Pyramids of Giza: Full Day Tour', price: '$ 120', rating: '4.8 (320)' },
    { city: 'Cairo', title: 'Egyptian Museum & Citadel Tour', price: '$ 85', rating: '4.6 (250)' },
    { city: 'Cairo', title: 'Nile River Dinner Cruise', price: '$ 65', rating: '4.7 (180)' },
    { city: 'Cairo', title: 'Khan el-Khalili Bazaar Experience', price: '$ 45', rating: '4.5 (150)' },
    { city: 'Cairo', title: 'Coptic Cairo & Old City Tour', price: '$ 70', rating: '4.4 (120)' },
    { city: 'Cairo', title: 'Sound and Light Show at Pyramids', price: '$ 55', rating: '4.3 (90)' }
  ],
  'hurghada': [
    { city: 'Hurghada', title: 'Dolphin watching boat tour with snorkeling', price: '$ 254', rating: '4.2 (200)' },
    { city: 'Hurghada', title: 'Red Sea Snorkeling Adventure', price: '$ 185', rating: '4.6 (180)' },
    { city: 'Hurghada', title: 'Desert Safari with BBQ Dinner', price: '$ 95', rating: '4.7 (220)' },
    { city: 'Hurghada', title: 'Submarine Tour in Red Sea', price: '$ 120', rating: '4.5 (160)' },
    { city: 'Hurghada', title: 'Giftun Island Boat Trip', price: '$ 75', rating: '4.8 (280)' },
    { city: 'Hurghada', title: 'Hurghada City Tour & Shopping', price: '$ 55', rating: '4.3 (140)' }
  ],
  'luxor': [
    { city: 'Luxor', title: 'Valley of the Kings & Queens Tour', price: '$ 145', rating: '4.9 (350)' },
    { city: 'Luxor', title: 'Karnak & Luxor Temples Day Tour', price: '$ 110', rating: '4.7 (280)' },
    { city: 'Luxor', title: 'Hot Air Balloon over Luxor', price: '$ 175', rating: '4.8 (200)' },
    { city: 'Luxor', title: 'Dendera & Abydos Temples Tour', price: '$ 125', rating: '4.6 (150)' },
    { city: 'Luxor', title: 'Luxor West Bank Full Day Tour', price: '$ 135', rating: '4.7 (220)' },
    { city: 'Luxor', title: 'Sound and Light at Karnak Temple', price: '$ 65', rating: '4.4 (120)' }
  ],
  'aswan': [
    { city: 'Aswan', title: 'Philae Temple & High Dam Tour', price: '$ 95', rating: '4.6 (180)' },
    { city: 'Aswan', title: 'Abu Simbel Day Trip by Bus', price: '$ 125', rating: '4.8 (250)' },
    { city: 'Aswan', title: 'Nubian Village Tour', price: '$ 65', rating: '4.5 (140)' },
    { city: 'Aswan', title: 'Felucca Sail around Elephantine', price: '$ 45', rating: '4.7 (190)' },
    { city: 'Aswan', title: 'Kom Ombo & Edfu Temples Tour', price: '$ 115', rating: '4.6 (160)' },
    { city: 'Aswan', title: 'Botanical Garden & Kitchener Island', price: '$ 55', rating: '4.4 (110)' }
  ]
};



export const items = [
  {
    title: 'Licensed Category ',
    description: 'Official Egyptian Tourism Authority',
    image: '/images/1.jpg'
  },
  {
    title: 'Fully Insured',
    description: 'Complete coverage for your peace ',
    image: '/images/2.jpg'
  },
  {
    title: 'Secure Payments',
    description: 'Protected transactions & data ',
    image: '/images/3.jpg'
  },
  {
    title: 'Verified Company',
    description: '20 years of trusted operations',
    image: '/images/4.png'
  }
]

export const rows = [
  {
    feature: 'Direct Local Prices',
    egyptra: { icon: true, text: 'No Commission' },
    others: { icon: false, text: '15-30% Commission' }
  },
  {
    feature: '24/7 Support',
    egyptra: { icon: true, text: 'Direct Team' },
    others: { icon: false, text: 'Limited Hours' }
  },
  {
    feature: 'Payment Options',
    egyptra: { icon: true, text: 'Cash on Spot Available' },
    others: { icon: false, text: 'Prepayment Required' }
  },
  {
    feature: 'Cancellation Policy',
    egyptra: { icon: true, text: 'Full Refund (12h)' },
    others: { icon: false, text: 'Partial/No Refund' }
  },
  {
    feature: 'Languages',
    egyptra: { icon: true, text: '20+ Languages' },
    others: { icon: false, text: '2-5 Languages' }
  },
  {
    feature: 'Tour Variety',
    egyptra: { icon: true, text: '1000+ Options' },
    others: { icon: false, text: 'Limited Selection' }
  },
  {
    feature: 'Experience',
    egyptra: { icon: true, text: '20 Years' },
    others: { icon: false, text: 'Variable' }
  },
  {
    feature: 'Group Prices for Individuals',
    egyptra: { icon: true, text: 'Always' },
    others: { icon: false, text: 'Groups Only' }
  },
]

export const options = [
  {
    icon: Wallet,
    title: 'Cash on Spot',
    description: 'Book online and pay cash on arrival. No payment required.'
  },
  {
    icon: CreditCard,
    title: 'Secure Payment Link',
    description: 'Protected online payment with instant confirmation.'
  },
  {
    icon: CheckCircle,
    title: 'No Prepayment',
    description: 'Book now, pay later. Cancel any time!'
  }
]

export const advantages = [
  {
    icon: DollarSign,
    title: 'Best Price Guarantee',
    description: 'Direct local deals with no commission added. Get exclusive prices on group mixed tours guaranteed the most competitive prices in Egypt!'
  },
  {
    icon: ShieldCheck,
    title: '100% Secure & Flexible',
    description: 'Licensed Category A company. Multiple payment options including cash on spot, secure payment links, and no prepayment needed.'
  },
  {
    icon: BadgeCheck,
    title: 'Local Expertise',
    description: 'All guides are licensed Egyptologists with 5+ years experience. Discover hidden gems only locals know.'
  }
]


// data/navigationData.ts


export const tourCategoryData = [
  { name: 'Safari', href: '/category-products/safari' },
  { name: 'Boat Tour', href: '/category-products/boat-tour' },
  { name: 'Diving', href: '/category-products/diving' },
  { name: 'Snorkeling', href: '/category-products/snorkeling' },
  { name: 'Historical', href: '/category-products/historical' },
  { name: 'City Tour', href: '/category-products/city-tour' },
  { name: 'Cultural', href: '/category-products/cultural' },
  { name: 'Multi-day', href: '/category-products/multi-day' },
];

export const travelGuideData = [
  { name: 'Hurghada Guide', href: '/destination_tours_tr/hurghada' },
  { name: 'Sharm El Sheikh Guide', href: '/destination_tours_tr/sharm-el-sheikh' },
  { name: 'Cairo Guide', href: '/destination_tours_tr/cairo' },
  { name: 'Luxor Guide', href: '/destination_tours_tr/luxor' },
  { name: 'Marsa Alam Guide', href: '/destination_tours_tr/marsa-alam' },
];
// data.ts

export const destinationsData = {
  'Popular Destinations': [
    { name: 'Cairo', href: '/destination_tours_tr/cairo' },
    { name: 'Luxor', href: '/destination_tours_tr/luxor' },
    { name: 'Hurghada', href: '/destination_tours_tr/hurghada' },
    { name: 'Sharm El Sheikh', href: '/destination_tours_tr/sharm-el-sheikh' },
  ],
  '': [
    { name: 'El Gouna', href: '/destination_tours_tr/el-gouna' },
    { name: 'Marsa Alam', href: '/destination_tours_tr/marsa-alam' },
    { name: 'Soma Bay', href: '/destination_tours_tr/soma-bay' },
    { name: 'Maadi Bay', href: '/destination_tours_tr/maadi-bay' },
    { name: 'Salh Hasheed', href: '/destination_tours_tr/salh-hasheed' },
  ]
};

export const languages = [
  { code: 'EN', name: 'English', flag: 'gb' },
  { code: 'IT', name: 'Italiano', flag: 'it' },
  { code: 'DE', name: 'Deutsch', flag: 'de' },
  { code: 'FR', name: 'Français', flag: 'fr' },
  { code: 'ES', name: 'Español', flag: 'es' },
  { code: 'TR', name: 'Türkçe', flag: 'tr' },
  { code: 'PL', name: 'Polski', flag: 'pl' },
  { code: 'RU', name: 'Русский', flag: 'ru' },
  { code: 'NL', name: 'Nederlands', flag: 'nl' },
  // { code: 'PT', name: 'Português', flag: 'pt' }, //
  { code: 'AR', name: 'العربية', flag: 'sa' },
  { code: 'ZH', name: '中文', flag: 'cn' },
  // { code: 'JA', name: '日本語', flag: 'jp' }, //
  // { code: 'KO', name: '한국어', flag: 'kr' }, //
  { code: 'HI', name: 'हिन्दी', flag: 'in' },
  // { code: 'HU', name: 'Magyar', flag: 'hu' }, // 
  { code: 'RO', name: 'Română', flag: 'ro' },
  // { code: 'BG', name: 'Български', flag: 'bg' }, // 
  // { code: 'CS', name: 'Čeština', flag: 'cz' }, // 
  // { code: 'SV', name: 'Svenska', flag: 'se' }, // 
  // { code: 'DA', name: 'Dansk', flag: 'dk' }, // 
  // { code: 'NO', name: 'Norsk', flag: 'no' }, // 
  // { code: 'FI', name: 'Suomi', flag: 'fi' }, //
  // { code: 'EL', name: 'Ελληνικά', flag: 'gr' }, // 
  // { code: 'SR', name: 'Српски', flag: 'rs' }, // 
  // { code: 'SK', name: 'Slovenčina', flag: 'sk' }, // 
  // { code: 'LT', name: 'Lietuvių', flag: 'lt' }, // 
  // { code: 'LV', name: 'Latviešu', flag: 'lv' }, // 
  // { code: 'ET', name: 'Eesti', flag: 'ee' }, //
];

export const currencies = [
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£' },
];


// Hurghada images
import hurghada1 from '../../public/assets/destinations/hurghada-1.jpg';
import hurghada2 from '../../public/assets/destinations/hurghada-2.jpg';
import hurghada3 from '../../public/assets/destinations/hurghada-3.jpg';
import hurghada4 from '../../public/assets/destinations/hurghada-4.jpg';
import hurghada5 from '../../public/assets/destinations/hurghada-5.jpg';

// Cairo images
import cairo1 from '../../public/assets/destinations/cairo-1.jpg';
import cairo2 from '../../public/assets/destinations/cairo-2.jpg';
import cairo3 from '../../public/assets/destinations/cairo-3.jpg';
import cairo4 from '../../public/assets/destinations/cairo-4.jpg';
import cairo5 from '../../public/assets/destinations/cairo-5.jpg';

// Luxor images
import luxor1 from '../../public/assets/destinations/luxor-1.jpg';
import luxor2 from '../../public/assets/destinations/luxor-2.jpg';
import luxor3 from '../../public/assets/destinations/luxor-3.jpg';
import luxor4 from '../../public/assets/destinations/luxor-4.jpg';
import luxor5 from '../../public/assets/destinations/luxor-5.jpg';

// Sharm images
import sharm1 from '../../public/assets/destinations/sharm-1.jpg';
import sharm2 from '../../public/assets/destinations/sharm-2.jpg';
import sharm3 from '../../public/assets/destinations/sharm-3.jpg';
import sharm4 from '../../public/assets/destinations/sharm-4.jpg';
import sharm5 from '../../public/assets/destinations/sharm-5.jpg';
import { FilterOption, SortOption, Tour } from './types';

export interface Destination {
  name: string;
  href: string;
  images: StaticImageData[];
}

export interface DestinationGroups {
  [key: string]: Destination[];
}

export const destinationGroups: DestinationGroups = {
  'Popular Destinations': [
    {
      name: 'Cairo',
      href: '#',
      images: [cairo1, cairo2, cairo3, cairo4, cairo5]
    },
    {
      name: 'Luxor',
      href: '#',
      images: [luxor1, luxor2, luxor3, luxor4, luxor5]
    },
    {
      name: 'Hurghada',
      href: '#',
      images: [hurghada1, hurghada2, hurghada3, hurghada4, hurghada5]
    },
    {
      name: 'Sharm El Sheikh',
      href: '#',
      images: [sharm1, sharm2, sharm3, sharm4, sharm5]
    },
  ],
  '': [
    {
      name: 'El Gouna',
      href: '#',
      images: [hurghada1, hurghada4, hurghada3, hurghada2, hurghada5]
    },
    {
      name: 'Marsa Alam',
      href: '#',
      images: [sharm1, hurghada1, sharm3, hurghada4, sharm5]
    },
    {
      name: 'Soma Bay',
      href: '#',
      images: [hurghada5, hurghada2, hurghada1, hurghada3, hurghada4]
    },
    {
      name: 'Maadi Bay',
      href: '#',
      images: [sharm2, sharm4, sharm1, hurghada1, sharm5]
    },
    {
      name: 'Sahl Hasheesh',
      href: '#',
      images: [hurghada4, hurghada1, hurghada5, hurghada2, hurghada3]
    },
  ]

};

// Flatten all destinations for easy carousel navigation
export const allDestinations: Destination[] = Object.values(destinationGroups).flat();

// Sample data for tours with unique IDs
export const toursData: Tour[] = [
  {
    id: 1,
    title: "Hurghada: Dolphin watching boat tour with snorkeling",
    slug: "hurghada-dolphin-watching",
    description: "Amazing dolphin watching experience in the Red Sea",
    shortDesc: "Dolphin tour with snorkeling",
    duration: "3 Hours",
    maxGroupSize: 15,
    difficulty: "Easy",
    isOnSale: false,
    salePercentage: null,
    isActive: true,
    adultPrice: "254",
    childPrice: null,
    infantPrice: null,
    guideLanguages: ["English"],
    badge: null,
    highlights: ["Dolphins", "Snorkeling", "Boat Tour"],
    inclusions: ["Boat", "Guide", "Snorkeling Equipment"],
    isPopular: true,
    location: "Hurghada",
    averageRating: "4.2",
    reviewsCount: 1200,
    category: "Boat Tour",
    destination: "Hurghada",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
    photos: [{ id: "1", url: "/images/1.jpg", isPrimary: true }],
    primaryPhoto: { id: "1", url: "/images/1.jpg", isPrimary: true }
  },
  {
    id: 2,
    title: "Valley of the Kings: Ancient Egyptian Tombs Tour",
    slug: "valley-kings-tour",
    description: "Explore the ancient tombs in the Valley of the Kings",
    shortDesc: "Valley of Kings tour",
    duration: "5 Hours",
    maxGroupSize: 20,
    difficulty: "Medium",
    isOnSale: false,
    salePercentage: null,
    isActive: true,
    adultPrice: "189",
    childPrice: null,
    infantPrice: null,
    guideLanguages: ["English"],
    badge: null,
    highlights: ["Tombs", "History", "Ancient Egypt"],
    inclusions: ["Guide", "Transport", "Entrance Fees"],
    isPopular: true,
    location: "Luxor",
    averageRating: "4.7",
    reviewsCount: 850,
    category: "Historical",
    destination: "Luxor",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
    photos: [{ id: "2", url: "/images/2.jpg", isPrimary: true }],
    primaryPhoto: { id: "2", url: "/images/2.jpg", isPrimary: true }
  },
  {
    id: 3,
    title: "Pyramids of Giza and Sphinx Full Day Tour",
    slug: "pyramids-giza-sphinx",
    description: "Full day tour of the Pyramids of Giza and Sphinx",
    shortDesc: "Pyramids and Sphinx tour",
    duration: "8 Hours",
    maxGroupSize: 25,
    difficulty: "Easy",
    isOnSale: false,
    salePercentage: null,
    isActive: true,
    adultPrice: "320",
    childPrice: null,
    infantPrice: null,
    guideLanguages: ["English"],
    badge: null,
    highlights: ["Pyramids", "Sphinx", "Ancient Wonders"],
    inclusions: ["Guide", "Transport", "Lunch", "Entrance Fees"],
    isPopular: true,
    location: "Giza",
    averageRating: "4.9",
    reviewsCount: 2100,
    category: "Historical",
    destination: "Cairo",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
    photos: [{ id: "3", url: "/images/3.jpg", isPrimary: true }],
    primaryPhoto: { id: "3", url: "/images/3.jpg", isPrimary: true }
  },
  {
    id: 4,
    title: "Red Sea Snorkeling Adventure",
    slug: "red-sea-snorkeling",
    description: "Snorkeling adventure in the Red Sea",
    shortDesc: "Red Sea snorkeling",
    duration: "4 Hours",
    maxGroupSize: 20,
    difficulty: "Easy",
    isOnSale: false,
    salePercentage: null,
    isActive: true,
    adultPrice: "185",
    childPrice: null,
    infantPrice: null,
    guideLanguages: ["English"],
    badge: null,
    highlights: ["Snorkeling", "Marine Life", "Red Sea"],
    inclusions: ["Boat", "Guide", "Snorkeling Equipment"],
    isPopular: true,
    location: "Hurghada",
    averageRating: "4.6",
    reviewsCount: 1800,
    category: "Snorkeling",
    destination: "Hurghada",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
    photos: [{ id: "4", url: "/images/2.jpg", isPrimary: true }],
    primaryPhoto: { id: "4", url: "/images/2.jpg", isPrimary: true }
  },
  {
    id: 5,
    title: "Desert Safari with BBQ Dinner",
    slug: "desert-safari-bbq",
    description: "Desert safari with BBQ dinner",
    shortDesc: "Desert safari",
    duration: "6 Hours",
    maxGroupSize: 15,
    difficulty: "Medium",
    isOnSale: false,
    salePercentage: null,
    isActive: true,
    adultPrice: "95",
    childPrice: null,
    infantPrice: null,
    guideLanguages: ["English"],
    badge: null,
    highlights: ["Desert", "Safari", "BBQ Dinner"],
    inclusions: ["Jeep", "Guide", "BBQ Dinner"],
    isPopular: true,
    location: "Hurghada",
    averageRating: "4.7",
    reviewsCount: 2200,
    category: "Safari",
    destination: "Hurghada",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
    photos: [{ id: "5", url: "/images/3.jpg", isPrimary: true }],
    primaryPhoto: { id: "5", url: "/images/3.jpg", isPrimary: true }
  },
  {
    id: 6,
    title: "Submarine Tour in Red Sea",
    slug: "submarine-tour-red-sea",
    description: "Submarine tour in the Red Sea",
    shortDesc: "Submarine tour",
    duration: "2 Hours",
    maxGroupSize: 50,
    difficulty: "Easy",
    isOnSale: false,
    salePercentage: null,
    isActive: true,
    adultPrice: "120",
    childPrice: null,
    infantPrice: null,
    guideLanguages: ["English"],
    badge: null,
    highlights: ["Submarine", "Marine Life", "Red Sea"],
    inclusions: ["Submarine Tour", "Guide"],
    isPopular: true,
    location: "Hurghada",
    averageRating: "4.5",
    reviewsCount: 1600,
    category: "Boat Tour",
    destination: "Hurghada",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
    photos: [{ id: "6", url: "/images/1.jpg", isPrimary: true }],
    primaryPhoto: { id: "6", url: "/images/1.jpg", isPrimary: true }
  },
  {
    id: 7,
    title: "Cairo City Tour",
    slug: "cairo-city-tour",
    description: "Explore the vibrant city of Cairo",
    shortDesc: "Cairo city tour",
    duration: "6 Hours",
    maxGroupSize: 20,
    difficulty: "Easy",
    isOnSale: false,
    salePercentage: null,
    isActive: true,
    adultPrice: "85",
    childPrice: null,
    infantPrice: null,
    guideLanguages: ["English"],
    badge: null,
    highlights: ["City", "Culture", "History"],
    inclusions: ["Guide", "Transport"],
    isPopular: true,
    location: "Cairo",
    averageRating: "4.6",
    reviewsCount: 2500,
    category: "City Tour",
    destination: "Cairo",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
    photos: [{ id: "7", url: "/images/1.jpg", isPrimary: true }],
    primaryPhoto: { id: "7", url: "/images/1.jpg", isPrimary: true }
  },
  {
    id: 8,
    title: "Nile River Dinner Cruise",
    slug: "nile-river-dinner-cruise",
    description: "Romantic dinner cruise on the Nile River",
    shortDesc: "Nile dinner cruise",
    duration: "4 Hours",
    maxGroupSize: 100,
    difficulty: "Easy",
    isOnSale: false,
    salePercentage: null,
    isActive: true,
    adultPrice: "65",
    childPrice: null,
    infantPrice: null,
    guideLanguages: ["English"],
    badge: null,
    highlights: ["Nile River", "Dinner", "Cruise"],
    inclusions: ["Cruise", "Dinner", "Entertainment"],
    isPopular: true,
    location: "Cairo",
    averageRating: "4.7",
    reviewsCount: 1800,
    category: "Boat Tour",
    destination: "Cairo",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
    photos: [{ id: "8", url: "/images/2.jpg", isPrimary: true }],
    primaryPhoto: { id: "8", url: "/images/2.jpg", isPrimary: true }
  }
];

export const quickFilters: FilterOption[] = [
  { id: "all-tours", label: "All Tours" },
  { id: "under-50", label: "Under €50" },
  { id: "top-rated", label: "Top Rated" },
  { id: "best-seller", label: "Best Seller" }
]

export const ratingOptions: FilterOption[] = [
  { id: "any", label: "Any Rating", stars: 0 },
  { id: "5-plus", label: "5+ Stars", stars: 5 },
  { id: "4-plus", label: "4+ Stars", stars: 4 },
  { id: "3-plus", label: "3+ Stars", stars: 3 }
]

export const sortOptions: SortOption[] = [
  { value: "popularity", label: "Popularity" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "rating", label: "Rating" },
  { value: "duration", label: "Duration" }
]

export const destinationOptions: SortOption[] = [
  { value: "any-destination", label: "Any Destination" },
  { value: "cairo", label: "Cairo" },
  { value: "luxor", label: "Luxor" },
  { value: "giza", label: "Giza" },
  { value: "hurghada", label: "Hurghada" },
  { value: "sharm-el-sheikh", label: "Sharm El Sheikh" }
]


export const stats = [
  { label: 'Tours & Activities', value: '1000+', icon: Globe, id: 'tours' },
  { label: 'Satisfied Customers', value: '1M+', icon: Users, id: 'customers' },
  { label: 'Platform Reviews', value: '100K+', icon: Star, id: 'reviews' },
  { label: 'Languages Supported', value: '20+', icon: Flag, id: 'languages' },
]

// Mock reviews data
export const mockReviews = [
  {
    id: "1",
    rating: 5,
    title: "Amazing Experience!",
    content: "The tour was fantastic. Our guide was knowledgeable and the sights were breathtaking.",
    authorName: "John Doe",
    authorLocation: "New York, USA",
    userId: "user1",
    tourId: "1",
    createdAt: "2023-10-01T10:00:00Z",
    updatedAt: "2023-10-01T10:00:00Z",
    user: {
      id: "user1",
      firstName: "John",
      lastName: "Doe"
    },
    tour: {
      id: 1,
      title: "Hurghada: Dolphin watching boat tour with snorkeling",
      slug: "hurghada-dolphin-watching",
      description: "Amazing dolphin watching experience",
      shortDesc: "Dolphin tour",
      duration: "3 Hours",
      maxGroupSize: 15,
      difficulty: "Easy",
      isOnSale: false,
      salePercentage: null,
      isActive: true,
      adultPrice: "254",
      childPrice: null,
      infantPrice: null,
      guideLanguages: ["English"],
      badge: null,
      highlights: ["Dolphins", "Snorkeling"],
      inclusions: ["Boat", "Guide"],
      isPopular: true,
      location: "Hurghada",
      averageRating: "4.2",
      reviewsCount: 1200,
      category: "Boat Tour",
      destination: "Hurghada",
      createdAt: "2023-01-01T00:00:00Z",
      updatedAt: "2023-01-01T00:00:00Z",
      photos: [],
      primaryPhoto: null
    }
  },
  {
    id: "2",
    rating: 4,
    title: "Great Value",
    content: "Good tour with excellent value for money. Would recommend to friends.",
    authorName: "Jane Smith",
    authorLocation: "London, UK",
    userId: "user2",
    tourId: "2",
    createdAt: "2023-09-15T14:30:00Z",
    updatedAt: "2023-09-15T14:30:00Z",
    user: {
      id: "user2",
      firstName: "Jane",
      lastName: "Smith"
    },
    tour: {
      id: 2,
      title: "Valley of the Kings: Ancient Egyptian Tombs Tour",
      slug: "valley-kings-tour",
      description: "Explore ancient tombs",
      shortDesc: "Valley of Kings",
      duration: "5 Hours",
      maxGroupSize: 20,
      difficulty: "Medium",
      isOnSale: false,
      salePercentage: null,
      isActive: true,
      adultPrice: "189",
      childPrice: null,
      infantPrice: null,
      guideLanguages: ["English"],
      badge: null,
      highlights: ["Tombs", "History"],
      inclusions: ["Guide", "Transport"],
      isPopular: true,
      location: "Luxor",
      averageRating: "4.7",
      reviewsCount: 850,
      category: "Historical",
      destination: "Luxor",
      createdAt: "2023-01-01T00:00:00Z",
      updatedAt: "2023-01-01T00:00:00Z",
      photos: [],
      primaryPhoto: null
    }
  },
  {
    id: "3",
    rating: 5,
    title: "Unforgettable Journey",
    content: "This was the highlight of our trip to Egypt. Highly professional service.",
    authorName: "Mike Johnson",
    authorLocation: "Toronto, Canada",
    userId: "user3",
    tourId: "3",
    createdAt: "2023-08-20T09:15:00Z",
    updatedAt: "2023-08-20T09:15:00Z",
    user: {
      id: "user3",
      firstName: "Mike",
      lastName: "Johnson"
    },
    tour: {
      id: 3,
      title: "Pyramids of Giza and Sphinx Full Day Tour",
      slug: "pyramids-giza-sphinx",
      description: "Full day tour of pyramids",
      shortDesc: "Pyramids tour",
      duration: "8 Hours",
      maxGroupSize: 25,
      difficulty: "Easy",
      isOnSale: false,
      salePercentage: null,
      isActive: true,
      adultPrice: "320",
      childPrice: null,
      infantPrice: null,
      guideLanguages: ["English"],
      badge: null,
      highlights: ["Pyramids", "Sphinx"],
      inclusions: ["Guide", "Transport", "Lunch"],
      isPopular: true,
      location: "Giza",
      averageRating: "4.9",
      reviewsCount: 2100,
      category: "Historical",
      destination: "Cairo",
      createdAt: "2023-01-01T00:00:00Z",
      updatedAt: "2023-01-01T00:00:00Z",
      photos: [],
      primaryPhoto: null
    }
  }
];



