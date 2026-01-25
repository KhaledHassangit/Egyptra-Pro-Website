"use client"
import Image from "next/image";
import { useState } from "react";
import Container from "@/util/Container";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import UIButton from "@/util/UIButton";
import SectionHeader from "@/util/SectionHeader";
import { TourCard } from "../shared/TourCard";

export const cities = [
  'cairo',
  'luxor',
  'hurghada',
  'sharm-el-sheikh',
  // 'el-gouna',
  // 'marsa-alam',
  // 'soma-bay',
  // 'maadi-bay',
  // 'salh-hasheed'
];

type CityKey = (typeof cities)[number];

// Display names for the cities (first letter capitalized, with underscores replaced by spaces)
export const cityDisplayNames: Record<CityKey, string> = {
  'cairo': 'Cairo',
  'luxor': 'Luxor',
  'hurghada': 'Hurghada',
  'sharm-el-sheikh': 'Sharm El Sheikh',
  // 'el_gouna': 'El Gouna',
  // 'marsa-alam': 'Marsa Alam',
  // 'soma-bay': 'Soma Bay',
  // 'maadi-bay': 'Maadi Bay',
  // 'salh-hasheed': 'Salh Hasheed'
};

// Map each city to its correct image path
export const cityImagePaths: Record<CityKey, string> = {
  'cairo': '/assets/destinations/cairo-1.jpg',
  'luxor': '/assets/destinations/luxor-1.jpg',
  'hurghada': '/assets/destinations/hurghada-1.jpg',
  'sharm-el-sheikh': '/assets/destinations/sharm-1.jpg',
};

// Function to transform tour data for display
const transformTourData = (tour: any) => {
  return {
    id: tour.id,
    title: tour.title,
    city: tour.destination || tour.location,
    location: tour.destination || tour.location,
    rating: tour.averageRating || "0",
    price: `$${tour.adultPrice}`,
    duration: tour.duration,
    groupSize: tour.maxGroupSize,
    imagePath: tour.primaryPhoto?.url || tour.photos?.[0]?.url || "/images/placeholder.jpg",
    slug: tour.slug,
    description: tour.shortDesc,
    category: tour.category
  };
};

interface PopularTourSectionProps {
  tours: any[]; // Array of tour objects from your API
}

export function PopularTourSection({ tours }: PopularTourSectionProps) {
  const [activeTab, setActiveTab] = useState<number | null>(null); // Initialize with null to show all tours
  
  // Get the current city or null if no tab is selected
  const currentCity = activeTab !== null ? cities[activeTab] : null;
  
  // Filter tours by location or show all if no tab is selected
  const filteredTours = tours.filter(tour => {
    // If no tab is selected, show all tours
    if (activeTab === null) return true;
    
    // Check if location matches the current city (case insensitive)
    const tourLocation = (tour.location || "").toLowerCase();
    const tourDestination = (tour.destination || "").toLowerCase();
    const cityToMatch = currentCity!.toLowerCase().replace('-', ' ');
    
    return tourLocation.includes(cityToMatch) || 
           tourDestination.includes(cityToMatch) ||
           tourLocation.includes(currentCity!) || 
           tourDestination.includes(currentCity!);
  });
  
  // Transform the data for display
  const displayTours = filteredTours.map(transformTourData);

  return (
    <section className="py-16" id="trips">
      <Container>
        {/* Header Section - SectionHeader and button in flex with justify-between */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-6">
          <div className="mb-4 md:mb-0">
            <SectionHeader
              title="Most Popular tour"
              description="Discover our most loved tours and unforgettable experiences in Egypt"
            />
          </div>
          <div className="flex-shrink-0">
            <UIButton
              className="px-8"
            >
              View All Tours
            </UIButton>
          </div>
        </div>

        {/* City Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {/* Add "All" tab */}
          <button
            className={`flex items-center gap-3 pb-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === null
                ? 'border-[#265D92] text-[#265D92] font-medium'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab(null)}
          >
            <div className="w-[25px] h-[25px] lg:w-[29px] lg:h-[29px] rounded-full bg-gray-200 overflow-hidden relative flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">ALL</span>
            </div>
            <span className={`text-sm font-medium ${
              activeTab === null ? 'text-[#265D92]' : ''
            }`}>
              All Cities
            </span>
          </button>
          
          {cities.map((city, idx) => (
            <button
              key={city}
              className={`flex items-center gap-3 pb-2 border-b-2 transition-colors whitespace-nowrap ${
                idx === activeTab
                  ? 'border-[#265D92] text-[#265D92] font-medium'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab(idx)}
            >
              <div className="w-[25px] h-[25px] lg:w-[29px] lg:h-[29px] rounded-full bg-gray-200 overflow-hidden relative">
                <Image 
                  src={cityImagePaths[city]} // Use the mapping instead of the template literal
                  alt={cityDisplayNames[city]} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <span className={`text-sm font-medium ${
                idx === activeTab ? 'text-[#265D92]' : ''
              }`}>
                {cityDisplayNames[city]}
              </span>
            </button>
          ))}
        </div>

        {/* Tour Cards Carousel */}
        <div className="overflow-hidden">
          {displayTours.length > 0 ? (
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: false,
                containScroll: "trimSnaps",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-6 flex">
                {displayTours.map((tour) => (
                  <CarouselItem 
                    key={tour.id} 
                    className="pl-6 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <div className="flex justify-center">
                      <TourCard
                        imagePath={tour.imagePath}
                        city={tour.city}
                        title={tour.title}
                        price={tour.price}
                        rating={tour.rating}
                        duration={tour.duration}
                        groupSize={tour.groupSize}
                        location={tour.location}
                        className="w-full max-w-[340px] md:max-w-none"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          ) : (
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <p className="text-gray-500 mb-4">
                  {activeTab === null 
                    ? "No tours found." 
                    : `No tours found for ${cityDisplayNames[currentCity!]}.`
                  }
                </p>
                <p className="text-sm text-gray-400">
                  {activeTab === null 
                    ? "Please check back later." 
                    : "Try selecting a different city."
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}