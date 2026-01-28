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
  { name: 'Safari', href: '#' },
  { name: 'Boat Tour', href: '#' },
  { name: 'Diving', href: '#' },
  { name: 'Snorkeling', href: '#' },
  { name: 'Historical', href: '#' },
  { name: 'City Tour', href: '#' },
  { name: 'Cultural', href: '#' },
  { name: 'Multi-day', href: '#' },
];

export const travelGuideData = [
  { name: 'Hurghada Guide', href: '#' },
  { name: 'Sharm El Sheikh Guide', href: '#' },
  { name: 'Cairo Guide', href: '#' },
  { name: 'Luxor Guide', href: '#' },
  { name: 'Marsa Alam Guide', href: '#' },
];
// data.ts

export const destinationsData = {
  'Popular Destinations': [
    { name: 'Cairo', href: '#' },
    { name: 'Luxor', href: '#' },
    { name: 'Hurghada', href: '#' },
    { name: 'Sharm El Sheikh', href: '#' },
  ],
  '': [
    { name: 'El Gouna', href: '#' },
    { name: 'Marsa Alam', href: '#' },
    { name: 'Soma Bay', href: '#' },
    { name: 'Maadi Bay', href: '#' },
    { name: 'Salh Hasheed', href: '#' },
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
    imagePath: "/images/1.jpg",
    city: "Cairo",
    title: "Hurghada: Dolphin watching boat tour with snorkeling",
    price: "$254",
    rating: "4.2 (1200)",
    duration: "3 Hours",
    category: "Historical",
    variant: "detailed"
  },
  {
    id: 2,
    imagePath: "/images/2.jpg",
    city: "Luxor",
    title: "Valley of the Kings: Ancient Egyptian Tombs Tour",
    price: "$189",
    rating: "4.7 (850)",
    duration: "5 Hours",
    category: "Historical",
    variant: "detailed"
  },
  {
    id: 3,
    imagePath: "/images/3.jpg",
    city: "Giza",
    title: "Pyramids of Giza and Sphinx Full Day Tour",
    price: "$320",
    rating: "4.9 (2100)",
    duration: "8 Hours",
    category: "Historical",
    variant: "detailed"
  },
]

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


