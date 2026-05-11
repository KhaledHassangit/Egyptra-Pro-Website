"use client";

import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock booking data
const bookings = [
  {
    id: '1',
    tourName: 'Hurghada: Dolphin watching boat tour with snorkeling',
    destination: 'Cairo',
    date: 'Feb 15, 2026',
    time: '09:00 AM',
    guests: 4,
    status: 'upcoming',
    price: '$ 254',
    bookingRef: 'BK-2026-001',
  },
  {
    id: '2',
    tourName: 'Egyptian Museum and Old Cairo Tour',
    destination: 'Cairo',
    date: 'Mar 22, 2026',
    time: '10:30 AM',
    guests: 2,
    status: 'upcoming',
    price: '$ 180',
    bookingRef: 'BK-2026-002',
  },
  {
    id: '3',
    tourName: 'Pyramids of Giza and Sphinx Tour',
    destination: 'Giza',
    date: 'Jan 10, 2026',
    time: '08:00 AM',
    guests: 3,
    status: 'completed',
    price: '$ 300',
    bookingRef: 'BK-2026-003',
  },
];

export default function BookingsPage() {
  const upcomingBookings = bookings.filter(b => b.status === 'upcoming');
  const completedBookings = bookings.filter(b => b.status === 'completed');

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">My Bookings</h2>
        <p className="text-gray-600 text-sm">
          Manage your tour bookings and reservations
        </p>
      </div>

      {upcomingBookings.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">
            Upcoming Bookings ({upcomingBookings.length})
          </h3>
          <div className="space-y-4">
            {upcomingBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-gray-400" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 leading-tight">
                          {booking.tourName}
                        </h4>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full whitespace-nowrap">
                          Confirmed
                        </span>
                      </div>
                      <p className="text-gray-600 flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        {booking.destination}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        Ref: {booking.bookingRef}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{booking.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{booking.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{booking.guests} Guests</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-2xl font-bold text-[#0373DE]">
                        {booking.price}
                      </span>
                      <Button
                        variant="outline"
                        className="border-[#0373DE] text-[#0373DE] hover:bg-[#0373DE] hover:text-white transition-colors"
                      >
                        View Details
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {completedBookings.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">
            Past Bookings ({completedBookings.length})
          </h3>
          <div className="space-y-4">
            {completedBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-xl border border-gray-200 p-6 opacity-80 hover:opacity-100 hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-gray-400" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 leading-tight">
                          {booking.tourName}
                        </h4>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full whitespace-nowrap">
                          Completed
                        </span>
                      </div>
                      <p className="text-gray-600 flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        {booking.destination}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        Ref: {booking.bookingRef}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{booking.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{booking.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{booking.guests} Guests</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-2xl font-bold text-gray-900">
                        {booking.price}
                      </span>
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        Write Review
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {bookings.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Calendar className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No bookings yet
          </h3>
          <p className="text-gray-600 text-center mb-6 max-w-md text-sm">
            Start your adventure by booking your first tour with us!
          </p>
          <a
            href="/tours"
            className="px-6 py-3 bg-[#0373DE] text-white rounded-md font-medium hover:bg-[#025BB8] transition-colors"
          >
            Browse Tours
          </a>
        </div>
      )}
    </div>
  );
}
