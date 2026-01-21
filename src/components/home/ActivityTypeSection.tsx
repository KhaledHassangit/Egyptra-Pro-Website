"use client"
import Image from "next/image";
import Container from "@/util/Container";
import SectionHeader from "@/util/SectionHeader";
import { useState, useEffect } from "react";

// Category data
export const tourCategoryData = [
  { name: 'Safari', href: '#' },
  { name: 'Boat Tour', href: '#' },
  { name: 'Diving', href: '#' },
  { name: 'Snorkeling', href: '#' },
  { name: 'Historical', href: '#' },
  { name: 'City Tour', href: '#' },
  { name: 'Cultural', href: '#' },
  { name: 'Multi-day', href: '#' },
  { name: 'Adventure', href: '#' }, // Added 9th category
];

// Mock function to simulate fetching locations for a category
const fetchLocationsByCategory = async (category: string) => {
  // In a real application, this would be an API call
  // For now, we'll simulate with a timeout and return mock data
  
  // Mock location data based on category
  const mockLocationsData: Record<string, any[]> = {
    'Safari': [
      { id: 1, title: "Desert Safari Adventure", location: "Hurghada", rating: "4.9", image: "/images/dest2.jpg" },
      { id: 2, title: "Quad Biking Experience", location: "Giza", rating: "4.7", image: "/images/dest4.jpg" },
      { id: 3, title: "Camel Trek", location: "Luxor", rating: "4.8", image: "/images/dest5.jpg" },
      { id: 4, title: "Bedouin Dinner", location: "Sharm El Sheikh", rating: "4.6", image: "/images/dest6.jpg" },
      { id: 5, title: "Desert Camping", location: "Cairo", rating: "4.9", image: "/images/dest3.jpg" },
      { id: 6, title: "Stargazing Tour", location: "Hurghada", rating: "4.8", image: "/images/dest1.png" }
    ],
    'Boat Tour': [
      { id: 1, title: "Nile River Cruise", location: "Luxor", rating: "4.9", image: "/images/dest5.jpg" },
      { id: 2, title: "Fishing Trip", location: "Hurghada", rating: "4.7", image: "/images/dest1.png" },
      { id: 3, title: "Sunset Cruise", location: "Sharm El Sheikh", rating: "4.8", image: "/images/dest6.jpg" },
      { id: 4, title: "Island Hopping", location: "Hurghada", rating: "4.9", image: "/images/dest2.jpg" },
      { id: 5, title: "Glass Bottom Boat", location: "Sharm El Sheikh", rating: "4.6", image: "/images/dest4.jpg" },
      { id: 6, title: "Yacht Experience", location: "Cairo", rating: "4.8", image: "/images/dest3.jpg" }
    ],
    'Diving': [
      { id: 1, title: "Red Sea Diving", location: "Hurghada", rating: "4.9", image: "/images/dest1.png" },
      { id: 2, title: "Wreck Diving", location: "Sharm El Sheikh", rating: "4.8", image: "/images/dest6.jpg" },
      { id: 3, title: "Night Diving", location: "Hurghada", rating: "4.7", image: "/images/dest2.jpg" },
      { id: 4, title: "Cave Diving", location: "Dahab", rating: "4.9", image: "/images/dest4.jpg" },
      { id: 5, title: "Beginner Diving", location: "Sharm El Sheikh", rating: "4.6", image: "/images/dest5.jpg" },
      { id: 6, title: "Diving Certification", location: "Hurghada", rating: "4.8", image: "/images/dest3.jpg" }
    ],
    'Snorkeling': [
      { id: 1, title: "Coral Reef Snorkeling", location: "Hurghada", rating: "4.8", image: "/images/dest1.png" },
      { id: 2, title: "Dolphin House", location: "Marsa Alam", rating: "4.9", image: "/images/dest2.jpg" },
      { id: 3, title: "Ras Mohammed", location: "Sharm El Sheikh", rating: "4.7", image: "/images/dest6.jpg" },
      { id: 4, title: "Giftun Island", location: "Hurghada", rating: "4.8", image: "/images/dest5.jpg" },
      { id: 5, title: "Blue Hole", location: "Dahab", rating: "4.9", image: "/images/dest4.jpg" },
      { id: 6, title: "Paradise Island", location: "Sharm El Sheikh", rating: "4.6", image: "/images/dest3.jpg" }
    ],
    'Historical': [
      { id: 1, title: "Pyramids Tour", location: "Giza", rating: "4.9", image: "/images/dest4.jpg" },
      { id: 2, title: "Valley of Kings", location: "Luxor", rating: "4.8", image: "/images/dest5.jpg" },
      { id: 3, title: "Karnak Temple", location: "Luxor", rating: "4.9", image: "/images/dest3.jpg" },
      { id: 4, title: "Abu Simbel", location: "Aswan", rating: "4.7", image: "/images/dest2.jpg" },
      { id: 5, title: "Egyptian Museum", location: "Cairo", rating: "4.8", image: "/images/dest6.jpg" },
      { id: 6, title: "Philae Temple", location: "Aswan", rating: "4.6", image: "/images/dest1.png" }
    ],
    'City Tour': [
      { id: 1, title: "Cairo City Tour", location: "Cairo", rating: "4.8", image: "/images/dest6.jpg" },
      { id: 2, title: "Luxor City Tour", location: "Luxor", rating: "4.9", image: "/images/dest5.jpg" },
      { id: 3, title: "Alexandria Tour", location: "Alexandria", rating: "4.7", image: "/images/dest3.jpg" },
      { id: 4, title: "Aswan City Tour", location: "Aswan", rating: "4.8", image: "/images/dest2.jpg" },
      { id: 5, title: "Islamic Cairo", location: "Cairo", rating: "4.9", image: "/images/dest4.jpg" },
      { id: 6, title: "Coptic Cairo", location: "Cairo", rating: "4.6", image: "/images/dest1.png" }
    ],
    'Cultural': [
      { id: 1, title: "Nubian Village", location: "Aswan", rating: "4.8", image: "/images/dest2.jpg" },
      { id: 2, title: "Local Market Tour", location: "Cairo", rating: "4.7", image: "/images/dest6.jpg" },
      { id: 3, title: "Cooking Class", location: "Luxor", rating: "4.9", image: "/images/dest5.jpg" },
      { id: 4, title: "Felucca Ride", location: "Aswan", rating: "4.8", image: "/images/dest1.png" },
      { id: 5, title: "Traditional Crafts", location: "Cairo", rating: "4.6", image: "/images/dest3.jpg" },
      { id: 6, title: "Bedouin Experience", location: "Sharm El Sheikh", rating: "4.9", image: "/images/dest4.jpg" }
    ],
    'Multi-day': [
      { id: 1, title: "Nile Cruise 5 Days", location: "Luxor to Aswan", rating: "4.9", image: "/images/dest5.jpg" },
      { id: 2, title: "Cairo & Giza Tour", location: "Cairo", rating: "4.8", image: "/images/dest6.jpg" },
      { id: 3, title: "Red Sea Resort", location: "Hurghada", rating: "4.9", image: "/images/dest1.png" },
      { id: 4, title: "Egypt Explorer", location: "Multiple", rating: "4.7", image: "/images/dest3.jpg" },
      { id: 5, title: "Desert & Oasis", location: "Western Desert", rating: "4.8", image: "/images/dest2.jpg" },
      { id: 6, title: "Sinai Adventure", location: "Sinai", rating: "4.9", image: "/images/dest4.jpg" }
    ],
    'Adventure': [
      { id: 1, title: "Rock Climbing", location: "Sinai", rating: "4.8", image: "/images/dest4.jpg" },
      { id: 2, title: "Hot Air Balloon", location: "Luxor", rating: "4.9", image: "/images/dest5.jpg" },
      { id: 3, title: "Sandboarding", location: "Giza", rating: "4.7", image: "/images/dest2.jpg" },
      { id: 4, title: "Kitesurfing", location: "Dahab", rating: "4.8", image: "/images/dest3.jpg" },
      { id: 5, title: "Hiking Expedition", location: "Sinai", rating: "4.9", image: "/images/dest1.png" },
      { id: 6, title: "Canyon Exploration", location: "Red Sea", rating: "4.6", image: "/images/dest6.jpg" }
    ]
  };
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return locations for the selected category or default data
  return mockLocationsData[category] || [
    { id: 1, title: "Boat Tour", location: "Hurghada", rating: "4.8", image: "/images/dest1.png" },
    { id: 2, title: "Desert Safari", location: "Hurghada", rating: "4.9", image: "/images/dest2.jpg" },
    { id: 3, title: "Nile Cruise", location: "Luxor", rating: "4.7", image: "/images/dest5.jpg" },
    { id: 4, title: "Temple Tour", location: "Cairo", rating: "4.9", image: "/images/dest3.jpg" },
    { id: 5, title: "Diving Adventure", location: "Sharm", rating: "4.6", image: "/images/dest6.jpg" },
    { id: 6, title: "Camel Ride", location: "Giza", rating: "4.8", image: "/images/dest4.jpg" }
  ];
};

export function ActivityTypeSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [activities, setActivities] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch locations when component mounts or when active tab changes
  useEffect(() => {
    const fetchActivities = async () => {
      setIsLoading(true);
      try {
        const category = tourCategoryData[activeTab]?.name;
        if (category) {
          const locations = await fetchLocationsByCategory(category);
          setActivities(locations);
        }
      } catch (error) {
        console.error('Error fetching activities:', error);
        setActivities([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchActivities();
  }, [activeTab]);

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
            {tourCategoryData.map((category, idx) => (
              <span
                key={category.name}
                className={`inline-flex items-center justify-center px-5 py-2.5 rounded-[30px] h-[34px] text-sm border cursor-pointer transition-colors ${
                  idx === activeTab
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-primary'
                }`}
                onClick={() => setActiveTab(idx)}
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}

        {/* Desktop Layout - Custom grid layout */}
        {!isLoading && activities.length > 0 && (
          <>
            <div className="hidden lg:block">
              <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto">
                {/* First column - 2 images stacked */}
                <div className="col-span-3 space-y-8">
                  {activities[0] && (
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
                  )}
                  {activities[1] && (
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
                  )}
                </div>

                {/* Second column - 1 tall image */}
                <div className="col-span-4">
                  {activities[2] && (
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
                  )}
                </div>

                {/* Third column - 3 images in layout */}
                <div className="col-span-5 space-y-8">
                  {/* Top wide image */}
                  {activities[3] && (
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
                  )}

                  {/* Bottom two images side by side */}
                  <div className="grid grid-cols-2 gap-8">
                    {activities[4] && (
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
                    )}
                    {activities[5] && (
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
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet Layout - 2 columns with all images */}
            <div className="hidden md:block lg:hidden">
              <div className="grid grid-cols-2 gap-6">
                {activities.map((activity) => (
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
            </div>

            {/* Mobile Layout - Single column with all images */}
            <div className="block md:hidden">
              <div className="grid grid-cols-1 gap-4">
                {activities.map((activity) => (
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
            </div>
          </>
        )}
      </Container>
    </section>
  );
}