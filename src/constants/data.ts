import {  CreditCard, CheckCircle,
        Wallet ,DollarSign, ShieldCheck, BadgeCheck  } from 'lucide-react'

export const cities = ['Cairo', 'Hurghada', 'Luxor', 'Aswan'];

// Map each city to its specific image
export const cityImages: Record<string, string> = {
    'Cairo': "/images/dest1.png",
    'Hurghada': "/images/dest2.jpg",
    'Luxor': "/images/dest5.jpg",
    'Aswan': "/images/dest3.jpg"
};

// Different image sets for each city
export const cityTourImages: Record<string, string[]> = {
    'Cairo': [
        "/images/dest1.png",
        "/images/dest2.jpg",
        "/images/dest5.jpg",
        "/images/dest3.jpg",
        "/images/dest6.jpg",
        "/images/dest4.jpg"
    ],
    'Hurghada': [
        "/images/dest2.jpg",
        "/images/dest5.jpg",
        "/images/dest3.jpg",
        "/images/dest6.jpg",
        "/images/dest4.jpg",
        "/images/dest1.png"
    ],
    'Luxor': [
        "/images/dest5.jpg",
        "/images/dest3.jpg",
        "/images/dest6.jpg",
        "/images/dest4.jpg",
        "/images/dest1.png",
        "/images/dest2.jpg"
    ],
    'Aswan': [
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
    'Cairo': [
        { city: 'Cairo', title: 'Pyramids of Giza: Full Day Tour', price: '$ 120', rating: '4.8 (320)' },
        { city: 'Cairo', title: 'Egyptian Museum & Citadel Tour', price: '$ 85', rating: '4.6 (250)' },
        { city: 'Cairo', title: 'Nile River Dinner Cruise', price: '$ 65', rating: '4.7 (180)' },
        { city: 'Cairo', title: 'Khan el-Khalili Bazaar Experience', price: '$ 45', rating: '4.5 (150)' },
        { city: 'Cairo', title: 'Coptic Cairo & Old City Tour', price: '$ 70', rating: '4.4 (120)' },
        { city: 'Cairo', title: 'Sound and Light Show at Pyramids', price: '$ 55', rating: '4.3 (90)' }
    ],
    'Hurghada': [
        { city: 'Hurghada', title: 'Dolphin watching boat tour with snorkeling', price: '$ 254', rating: '4.2 (200)' },
        { city: 'Hurghada', title: 'Red Sea Snorkeling Adventure', price: '$ 185', rating: '4.6 (180)' },
        { city: 'Hurghada', title: 'Desert Safari with BBQ Dinner', price: '$ 95', rating: '4.7 (220)' },
        { city: 'Hurghada', title: 'Submarine Tour in Red Sea', price: '$ 120', rating: '4.5 (160)' },
        { city: 'Hurghada', title: 'Giftun Island Boat Trip', price: '$ 75', rating: '4.8 (280)' },
        { city: 'Hurghada', title: 'Hurghada City Tour & Shopping', price: '$ 55', rating: '4.3 (140)' }
    ],
    'Luxor': [
        { city: 'Luxor', title: 'Valley of the Kings & Queens Tour', price: '$ 145', rating: '4.9 (350)' },
        { city: 'Luxor', title: 'Karnak & Luxor Temples Day Tour', price: '$ 110', rating: '4.7 (280)' },
        { city: 'Luxor', title: 'Hot Air Balloon over Luxor', price: '$ 175', rating: '4.8 (200)' },
        { city: 'Luxor', title: 'Dendera & Abydos Temples Tour', price: '$ 125', rating: '4.6 (150)' },
        { city: 'Luxor', title: 'Luxor West Bank Full Day Tour', price: '$ 135', rating: '4.7 (220)' },
        { city: 'Luxor', title: 'Sound and Light at Karnak Temple', price: '$ 65', rating: '4.4 (120)' }
    ],
    'Aswan': [
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

    export     const advantages = [
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
    