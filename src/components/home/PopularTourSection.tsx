"use client"
import Image from "next/image";
import { Star } from "lucide-react";
import { useState } from "react";
import Container from "@/util/Container";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import UIButton from "@/util/UIButton";
import SectionHeader from "@/util/SectionHeader";

export function PopularTourSection() {
  const [activeTab, setActiveTab] = useState(0);

  const cities = ['Cairo', 'Hurghada', 'Luxor', 'Aswan'];

  // Map each city to its specific image
  const cityImages = {
    'Cairo': "/images/dest1.png",
    'Hurghada': "/images/dest2.jpg",
    'Luxor': "/images/dest5.jpg",
    'Aswan': "/images/dest3.jpg"
  };

  // Different image sets for each city
  const cityTourImages = {
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
  const tourData = {
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

  const totalCards = 6;
  const currentCity = cities[activeTab];
  const currentCityImages = cityTourImages[currentCity];
  const currentTourData = tourData[currentCity];

  return (
    <section className="py-16 w-full" id="trips">
      <Container>
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
          <div>
            <SectionHeader
              title="Most Popular tour"
              description="Discover our most loved tours and unforgettable experiences in Egypt"
            />
            <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
              {cities.map((city, idx) => (
                <button
                  key={city}
                  className={`flex items-center gap-2 pb-2 border-b-2 transition-colors whitespace-nowrap ${idx === activeTab
                      ? 'border-[#265D92] text-[#265D92] font-normal'
                      : 'border-transparent text-gray-500 hover:text-gray-900'
                    }`}
                  onClick={() => setActiveTab(idx)}
                >
                  <div className="w-[29px] h-[29px] rounded-full bg-gray-200 overflow-hidden relative">
                    <Image src={cityImages[city]} alt={city} fill className="object-cover" />
                  </div>
                  <span className={`text-base font-normal ${idx === activeTab ? 'text-[#265D92]' : ''
                    }`}>
                    {city}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <UIButton
            className="px-8 me-1"
          >
            View All Tours
          </UIButton>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {Array.from({ length: totalCards }).map((_, item) => (
              <CarouselItem key={item} className="pl-6 md:basis-1/2 lg:basis-1/4">
                <TourCard
                  imageIndex={item}
                  city={currentCity}
                  tourData={currentTourData[item]}
                  imagePath={currentCityImages[item]}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
}

function TourCard({ imageIndex, city, tourData, imagePath }: {
  imageIndex: number;
  city: string;
  tourData: { city: string; title: string; price: string; rating: string };
  imagePath: string;
}) {
  return (
    <div
      className="bg-white border text-left border-gray-200 overflow-hidden hover:shadow-lg transition-shadow h-[335px] flex flex-col"
    >
      <div className="relative h-[180px]">
        <Image
          src={imagePath}
          alt={`${city} Tour`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-black text-sm font-medium">{city}</span>
            <div className="flex items-center gap-1">
              <Star size={12} className="text-primary fill-current" />
              <span className="text-black text-xs font-light">{tourData.rating}</span>
            </div>
          </div>
          <h3 className="text-gray-700 text-base font-normal line-clamp-2">
            {tourData.title}
          </h3>
        </div>
        <p className="text-primary text-base font-medium">{tourData.price}</p>
      </div>
    </div>
  );
}