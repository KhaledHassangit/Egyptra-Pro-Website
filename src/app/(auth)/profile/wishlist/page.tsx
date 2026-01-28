"use client";

import { TourCard } from "@/components/shared/TourCard";

// Mock wishlist data - replace with actual data from API
const wishlistItems = [
  {
    id: '1',
    imagePath: '/assets/destinations/cairo-1.jpg',
    city: 'Cairo',
    title: 'Hurghada: Dolphin watching boat tour with snorkeling',
    price: '$ 254',
    rating: '4.2 (1200)',
    duration: '3 Hours',
    groupSize: '15',
    location: 'Historical',
  },
  {
    id: '2',
    imagePath: '/assets/destinations/cairo-5.jpg',
    city: 'Cairo',
    title: 'Hurghada: Dolphin watching boat tour with snorkeling',
    price: '$ 254',
    rating: '4.2 (1200)',
    duration: '3 Hours',
    groupSize: '15',
    location: 'Historical',
  },
  {
    id: '3',
    imagePath: '/assets/destinations/cairo-3.jpg',
    city: 'Cairo',
    title: 'Hurghada: Dolphin watching boat tour with snorkeling',
    price: '$ 254',
    rating: '4.2 (1200)',
    duration: '3 Hours',
    groupSize: '15',
    location: 'Historical',
  },
  {
    id: '4',
    imagePath: '/assets/destinations/cairo-2.jpg',
    city: 'Cairo',
    title: 'Hurghada: Dolphin watching boat tour with snorkeling',
    price: '$ 254',
    rating: '4.2 (1200)',
    duration: '3 Hours',
    groupSize: '15',
    location: 'Historical',
  },
];

export default function WishlistPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="space-y-1">
        <h2 className="text-[#101828] text-[30px] font-bold leading-[36px]">My Wishlist</h2>
        <p className="text-[#4A5565] text-base font-normal leading-[24px]">
          {wishlistItems.length} saved destination{wishlistItems.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Wishlist Grid */}
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <TourCard
              key={item.id}
              imagePath={item.imagePath}
              city={item.city}
              title={item.title}
              price={item.price}
              rating={item.rating}
              duration={item.duration}
              groupSize={item.groupSize}
              location={item.location}
              variant="detailed"
            />
          ))}
        </div>
      ) : (
        // Empty State
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-10 h-10 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Your wishlist is empty
          </h3>
          <p className="text-gray-600 text-center mb-6 max-w-md text-sm">
            Start adding tours to your wishlist by clicking the heart icon on any tour card.
          </p>
          <a
            href="/tours"
            className="px-6 py-3 bg-[#0373DE] text-white rounded-md font-medium hover:bg-[#025BB8] transition-colors"
          >
            Explore Tours
          </a>
        </div>
      )}
    </div>
  );
}