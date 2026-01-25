// SearchPage.tsx
"use client";

import Container from "@/util/Container";
import SectionHeader from "@/util/SectionHeader";
import SearchPageHero from "@/components/search/SearchPageHero";
import TrustBadges from "@/components/search/TrustBadges";
import { TourCard } from "@/components/shared/TourCard";

const SearchPage = () => {
    const mockTours = [
        {
            imagePath: "/images/1.jpg",
            city: "Cairo",
            title: "Hurghada: Dolphin watching boat tour with snorkeling",
            price: "$ 254",
            rating: "4.2 (1200)",
            duration: "3 Hours",
            location: "Hurghada",
        },
        {
            imagePath: "/images/2.jpg",
            city: "Cairo",
            title: "Luxor: Valley of the Kings Full-Day Tour",
            price: "$ 254",
            rating: "4.2 (1200)",
            duration: "8 Hours",
            location: "Luxor",
        },
        {
            imagePath: "/images/3.jpg",
            city: "Cairo",
            title: "Giza Pyramids & Sphinx: Half-Day Private Tour",
            price: "$ 254",
            rating: "4.2 (1200)",
            duration: "4 Hours",
            location: "Giza",
        },
        {
            imagePath: "/images/1.jpg",
            city: "Cairo",
            title: "Sharm El Sheikh: Ras Mohammed National Park",
            price: "$ 254",
            rating: "4.2 (1200)",
            duration: "6 Hours",
            location: "Sharm",
        },
        {
            imagePath: "/images/2.jpg",
            city: "Cairo",
            title: "Cairo: Nile Dinner Cruise with Belly Dancing",
            price: "$ 254",
            rating: "4.2 (1200)",
            duration: "3 Hours",
            location: "Cairo",
        },
        {
            imagePath: "/images/3.jpg",
            city: "Cairo",
            title: "Hurghada: Desert Safari by Quad Bike",
            price: "$ 254",
            rating: "4.2 (1200)",
            duration: "5 Hours",
            location: "Hurghada",
        },
        {
            imagePath: "/images/1.jpg",
            city: "Cairo",
            title: "Aswan: Temple of Philae Sound & Light Show",
            price: "$ 254",
            rating: "4.2 (1200)",
            duration: "2 Hours",
            location: "Aswan",
        },
        {
            imagePath: "/images/2.jpg",
            city: "Cairo",
            title: "Alexandria: Day Trip from Cairo",
            price: "$ 254",
            rating: "4.2 (1200)",
            duration: "10 Hours",
            location: "Alexandria",
        },
        {
            imagePath: "/images/3.jpg",
            city: "Cairo",
            title: "Marsa Alam: Sataya Dolphin Reef Snorkeling",
            price: "$ 254",
            rating: "4.2 (1200)",
            duration: "9 Hours",
            location: "Marsa Alam",
        },
    ];

    return (
        <main className="pb-12 sm:pb-16 lg:pb-20 xl:pb-24 2xl:pb-32">
            <SearchPageHero />
            <Container className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24 2xl:mt-32">
                <div className="space-y-4 sm:space-y-6 mb-4">
                    <SectionHeader
                        title="Tours & Activities"
                        description="6 experiences found"
                        titleClassName="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold"
                        descriptionClassName="text-gray-500 text-base sm:text-lg lg:text-xl xl:text-2xl"
                    />
                </div>

                {/* <TrustBadges /> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {mockTours.map((tour, index) => (
                        <TourCard
                            key={index}
                            imagePath={tour.imagePath}
                            city={tour.city}
                            title={tour.title}
                            price={tour.price}
                            rating={tour.rating}
                            duration={tour.duration}
                            location={tour.location}
                            variant="detailed"
                            className="w-full"
                        />
                    ))}
                </div> 
            </Container>
        </main>
    );
};

export default SearchPage;