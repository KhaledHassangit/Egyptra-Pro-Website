"use client"
import Image from "next/image";
import { useState } from "react";
import Container from "@/util/Container";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import UIButton from "@/util/UIButton";
import SectionHeader from "@/util/SectionHeader";
import { TourCard } from "../shared/TourCard";
import { cities, cityImages, cityTourImages, tourData } from "@/constants/data";

export function PopularTourSection() {
  const [activeTab, setActiveTab] = useState(0);

  const totalCards = 6;
  const currentCity = cities[activeTab];
  const currentCityImages = cityTourImages[currentCity];
  const currentTourData = tourData[currentCity];

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
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2  ">
          {cities.map((city, idx) => (
            <button
              key={city}
              className={`flex items-center gap-3 pb-2 border-b-2 transition-colors whitespace-nowrap ${idx === activeTab
                ? 'border-[#265D92] text-[#265D92] font-medium'
                : 'border-transparent text-gray-500 hover:text-gray-900'
                }`}
              onClick={() => setActiveTab(idx)}
            >
              <div className=" w-[25px] h-[25px] lg:w-[29px] lg:h-[29px] rounded-full bg-gray-200 overflow-hidden relative">
                <Image src={cityImages[city]} alt={city} fill className="object-cover" />
              </div>
              <span className={`text-sm font-medium ${idx === activeTab ? 'text-[#265D92]' : ''
                }`}>
                {city}
              </span>
            </button>
          ))}
        </div>

        {/* Tour Cards Carousel */}
        <div className="overflow-hidden">
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
              {Array.from({ length: totalCards }).map((_, item) => (
                <CarouselItem 
                  key={item} 
                  className="pl-6 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="flex justify-center">
                    <TourCard
                      imagePath={currentCityImages[item]}
                      city={currentCity}
                      title={currentTourData[item].title}
                      price={currentTourData[item].price}
                      rating={currentTourData[item].rating}
                      className="w-full max-w-[340px] md:max-w-none"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}