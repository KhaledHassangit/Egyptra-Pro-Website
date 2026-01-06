"use client"
import Image from "next/image";
import Container from "@/util/Container";
import SectionHeader from "@/util/SectionHeader";
import { useState } from "react";

export function ActivityTypeSection() {
  const [activeTab, setActiveTab] = useState(0);
  
  const activityTypes = ['Hurghada', 'Sharm', 'Cairo', 'Luxor', 'Giza'];
  
  // Activity data with local images
  const activities = [
    {
      id: 1,
      title: "Boat Tour",
      location: "Hurghada",
      rating: "4.8",
      image: "/images/dest1.png",
      size: "normal"
    },
    {
      id: 2,
      title: "Desert Safari",
      location: "Hurghada",
      rating: "4.9",
      image: "/images/dest2.jpg",
      size: "normal"
    },
    {
      id: 3,
      title: "Nile Cruise",
      location: "Luxor",
      rating: "4.7",
      image: "/images/dest5.jpg",
      size: "tall"
    },
    {
      id: 4,
      title: "Temple Tour",
      location: "Cairo",
      rating: "4.9",
      image: "/images/dest3.jpg",
      size: "normal"
    },
    {
      id: 5,
      title: "Diving Adventure",
      location: "Sharm",
      rating: "4.6",
      image: "/images/dest6.jpg",
      size: "normal"
    },
    {
      id: 6,
      title: "Camel Ride",
      location: "Giza",
      rating: "4.8",
      image: "/images/dest4.jpg",
      size: "normal"
    }
  ];
  
  return (
    <section className="py-16 w-full" id="activities">
      <Container>
        <div className="text-center mb-10">
          <SectionHeader 
            titleClassName="!font-[600]"
            title="Explore Egypt by Activity Type"
            description="From thrilling desert safaris to serene Nile cruises - find your perfect Egyptian adventure"
          />
          <div className="flex justify-center text-center flex-wrap gap-2 mt-6">
            {activityTypes.map((type, idx) => (
              <span 
                key={type} 
                className={`inline-flex items-center justify-center px-5 py-2.5 rounded-[30px] h-[34px] text-sm border cursor-pointer transition-colors ${
                  idx === activeTab 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-white text-gray-600 border-gray-300 hover:border-primary'
                }`}
                onClick={() => setActiveTab(idx)}
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Custom grid layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto">
            {/* First column - 2 images stacked */}
            <div className="col-span-3 space-y-8">
              <div className="relative rounded-2xl overflow-hidden group h-64">
                <Image 
                  src={activities[0].image} 
                  alt={activities[0].title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 rounded-[12px] text-xs font-bold flex items-center gap-1">
                  {activities[0].rating}
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <h3 className="font-bold text-lg">{activities[0].title}</h3>
                  <p className="text-sm opacity-90">{activities[0].location}</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group h-64">
                <Image 
                  src={activities[1].image} 
                  alt={activities[1].title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 rounded-[12px] text-xs font-bold flex items-center gap-1">
                  {activities[1].rating}
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <h3 className="font-bold text-lg">{activities[1].title}</h3>
                  <p className="text-sm opacity-90">{activities[1].location}</p>
                </div>
              </div>
            </div>

            {/* Second column - 1 tall image */}
            <div className="col-span-4">
              <div className="relative rounded-2xl overflow-hidden group h-full">
                <Image 
                  src={activities[2].image} 
                  alt={activities[2].title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 rounded-[12px] text-xs font-bold flex items-center gap-1">
                  {activities[2].rating}
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <h3 className="font-bold text-lg">{activities[2].title}</h3>
                  <p className="text-sm opacity-90">{activities[2].location}</p>
                </div>
              </div>
            </div>

            {/* Third column - 3 images in layout */}
            <div className="col-span-5 space-y-8">
              {/* Top wide image */}
              <div className="relative rounded-2xl overflow-hidden group h-64">
                <Image 
                  src={activities[3].image} 
                  alt={activities[3].title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 rounded-[12px] text-xs font-bold flex items-center gap-1">
                  {activities[3].rating}
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <h3 className="font-bold text-lg">{activities[3].title}</h3>
                  <p className="text-sm opacity-90">{activities[3].location}</p>
                </div>
              </div>
              
              {/* Bottom two images side by side */}
              <div className="grid grid-cols-2 gap-8">
                <div className="relative rounded-2xl overflow-hidden group h-64">
                  <Image 
                    src={activities[4].image} 
                    alt={activities[4].title} 
                    fill 
                    className="object-cover transition-transform group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 rounded-[12px] text-xs font-bold flex items-center gap-1">
                    {activities[4].rating}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <h3 className="font-bold text-lg">{activities[4].title}</h3>
                    <p className="text-sm opacity-90">{activities[4].location}</p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden group h-64">
                  <Image 
                    src={activities[5].image} 
                    alt={activities[5].title} 
                    fill 
                    className="object-cover transition-transform group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 rounded-[12px] text-xs font-bold flex items-center gap-1">
                    {activities[5].rating}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <h3 className="font-bold text-lg">{activities[5].title}</h3>
                    <p className="text-sm opacity-90">{activities[5].location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout - 2 columns */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:hidden">
          {activities.slice(0, 4).map((activity) => (
            <div 
              key={activity.id}
              className="relative rounded-2xl overflow-hidden group h-64"
            >
              <Image 
                src={activity.image} 
                alt={activity.title} 
                fill 
                className="object-cover transition-transform group-hover:scale-105" 
              />
              <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 rounded-[12px] text-xs font-bold flex items-center gap-1">
                {activity.rating}
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="font-bold text-lg">{activity.title}</h3>
                <p className="text-sm opacity-90">{activity.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout - Single column */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {activities.slice(0, 3).map((activity) => (
            <div 
              key={activity.id}
              className="relative rounded-2xl overflow-hidden group h-64"
            >
              <Image 
                src={activity.image} 
                alt={activity.title} 
                fill 
                className="object-cover transition-transform group-hover:scale-105" 
              />
              <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 rounded-[12px] text-xs font-bold flex items-center gap-1">
                {activity.rating}
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="font-bold text-lg">{activity.title}</h3>
                <p className="text-sm opacity-90">{activity.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}