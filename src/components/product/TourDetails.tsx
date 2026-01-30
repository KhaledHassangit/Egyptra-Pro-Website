"use client";

import { Calendar } from "@/components/ui/calendar"

import { useState } from "react";
import {
  Star,
  Check,
  MapPin,
  Clock,
  Users,
  Eye,
  CheckCircle,
  ChevronDown,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function TourDetailsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tourData = {
    title: "Dolphin House Hurghada",
    rating: 4.9,
    reviewCount: 10040,
    location: "Hurghada, Makadi Bay, El Gouna, Sahl Hasheesh, Soma Bay Safaga",
    duration: "8 hours (7:00 AM - 3:00 PM)",
    groupSize: 40,
    views: 47,
    price: "$95",
    description:
      "Begin your Hurghada Dolphin House experience with a convenient pickup from your hotel or accommodation in an air-conditioned vehicle. Head to the pier and board your well-equipped boat, where you'll be warmly welcomed by the captain and crew. Your journey takes you to the heart of the Red Sea, where you'll encounter playful dolphins in their natural habitat...",
    highlights: [
      "Enjoy a premium Dolphin House Hurghada cruise with panoramic Red Sea views.",
      "Snorkel at two top coral reef spots in the open sea, surrounded by colorful marine life.",
      "Spot and swim alongside dolphins while respecting their natural environment.",
      "Indulge in thrilling water sports, including banana boat and sofa rides.",
      "Savor a buffet lunch with unlimited soft drinks, prepared fresh onboard by a friendly crew.",
    ],
    included: [
      "Round-trip hotel transfers in air-conditioned vehicle",
      "Snorkeling equipment (mask, fins, life jacket)",
      "Unlimited soft drinks, water, tea, and coffee",
      "Full boat insurance and safety equipment",
      "Professional English-speaking guide",
      "Buffet lunch with fresh seafood and grilled dishes",
      "Banana boat and sofa boat water sports activities",
      "Use of changing rooms and shower facilities",
    ],
    notIncluded: [
      "Personal expenses and souvenirs",
      "Underwater camera rental (available for $20)",
      "Gratuities for crew and guide (optional)",
    ],
    importantInfo: {
      duration: "8 hours (7:00 AM - 3:00 PM)",
      groupSize: "Maximum 40 people",
      languages: "English, Arabic, German, Russian",
      pickup: "Hotel lobby (time will be confirmed)",
      cancellation: "Free cancellation up to 24 hours",
      mobileTicket: "Accepted - show on your phone",
    },
    whatToBring: [
      "Swimwear",
      "Sunglasses",
      "Sunscreen",
      "Towel",
      "Hat or cap",
      "Camera",
    ],
    importantNotes: [
      "Dolphin sightings cannot be guaranteed as they are wild animals",
      "Not recommended for pregnant women or people with back problems",
      "Swimming ability required for water activities",
    ],
    reviews: [
      {
        id: 1,
        name: "Sarah Johnson",
        date: "January 10, 2026",
        rating: 5,
        text: "Absolutely amazing experience! We saw multiple dolphins and the snorkeling spots were breathtaking. The crew was incredibly friendly and professional. The lunch was delicious too. Highly recommend!",
      },
      {
        id: 2,
        name: "Michael Chen",
        date: "January 8, 2026",
        rating: 5,
        text: "Best tour in Hurghada! The boat was clean and comfortable, equipment was top quality, and seeing the dolphins up close was a dream come true. Worth every penny!",
      },
      {
        id: 3,
        name: "Emma Schmidt",
        date: "January 5, 2026",
        rating: 4,
        text: "Great day out! Only minor issue was the pickup was 15 minutes late, but otherwise everything was perfect. The water sports were so much fun and the coral reefs were stunning.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6 text-sm text-gray-600">
            Home / Destination / Product
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {tourData.title}
          </h1>

          <div className="flex items-center gap-6 flex-wrap mb-6">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="font-bold text-lg">{tourData.rating}</span>
              <span className="text-sm text-gray-600">
                ({tourData.reviewCount.toLocaleString()} reviews)
              </span>
            </div>
            <Badge variant="secondary" className="bg-teal-100 text-teal-800">
              TRIPADVISOR
            </Badge>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-blue-600" />
              <span className="text-sm">Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-blue-600" />
              <span className="text-sm font-semibold">7 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye size={18} className="text-blue-600" />
              <span className="text-sm">{tourData.views} views</span>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center gap-3">
            <MapPin className="text-blue-600 flex-shrink-0" size={20} />
            <span className="text-gray-900">
              Tour available from <span className="font-semibold">{tourData.location}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="overview"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600 px-6 py-3"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="includes"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600 px-6 py-3"
                >
                  Includes
                </TabsTrigger>
                <TabsTrigger
                  value="info"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600 px-6 py-3"
                >
                  Info
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600 px-6 py-3"
                >
                  Reviews
                  <Badge variant="secondary" className="ml-2 bg-gray-800 text-white">
                    10040
                  </Badge>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Highlights</h3>
                  <div className="space-y-3">
                    {tourData.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check
                          size={20}
                          className="text-blue-600 mt-1 flex-shrink-0"
                        />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {tourData.description}
                  </p>
                  <button className="text-blue-600 font-semibold mt-4 flex items-center gap-2 hover:text-blue-700">
                    Show More
                    <ChevronDown size={18} />
                  </button>
                </div>
              </TabsContent>

              <TabsContent value="includes" className="mt-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {tourData.included.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-4"
                      >
                        <Check
                          size={20}
                          className="text-green-600 flex-shrink-0"
                        />
                        <span className="text-gray-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    Not Included
                  </h3>
                  <div className="space-y-3">
                    {tourData.notIncluded.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-red-600 mt-1 font-bold text-lg">
                          •
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="info" className="mt-6 space-y-6">
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-6">
                    Important Information
                  </h3>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Duration</p>
                      <p className="font-semibold text-gray-900">
                        {tourData.importantInfo.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Group Size</p>
                      <p className="font-semibold text-gray-900">
                        {tourData.importantInfo.groupSize}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Languages</p>
                      <p className="font-semibold text-gray-900">
                        {tourData.importantInfo.languages}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Pickup</p>
                      <p className="font-semibold text-gray-900">
                        {tourData.importantInfo.pickup}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Cancellation</p>
                      <p className="font-semibold text-gray-900">
                        {tourData.importantInfo.cancellation}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Mobile Ticket</p>
                      <p className="font-semibold text-gray-900">
                        {tourData.importantInfo.mobileTicket}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-bold mb-4 text-gray-900">
                    What to Bring
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {tourData.whatToBring.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check
                          size={18}
                          className="text-blue-600 flex-shrink-0"
                        />
                        <span className="text-sm text-gray-900">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h4 className="font-bold mb-4 text-gray-900">
                    Important Notes
                  </h4>
                  <div className="space-y-3">
                    {tourData.importantNotes.map((note, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <AlertCircle
                          className="text-yellow-600 mt-1 flex-shrink-0"
                          size={18}
                        />
                        <span className="text-sm text-gray-900">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6 space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <div className="font-bold text-lg text-gray-900">
                      {tourData.rating}
                    </div>
                    <div className="text-sm text-gray-600">
                      out of 5 ({tourData.reviewCount.toLocaleString()} reviews)
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-600">
                    Write a Review
                  </Button>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-4">Rating Breakdown</h4>
                  <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((rating) => {
                      const percentage =
                        rating === 5
                          ? 85
                          : rating === 4
                            ? 10
                            : rating === 3
                              ? 3
                              : rating === 2
                                ? 1
                                : 1;
                      return (
                        <div key={rating} className="flex items-center gap-3">
                          <span className="text-sm w-12 text-gray-700 font-medium">
                            {rating} stars
                          </span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full transition-all"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 w-12 text-right">
                            {percentage}%
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-6">
                  {tourData.reviews.map((review) => (
                    <div key={review.id} className="border rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="font-semibold text-gray-900">
                            {review.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {review.date}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Button
                    variant="outline"
                    className="border border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    Load More Reviews
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="font-bold text-sm">{tourData.rating}</p>
                  <p className="text-xs text-gray-600">({tourData.reviewCount.toLocaleString()} reviews)</p>
                  <Badge className="bg-teal-500 text-white text-xs mt-2">TRIPADVISOR</Badge>
                </div>

                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-600 uppercase">Duration</p>
                    <p className="font-bold text-sm">7 hours</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 uppercase">Views</p>
                    <p className="font-bold text-xs">{tourData.views} Currently</p>
                  </div>
                </div>
              </div>


              <div className="bg-blue-50 rounded-lg p-4 mb-6 flex items-start gap-3">
                <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-sm text-gray-900">Instant Confirmation</p>
                  <p className="text-xs text-gray-600">Immediate booking confirmation via email</p>
                </div>
              </div>

              <div className="bg-blue-100 border-l-4 border-blue-600 rounded p-4 mb-6">
                <p className="text-xs text-gray-700 flex items-start gap-2">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5 text-blue-600" />
                  <span>Tour available from <span className="font-semibold">Hurghada, Makadi Bay, El Gouna, Sahl Hasheesh, Soma Bay Safaga</span></span>
                </p>
              </div>

              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold py-6 rounded-lg mb-6"
              >
                Book Now
              </Button>

              <div className="border-t pt-4">
                <div className="flex items-start gap-3">
                  <Calendar  className="text-gray-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">What to Expect</p>
                    <p className="text-xs text-gray-700 mt-2 leading-relaxed">
                      Embark on an unforgettable Dolphin House Hurghada adventure, where you'll cruise the stunning Red Sea, snorkel among vibrant coral reefs, and encounter playful dolphins in their natural habitat. This Dolphin boat trip combines relaxation...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
