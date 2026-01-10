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
import Link from "next/link";
import ImageBox from "@/components/shared/ImageBox";

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
        { name: 'Sharm El Sheikh', image: '/images/dest6.jpg', count: '500+ tours available' },
        { name: 'Aswan', image: '/images/dest4.jpg', count: '500+ tours available' },
    ];

    const handleSearch = (query: string) => {
        console.log(`Searching for: ${query}`);
        // Implement search logic here
    };

    return (
        <div className="bg-white min-h-screen pb-20">
            <PageHero
                title={`Tours & Activities in ${formattedLocation}`}
                currentPage={formattedLocation}
                currentPageUrl={`/destinations?location=${location}`}
            />

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

            {/* 4. Explore More Egyptian Destinations -  */}
            <Container>
                <SectionCarousel
                    title="Explore More Egyptian Destinations"
                    description="Discover our most loved tours and unforgettable experiences in Egypt"
                >
                    {exploreDestinations.map((dest, i) => (
                        <CarouselItem key={i} className="pl-6 pb-4 md:basis-1/2 lg:basis-1/3">
                            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <div className="relative h-[180px] w-full overflow-hidden">
                                    <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-primary font-medium text-lg">{dest.name}</h3>
                                    <p className="text-[#282828] text-sm mb-2">{dest.count}</p>
                                    <Link href={`/destinations?location=${dest.name.toLowerCase()}`} className="text-primary text-sm font-medium flex items-center gap-1">
                                        Explore {dest.name} →
                                    </Link>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </SectionCarousel>
            </Container>

            {/* 5. Banner Section (250+ Amazing Things) */}
            <div className="mt-16 mb-16 ">
                <Container >
                    <div className="relative bg-primary rounded-[8px] overflow-hidden text-white  h-[700px] mx-auto">
                        <div className="relative z-10 w-full flex flex-col md:flex-row h-full">
                            <div className="p-12 flex flex-col justify-center">
                                <p className="text-[24px] font-semibold leading-[160%] mb-8">
                                    Discover 250+ Amazing Things to Do in Makadi Bay From world-class diving at Ras Mohammed to thrilling desert safaris, explore the best Sharm El Sheikh tours, excursions in Sharm El Sheikh, and activities in Sharm El Sheikh. Book online with instant confirmation and best price guarantee!
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className=" h-[150px] bg-white rounded-[21px] flex flex-col items-center justify-center">
                                        <div className="text-primary text-[36px] font-bold">250+</div>
                                        <div className="text-[#282828] font-medium text-[18px] leading-[30px] text-center">Tour combinations</div>
                                    </div>
                                    <div className=" h-[150px] bg-white rounded-[21px] flex flex-col items-center justify-center">
                                        <div className="text-primary text-[36px] font-bold">4.8</div>
                                        <div className="text-[#282828] font-medium text-[18px] leading-[30px] text-center">Average Rating</div>
                                    </div>
                                    <div className="h-[150px] bg-white rounded-[21px] flex flex-col items-center justify-center">
                                        <div className="text-primary text-[36px] font-bold">€25</div>
                                        <div className="text-[#282828] font-medium text-[18px] leading-[30px] text-center">Starting From</div>
                                    </div>
                                    <div className="h-[150px] bg-white rounded-[21px] flex flex-col items-center justify-center">
                                        <div className="text-primary text-[36px] font-bold">100%</div>
                                        <div className="text-[#282828] font-medium text-[18px] leading-[30px] text-center">Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 relative flex items-center justify-center p-8">
                                <div className="relative h-[588px] w-[472px] rounded-[21px] overflow-hidden">
                                    <Image
                                        src="/images/dest1.png"
                                        alt="Banner Image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <Container className="mb-20 py-10">
                <div className="flex flex-col justify-between md:flex-row gap-[16px] items-center">
                    <div className="md:w-1/2">
                        <SectionHeader
                            descriptionClassName=""
                            title="Why Choose Us"
                            description="With over 15 years of 
                experience and 100,000+ happy travelers, we've perfected the art of creating unforgettable Egyptian adventures. Our commitment to quality, 
                safety, and authentic experiences sets us apart."
                        />

                        <div className="space-y-6 mt-8">
                            {[
                                { id: 1, title: 'Trust & Recognition', text: '100% Happy customers' },
                                { id: 2, title: 'Booking Flexibility', text: 'Free Cancellation' },
                                { id: 3, title: 'Value & Transparency', text: 'No Hidden Costs' },
                                { id: 4, title: 'Tour Excellence', text: 'Expert Guides & Planning' },
                                { id: 5, title: 'Safety & Security', text: 'Secure Online Payments' },
                            ].map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="w-15 h-15  p-2.5 rounded-[8px] bg-primary text-white flex items-center justify-center font-bold shrink-0">
                                        {item.id}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#3A3A3A] text-lg">{item.title}</h4>
                                        <p className="text-[#5B5F62] text-sm font-medium ">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative flex-1">
                        <ImageBox />
                    </div>
                    {/* <div className="md:w-1/2 relative h-[500px] w-full">
                        <div className="absolute top-0 right-0 w-[80%] h-[65%] rounded-[30px] overflow-hidden border-[15px] border-primary z-20">
                            <Image src="/images/dest1.png" alt="Why Us 2" fill className="object-cover" />
                        </div>

                        <div className="absolute bottom-0 left-10 w-[60%] h-[45%] rounded-[30px] overflow-hidden border-[15px] border-secondary z-10">
                            <Image src="/images/dest2.jpg" alt="Why Us 1" fill className="object-cover" />
                        </div>
                    </div> */}

                </div>
            </Container>

            <div className="bg-[#F1F1F1] py-8 text-center text-sm text-[#000000]">
                Things to do in Sharm el-Sheikh / Boat Tours / Safari / Contact Us            </div>
        </div>
    );
}