"use client"
import Image from "next/image";
import Container from "@/util/Container";
import SectionHeader from "@/util/SectionHeader";
import { useState, useEffect } from "react";

export const tourCategoryData = [
  { name: 'Popular', value: '', href: '#' },
  { name: 'Safari', value: 'safari', href: '#' },
  { name: 'Boat Tour', value: 'boat-tour', href: '#' },
  { name: 'Diving', value: 'diving', href: '#' },
  { name: 'Snorkeling', value: 'snorkeling', href: '#' },
  { name: 'Historical', value: 'historical', href: '#' },
  { name: 'City Tour', value: 'city-tour', href: '#' },
  { name: 'Cultural', value: 'cultural', href: '#' },
  { name: 'Multi-day', value: 'multi-day', href: '#' },
  { name: 'Adventure', value: 'adventure', href: '#' }, 
];

const transformTourData = (tour: any) => {
  return {
    id: tour.id,
    title: tour.title,
    city: tour.destination || tour.location,
    location: tour.destination || tour.location,
    rating: tour.averageRating || "0",
    image: tour.primaryPhoto?.url || tour.photos?.[0]?.url || "/images/placeholder.jpg",
    price: `$${tour.adultPrice}`,
    duration: tour.duration,
    groupSize: tour.maxGroupSize,
    slug: tour.slug,
    description: tour.shortDesc,
    category: tour.category
  };
};

interface ActivityTypeSectionProps {
  tours: any[]; 
}

export function ActivityTypeSection({ tours }: ActivityTypeSectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [activities, setActivities] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const filterActivities = () => {
      setIsLoading(true);
      try {
        const categoryValue = tourCategoryData[activeTab]?.value;
        
        let filteredTours = tours;
        if (categoryValue) {
          filteredTours = tours.filter(tour => tour.category === categoryValue);
        }
        
        const transformedActivities = filteredTours.map(transformTourData);
        
        if (transformedActivities.length === 0) {
          setActivities([]);
        } else {
          setActivities(transformedActivities);
        }
      } catch (error) {
        console.error('Error filtering activities:', error);
        setActivities([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    filterActivities();
  }, [activeTab, tours]);

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

        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}

        {!isLoading && activities.length === 0 && (
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <p className="text-gray-500 mb-4">No tours found for this category.</p>
              <p className="text-sm text-gray-400">Try selecting a different category.</p>
            </div>
          </div>
        )}

        {!isLoading && activities.length > 0 && (
          <>
            <div className="hidden lg:block">
              <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto">
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

                <div className="col-span-5 space-y-8">
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