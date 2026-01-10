"use client"

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Container from "@/util/Container";
import { SearchBar } from "@/util/SearchBar";
import { CarouselItem } from "@/components/ui/carousel";
import SectionHeader from "@/util/SectionHeader";
import PageHero from "@/util/PageHero";
import { TourCard } from "@/components/shared/TourCard";
import { SectionCarousel } from "@/components/shared/section-carousel";

export default function DestinationPage() {
    const searchParams = useSearchParams();
    const location = searchParams.get("location") || "Hurghada";
    const formattedLocation = location.charAt(0).toUpperCase() + location.slice(1);

    // Mock data - in a real app this would come from an API based on 'location'
    const mockTours = [
        { 
            id: 1, 
            title: 'Dolphin watching boat tour with snorkeling', 
            price: '$ 254', 
            rating: '4.2 (200)', 
            image: '/images/dest2.jpg',
            duration: '3 hours',
            location: 'Hurghada',
            groupSize: 'Max 15 people'
        },
        { 
            id: 2, 
            title: 'Red Sea Snorkeling Adventure', 
            price: '$ 185', 
            rating: '4.6 (180)', 
            image: '/images/dest5.jpg',
            duration: '4 hours',
            location: 'Red Sea',
            groupSize: 'Max 20 people'
        },
        { 
            id: 3, 
            title: 'Desert Safari with BBQ Dinner', 
            price: '$ 95', 
            rating: '4.7 (220)', 
            image: '/images/dest3.jpg',
            duration: '6 hours',
            location: 'Desert',
            groupSize: 'Max 25 people'
        },
        { 
            id: 4, 
            title: 'Submarine Tour in Red Sea', 
            price: '$ 120', 
            rating: '4.5 (160)', 
            image: '/images/dest6.jpg',
            duration: '2 hours',
            location: 'Red Sea',
            groupSize: 'Max 10 people'
        },
        { 
            id: 5, 
            title: 'Giftun Island Boat Trip', 
            price: '$ 75', 
            rating: '4.8 (280)', 
            image: '/images/dest4.jpg',
            duration: '5 hours',
            location: 'Giftun Island',
            groupSize: 'Max 30 people'
        },
        { 
            id: 6, 
            title: 'Hurghada City Tour & Shopping', 
            price: '$ 55', 
            rating: '4.3 (140)', 
            image: '/images/dest1.png',
            duration: '4 hours',
            location: 'Hurghada City',
            groupSize: 'Max 20 people'
        },
    ];

    // Restored original exploreDestinations data structure
    const exploreDestinations = [
        { name: 'Hurghada', image: '/images/dest1.png', count: '500+ tours available' },
        { name: 'Cairo', image: '/images/dest2.jpg', count: '500+ tours available' },
        { name: 'Luxor', image: '/images/dest5.jpg', count: '500+ tours available' },
    ];

    const handleSearch = (query: string) => {
        console.log(`Searching for: ${query}`);
        // Implement search logic here
    };

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Replace the hero section with PageHero component */}
            <PageHero 
                title={`Tours & Activities in ${formattedLocation}`}
                currentPage={formattedLocation}
                currentPageUrl={`/destinations?location=${location}`}
            />

            {/* Use the new SearchBar component */}
            <SearchBar 
                onSearch={handleSearch}
            />

            {/* 1. Tours Listings (Grid or first row) - using default variant */}
            <Container className="mb-12">
                <div className="flex justify-between items-center mb-4">
                    {/* Filter/Sort mocks */}
                    <div className="flex gap-4">
                        {/* <button className="flex items-center gap-2 text-sm font-medium text-gray-600">
                    <Filter size={16}/> Filter
                </button> */}
                    </div>
                    <div className="text-sm text-gray-500">
                        1 - 12 of 150 activities
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mockTours.slice(0, 8).map((tour) => (
                        <TourCard
                            key={tour.id}
                            imagePath={tour.image}
                            city={formattedLocation}
                            title={tour.title}
                            price={tour.price}
                            rating={tour.rating}
                        />
                    ))}
                </div>
            </Container>

            {/* 2. Recently Reviewed Tours - using detailed variant */}
            <Container>
                <SectionCarousel
                    title={`Recently reviewed Tours in ${formattedLocation}`}
                    description="Discover our most loved tours and unforgettable experiences in Egypt"
                >
                    {mockTours.map((tour) => (
                        <CarouselItem key={tour.id} className="pl-6 md:basis-1/2 lg:basis-1/4">
                            <TourCard
                                variant="detailed"
                                imagePath={tour.image}
                                city={formattedLocation}
                                title={tour.title}
                                price={tour.price}
                                rating={tour.rating}
                                duration={tour.duration}
                                location={tour.location}
                                groupSize={tour.groupSize}
                            />
                        </CarouselItem>
                    ))}
                </SectionCarousel>
            </Container>

            {/* 3. Top-Rated Tours - using detailed variant */}
            <Container>
                <SectionCarousel
                    title={`Top-Rated Tours in ${formattedLocation}`}
                    description="Discover our most loved tours and unforgettable experiences in Egypt"
                >
                    {mockTours.map((tour) => (
                        <CarouselItem key={tour.id} className="pl-6 md:basis-1/2 lg:basis-1/4">
                            <TourCard
                                variant="detailed"
                                imagePath={tour.image}
                                city={formattedLocation}
                                title={tour.title}
                                price={tour.price}
                                rating={tour.rating}
                                duration={tour.duration}
                                location={tour.location}
                                groupSize={tour.groupSize}
                            />
                        </CarouselItem>
                    ))}
                </SectionCarousel>
            </Container>

            {/* 4. Explore More Egyptian Destinations - Restored to original design */}
            <Container>
                <SectionHeader
                    title="Explore More Egyptian Destinations"
                    description="Discover our most loved tours and unforgettable experiences in Egypt"
                    titleClassName="text-2xl"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {exploreDestinations.map((dest, i) => (
                        <div key={i} className="" >
                            <div className="relative h-[200px] rounded-lg overflow-hidden mb-3">
                                <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                            </div>
                            <h3 className="text-[#265D92] font-medium text-lg">{dest.name}</h3>
                            <p className="text-gray-500 text-sm mb-2">{dest.count}</p>
                            <a href="#" className="text-blue-500 text-sm font-medium flex items-center gap-1">
                                Explore properties &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </Container>

            {/* 5. Banner Section (250+ Amazing Things) */}
            <div className="mt-16 mb-16">
                <Container>
                    <div className="relative bg-[#265D92] rounded-[24px] overflow-hidden text-white min-h-[400px] flex items-center">
                        <div className="absolute inset-0 z-0">
                            {/* This would be the background image if provided, for now blue bg */}
                            {/* Alternatively, split layout like design */}
                        </div>

                        <div className="relative z-10 w-full flex flex-col md:flex-row">
                            <div className="p-12 md:w-1/2">
                                <h2 className="text-3xl font-bold mb-4 leading-tight">
                                    Discover 250+ Amazing Things to Do in {formattedLocation}
                                </h2>
                                <p className="text-blue-100 mb-8 font-light">
                                    From world-class diving or kite Mohamed to thrilling desert safari, explore the best {formattedLocation} has to offer.
                                    Book excursions in Sharm El Sheikh and activities in Dream of islands like never before with instant confirmation and best rates guaranteed!
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white text-center py-4 rounded-xl text-[#265D92]">
                                        <div className="text-xl font-bold">250+</div>
                                        <div className="text-xs text-gray-500">Tour combinations</div>
                                    </div>
                                    <div className="bg-white text-center py-4 rounded-xl text-[#265D92]">
                                        <div className="text-xl font-bold">4.8</div>
                                        <div className="text-xs text-gray-500">Average Rating</div>
                                    </div>
                                    <div className="bg-white text-center py-4 rounded-xl text-[#265D92]">
                                        <div className="text-xl font-bold">€25</div>
                                        <div className="text-xs text-gray-500">Starting From</div>
                                    </div>
                                    <div className="bg-white text-center py-4 rounded-xl text-[#265D92]">
                                        <div className="text-xl font-bold">100%</div>
                                        <div className="text-xs text-gray-500">Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
                                {/* Image placeholder for the right side of banner */}
                                <Image
                                    src="/images/dest6.jpg"
                                    alt="Banner Image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* 6. Why Choose Us (Specific design for this page) */}
            <Container className="mb-20">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6 text-black">Why Chose Us</h2>
                        <p className="text-gray-600 mb-8 font-light">
                            We offer a wide range of tours... (Placeholder text matching screenshot intent)
                        </p>

                        <div className="space-y-6">
                            {[
                                { id: 1, title: 'Trust & Recognition', text: '100% Happy customers' },
                                { id: 2, title: 'Booking Flexibility', text: 'Free Cancellation' },
                                { id: 3, title: 'Value & Transparency', text: 'No Hidden Costs' },
                                { id: 4, title: 'Tour Excellence', text: 'Expert Guides & Planning' },
                                { id: 5, title: 'Safety & Security', text: 'Secure Online Payments' },
                            ].map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="w-10 h-10 rounded bg-[#265D92] text-white flex items-center justify-center font-bold shrink-0">
                                        {item.id}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-black">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 relative h-[500px] w-full">
                        {/* Placeholder for the collage of images */}
                        <div className="absolute top-0 right-0 w-[80%] h-[60%] rounded-[20px] overflow-hidden border-4 border-blue-100 z-10">
                            <Image src="/images/dest2.jpg" alt="Why Us 1" fill className="object-cover" />
                        </div>
                        <div className="absolute bottom-0 left-10 w-[60%] h-[50%] rounded-[20px] overflow-hidden border-4 border-[#D0A87D] z-20">
                            <Image src="/images/dest1.png" alt="Why Us 2" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </Container>

            <div className="bg-gray-100 py-4 text-center text-xs text-gray-500">
                Hurghada To Luxor / Sharm El Sheikh / Cairo Tours / Safari / Snorkeling
            </div>
        </div>
    );
}