// Tour type definition
export interface Tour {
    id: string;
    slug: string;
    imagePath: string;
    galleryImages: string[];
    city: string;
    title: string;
    price: string;
    rating: string;
    reviewCount: number;
    duration: string;
    groupSize: string;
    location: string;
    description: string;
    highlights: string[];
    included: string[];
    notIncluded: string[];
    whatToBring: string[];
    importantNotes: string[];
    languages: string[];
    pickup: string;
    mobileTicket: string;
    itinerary: {
        time: string;
        activity: string;
    }[];
    cancellationPolicy: string;
    customerReviews: {
        id: string;
        name: string;
        date: string;
        rating: number;
        comment: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
    availableFrom: string[];
    instantConfirmation: boolean;
    views: number;
}

// Mock data function
export function getTourBySlug(slug: string): Tour | null {
    const tours: Tour[] = [
        {
            id: '1',
            slug: 'hurghada-dolphin-watching-boat-tour-with-snorkeling-lunch',
            imagePath: "/assets/destinations/hurghada-3.jpg",
            galleryImages: [
                "/assets/destinations/hurghada-5.jpg",
                "/assets/destinations/hurghada-2.jpg",
                "/assets/destinations/hurghada-1.jpg",
                "/assets/destinations/cairo-3.jpg",
                "/assets/destinations/cairo-2.jpg",
                "/assets/destinations/cairo-1.jpg",
            ],
            city: 'Hurghada',
            title: 'Dolphin House Hurghada Snorkeling Sea Trip',
            price: '$ 254',
            rating: '4.9',
            reviewCount: 10040,
            duration: '8 hours',
            groupSize: '40',
            location: 'Hurghada, Red Sea, Egypt',
            description: 'Embark on an unforgettable Dolphin House Hurghada adventure, where you\'ll cruise the stunning Red Sea, snorkel among vibrant coral reefs, and encounter playful dolphins in their natural habitat. This Dolphin boat trip combines relaxation and adventure, making it perfect for families and couples alike.',
            highlights: [
                'Swim with dolphins in their natural habitat',
                'Snorkel in crystal clear waters',
                'Enjoy a delicious lunch on board',
                'Professional guide throughout the trip',
                'Hotel pickup and drop-off included'
            ],
            included: [
                'Hotel pickup and drop-off',
                'Snorkeling equipment',
                'Lunch and soft drinks',
                'Professional guide',
                'Life jacket'
            ],
            notIncluded: [
                'Personal expenses',
                'Tips for guide and crew',
                'Alcoholic beverages',
                'Underwater camera (available for rent)'
            ],
            whatToBring: [
                'Swimwear',
                'Sunglasses',
                'Towel',
                'Hat or cap',
                'Sunscreen',
                'Camera'
            ],
            importantNotes: [
                'Dolphin sightings cannot be guaranteed as they are wild animals',
                'Not recommended for pregnant women or people with back problems',
                'Swimming ability required for water activities'
            ],
            languages: ['English', 'Arabic', 'German', 'Russian'],
            pickup: 'Hotel lobby (time will be confirmed)',
            mobileTicket: 'Accepted - show on your phone',
            itinerary: [
                {
                    time: '7:00 AM',
                    activity: 'Hotel pickup from your accommodation in Hurghada'
                },
                {
                    time: '8:00 AM',
                    activity: 'Board the boat and set sail to Dolphin House'
                },
                {
                    time: '9:00 AM',
                    activity: 'Dolphin watching and swimming with dolphins'
                },
                {
                    time: '10:30 AM',
                    activity: 'First snorkeling session at the coral reef'
                },
                {
                    time: '12:00 PM',
                    activity: 'Lunch on board the boat'
                },
                {
                    time: '1:30 PM',
                    activity: 'Second snorkeling session at a different location'
                },
                {
                    time: '3:00 PM',
                    activity: 'Return to the marina and transfer back to your hotel'
                }
            ],
            cancellationPolicy: 'Free cancellation up to 24 hours',
            customerReviews: [
                {
                    id: '1',
                    name: 'Sarah Johnson',
                    date: 'March 15, 2023',
                    rating: 5,
                    comment: 'Amazing experience! The dolphins were so playful and the snorkeling spots were beautiful. The crew was very professional and the lunch was delicious. Highly recommend!'
                },
                {
                    id: '2',
                    name: 'Michael Chen',
                    date: 'February 28, 2023',
                    rating: 4,
                    comment: 'Great tour overall. We saw dolphins which was the highlight. The snorkeling equipment was good quality. The only reason I\'m not giving 5 stars is that the boat was a bit crowded.'
                },
                {
                    id: '3',
                    name: 'Emily Rodriguez',
                    date: 'January 10, 2023',
                    rating: 5,
                    comment: 'This was the highlight of our trip to Egypt! The crew went above and beyond to make sure we had a great time. The lunch was surprisingly good for a boat tour.'
                }
            ],
            faqs: [
                {
                    question: 'What is included in the boat trip package?',
                    answer: 'The package includes transportation, professional guide, all equipment needed for water activities, lunch, and refreshments throughout the day.'
                },
                {
                    question: 'Can I cancel or reschedule my booking?',
                    answer: 'Yes, free cancellation is available up to 24 hours before the tour starts. For rescheduling, please contact us at least 48 hours in advance.'
                },
                {
                    question: 'What should I bring with me?',
                    answer: 'We recommend bringing swimwear, towel, sunscreen, sunglasses, hat or cap, and a camera. All equipment for water activities will be provided.'
                },
                {
                    question: 'Are children allowed on the boat trip?',
                    answer: 'Yes, children of all ages are welcome. Life jackets and snorkeling equipment are available in children\'s sizes.'
                }
            ],
            availableFrom: ['Hurghada', 'Makadi Bay', 'El Gouna', 'Sahl Hasheesh', 'Soma Bay', 'Safaga'],
            instantConfirmation: true,
            views: 47
        },
    ];

    return tours.find(tour => tour.slug === slug) || null;
}

// Related tours data
export function getRelatedTours(currentTourId: string) {
    const relatedTours = [
        {
            id: '2',
            imagePath: "/assets/destinations/hurghada-3.jpg",
            city: 'Cairo',
            title: 'Hurghada: Dolphin watching boat tour with snorkeling',
            price: '$ 254',
            rating: '4.2',
            reviewCount: 1200,
            duration: '3 Hours',
            groupSize: '12',
            location: 'Historical',
        },
        {
            id: '3',
            imagePath: "/assets/destinations/hurghada-1.jpg",
            city: 'Cairo',
            title: 'Hurghada: Dolphin watching boat tour with snorkeling',
            price: '$ 254',
            rating: '4.2',
            reviewCount: 1200,
            duration: '3 Hours',
            groupSize: '20',
            location: 'Historical',
        },
        {
            id: '4',
            imagePath: "/assets/destinations/hurghada-2.jpg",
            city: 'Cairo',
            title: 'Hurghada: Dolphin watching boat tour with snorkeling',
            price: '$ 254',
            rating: '4.2',
            reviewCount: 1200,
            duration: '3 Hours',
            groupSize: '8',
            location: 'Historical',
        },
        {
            id: '5',
            imagePath: "/assets/destinations/hurghada-5.jpg",
            city: 'Cairo',
            title: 'Hurghada: Dolphin watching boat tour with snorkeling',
            price: '$ 254',
            rating: '4.2',
            reviewCount: 1200,
            duration: '3 Hours',
            groupSize: '8',
            location: 'Historical',
        },
    ];

    return relatedTours;
}

// Recently viewed tours data
export function getRecentlyViewedTours() {
    const recentlyViewedTours = [
        {
            id: '5',
            imagePath: "/assets/destinations/hurghada-4.jpg",
            city: 'Cairo',
            title: 'Hurghada: Dolphin watching boat tour with snorkeling',
            price: '$ 254',
            rating: '4.2 (1200)',
            duration: '3 Hours',
            groupSize: '25',
            location: 'Historical',
        },
        {
            id: '6',
            imagePath: "/assets/destinations/cairo-3.jpg",
            city: 'Cairo',
            title: 'Hurghada: Dolphin watching boat tour with snorkeling',
            price: '$ 254',
            rating: '4.2 (1200)',
            duration: '3 Hours',
            groupSize: '20',
            location: 'Historical',
        },
        {
            id: '7',
            imagePath: "/assets/destinations/cairo-1.jpg",
            city: 'Cairo',
            title: 'Hurghada: Dolphin watching boat tour with snorkeling',
            price: '$ 254',
            rating: '4.2 (1200)',
            duration: '3 Hours',
            groupSize: '15',
            location: 'Historical',
        },
        {
            id: '8',
            imagePath: '/assets/destinations/cairo-2.jpg',
            city: 'Cairo',
            title: 'Hurghada: Dolphin watching boat tour with snorkeling',
            price: '$ 254',
            rating: '4.2 (1200)',
            duration: '3 Hours',
            groupSize: '30',
            location: 'Nature',
        },
    ];

    return recentlyViewedTours;
}

// Top experiences data
export function getTopExperiences() {
    const topExperiences = [
        {
            id: '9',
            imagePath: '/assets/destinations/cairo-1.jpg',
            city: 'Cairo',
            title: 'Hurghada: Dolphin watching boat tour with snorkeling',
            price: '$ 254',
            rating: '4.2 (1200)',
            duration: '3 Hours',
            groupSize: '20',
            location: 'Adventure',
        },
        {
            id: '10',
            imagePath: '/assets/destinations/cairo-2.jpg',
            city: 'Cairo',
            title: 'Hurghada: Dolphin watching boat tour with snorkeling',
            price: '$ 254',
            rating: '4.2 (1200)',
            duration: '3 Hours',
            groupSize: '25',
            location: 'Adventure',
        },
        {
            id: '11',
            imagePath: '/assets/destinations/luxor-3.jpg',
            city: 'Cairo',
            title: 'Hurghada: Dolphin watching boat tour with snorkeling',
            price: '$ 254',
            rating: '4.2 (1200)',
            duration: '3 Hours',
            groupSize: '40',
            location: 'Family',
        },
        {
            id: '12',
            imagePath: '/assets/destinations/luxor-1.jpg',
            city: 'Cairo',
            title: 'Hurghada: Dolphin watching boat tour with snorkeling',
            price: '$ 254',
            rating: '4.2 (1200)',
            duration: '3 Hours',
            groupSize: '30',
            location: 'Cultural',
        },
    ];

    return topExperiences;
}