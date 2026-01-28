"use client";

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
    Calendar, MapPin, Users, Star, Clock, Heart, Share2,
    ArrowRight, Check, X, Camera, Shield, RefreshCw, ChevronDown,
    Eye, TrendingUp, Info, FileText, MessageSquare, CheckCircle,
    ChevronLeft, ChevronRight, XIcon, AlertCircle
} from 'lucide-react';
import Container from '@/util/Container';
import PageHero from '@/util/PageHero';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { TourCard } from '@/components/shared/TourCard';
import { Faq } from '@/components/shared/faq';
import { SectionCarousel } from '@/components/shared/section-carousel';

// Import separated components and data
import { Tour, getTourBySlug, getRelatedTours, getRecentlyViewedTours, getTopExperiences } from '@/constants/tourData';
import { ImagePreviewModal } from '@/components/product/ImagePreviewModal';
import { TourDetailsSkeleton } from '@/components/product/TourDetailsSkeleton';
import { ImageGallery } from '@/components/product/ImageGallery';

export default function TourDetailsPage() {
    const params = useParams();
    const slug = params.slug as string;
    const [tour, setTour] = useState<Tour | null>(null);
    const [relatedTours, setRelatedTours] = useState<any[]>([]);
    const [recentlyViewedTours, setRecentlyViewedTours] = useState<any[]>([]);
    const [topExperiences, setTopExperiences] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [previewImageIndex, setPreviewImageIndex] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tourData = getTourBySlug(slug);
                const relatedData = getRelatedTours(tourData?.id || '');
                const recentlyViewedData = getRecentlyViewedTours();
                const topExperiencesData = getTopExperiences();

                setTour(tourData);
                setRelatedTours(relatedData);
                setRecentlyViewedTours(recentlyViewedData);
                setTopExperiences(topExperiencesData);
            } catch (error) {
                console.error('Error fetching tour data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    const handleNextImage = () => {
        if (previewImageIndex !== null && tour) {
            setPreviewImageIndex((previewImageIndex + 1) % tour.galleryImages.length);
        }
    };

    const handlePrevImage = () => {
        if (previewImageIndex !== null && tour) {
            setPreviewImageIndex(
                (previewImageIndex - 1 + tour.galleryImages.length) % tour.galleryImages.length
            );
        }
    };

    const handleImageClick = (index: number) => {
        setPreviewImageIndex(index);
    };

    if (isLoading) {
        return <TourDetailsSkeleton />;
    }

    if (!tour) {
        notFound();
    }

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Destination', url: '/tours' },
        { name: 'Product' },
    ];

    // Static tour data from the first component
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
        <section className="min-h-screen bg-white">
            {/* Image Preview Modal */}
            {previewImageIndex !== null && (
                <ImagePreviewModal
                    images={tour.galleryImages}
                    currentIndex={previewImageIndex}
                    onClose={() => setPreviewImageIndex(null)}
                    onNext={handleNextImage}
                    onPrev={handlePrevImage}
                />
            )}

            <PageHero
                title={tourData.title}
                breadcrumbItems={breadcrumbItems}
            />

            {/* Header Info */}
            <Container className="py-6">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={18}
                                className="fill-yellow-400 text-yellow-400"
                            />
                        ))}
                    </div>
                    <span className="font-bold text-lg" style={{ color: '#101828' }}>{tourData.rating}</span>
                    <span className="text-sm" style={{ color: '#4A5565' }}>({tourData.reviewCount.toLocaleString()} reviews)</span>
                    <div className="flex items-center gap-1" style={{ color: '#364153' }}>
                        <MapPin size={16} className="text-primary" />
                        <span className="text-sm">{tourData.location}</span>
                    </div>
                    <div className="flex items-center gap-1" style={{ color: '#364153' }}>
                        <Clock size={16} className="text-primary" />
                        <span className="text-sm">{tourData.duration}</span>
                    </div>
                    <div className="flex items-center gap-1" style={{ color: '#364153' }}>
                        <Users size={16} className="text-primary" />
                        <span className="text-sm">Max {tourData.groupSize} people</span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold mb-6">{tourData.title}</h1>

                {/* Image Gallery */}
                <div className="w-full">
                    <ImageGallery tour={tour} onImageClick={handleImageClick} />
                </div>
            </Container>

            {/* Main Content */}
           <Container className="py-8">
    <div className="flex flex-col space-y-8">
        {/* Top Section - Previously Right Sidebar */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            {/* First Row: Cards (2/3 width) and BookNow Button (1/3 width) */}
            <div className="flex gap-4 mb-4">
                {/* Cards Container - Takes 2/3 width */}
                <div className="w-2/3 grid grid-cols-2 gap-4">
                    {/* Card 1: Reviews */}
                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-200 flex items-center justify-between h-[40px] overflow-hidden">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={12}
                                    className="fill-yellow-400 text-yellow-400"
                                />
                            ))}
                            <span className="font-bold text-sm text-gray-900 ml-1">4.6</span>
                        </div>
                        <Badge className="bg-[#34E0A1] text-white text-[10px] px-1 py-0">TRIPADVISOR</Badge>
                    </div>

                    {/* Card 2: Duration */}
                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-200 flex items-center justify-between h-[40px]">
                        <div className="flex items-center gap-1">
                            <Clock size={12} className="text-blue-600" />
                            <span className="text-xs text-gray-600 uppercase font-medium">DURATION</span>
                        </div>
                        <span className="font-bold text-sm text-gray-900">7 hours</span>
                    </div>

                    {/* Card 3: Instant Confirmation */}
                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-200 flex items-center justify-between h-[40px]">
                        <div className="flex items-center gap-1">
                            <CheckCircle size={12} className="text-green-600" />
                            <span className="text-xs text-gray-600 uppercase font-medium">INSTANT</span>
                        </div>
                        <span className="text-xs text-gray-700 text-right">Confirmation</span>
                    </div>

                    {/* Card 4: Views */}
                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-200 flex items-center justify-between h-[40px]">
                        <div className="flex items-center gap-1">
                            <Eye size={12} className="text-blue-600" />
                            <span className="text-xs text-gray-600 uppercase font-medium">VIEWS</span>
                        </div>
                        <span className="font-bold text-sm text-gray-900">47</span>
                    </div>
                </div>

                {/* Book Now Button Container - Takes 1/3 width */}
                <div className="w-1/3">
                    <Button
                        size="lg"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-lg shadow-md h-[85px] text-lg"
                    >
                        Book Now
                    </Button>
                </div>
            </div>

            {/* Tour Available Locations - Full Width Gradient Background */}
            <div 
                className="w-full rounded-lg p-4 mb-6"
                style={{
                    background: 'linear-gradient(90deg, #EFF6FF 0%, #DBEAFE 100%)'
                }}
            >
                <p className="text-sm text-gray-700">
                    <span className="font-normal">Tour available from</span>{' '}
                    <span className="font-bold">Hurghada, Makadi Bay, El Gouna, Sahl Hasheesh, Soma Bay</span>
                </p>
            </div>

            {/* What to Expect */}
            <div className="bg-[#F9FAFB] rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What to Expect</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                    Embark on an unforgettable Dolphin House Hurghada adventure, where you'll cruise the stunning Red Sea, 
                    snorkel among vibrant coral reefs, and encounter playful dolphins in their natural habitat. 
                    This Dolphin boat trip combines relaxation, adventure and natural beauty in one perfect day trip.
                </p>
            </div>
        </div>

        {/* Main Content Section - Previously Left Content */}
        <div className="space-y-6">
            {/* Tabs Navigation */}
            <Tabs
                defaultValue="overview"
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

                {/* Overview Tab */}
                <TabsContent value="overview" className="mt-6 space-y-6">
                    {/* Highlights */}
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

                    {/* Description */}
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

                {/* Includes Tab */}
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

                {/* Info Tab */}
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

                    {/* What to Bring */}
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

                    {/* Important Notes */}
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

                {/* Reviews Tab */}
                <TabsContent value="reviews" className="mt-6 space-y-6">
                    {/* Header with Rating and Write Review Button */}
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

                    {/* Rating Breakdown */}
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

                    {/* Individual Reviews */}
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

                    {/* Load More Reviews */}
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

            {/* FAQ Section */}
            <div className="mt-12">
                <Faq />
            </div>

            {/* Discount Banner */}
            <div className="mt-8 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <p className="text-sm uppercase tracking-wide mb-2 text-blue-100">Discount</p>
                        <h3 className="text-5xl font-bold mb-2">Save 50%</h3>
                        <p className="text-blue-100 mb-4 text-sm">Valid for yearly subscriptions</p>
                        <p className="text-sm text-blue-50 mb-6 max-w-lg">
                            Share this tour with your friends and get an exclusive 5% discount code.
                            Discover amazing tours in Sharm-el-Sheikh!
                        </p>
                        <Button
                            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
                            size="lg"
                        >
                            <Share2 size={18} className="mr-2" />
                            Share to Get Your Discount Code
                        </Button>
                    </div>
                    <div className="ml-8 hidden md:block">
                        <div className="w-32 h-32 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm border-2 border-white/20">
                            <div className="text-7xl">🎁</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Container>

            {/* Recently Viewed Tours */}
            <div className="bg-gray-50 py-12 mt-12">
                <Container>
                    <SectionCarousel
                        title="Recently viewed tour"
                        description=""
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                    >
                        {recentlyViewedTours.map((tour) => (
                            <div key={tour.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <TourCard
                                    imagePath={tour.imagePath}
                                    city={tour.city}
                                    title={tour.title}
                                    price={tour.price}
                                    rating={tour.rating}
                                    duration={tour.duration}
                                    groupSize={tour.groupSize}
                                    location={tour.location}
                                    variant="detailed"
                                />
                            </div>
                        ))}
                    </SectionCarousel>
                </Container>
            </div>

            {/* Top Experiences */}
            <div className="bg-white py-12">
                <Container>
                    <SectionCarousel
                        title="Top Experiences in sharm el sheikh"
                        description=""
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                    >
                        {topExperiences.map((tour) => (
                            <div key={tour.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <TourCard
                                    imagePath={tour.imagePath}
                                    city={tour.city}
                                    title={tour.title}
                                    price={tour.price}
                                    rating={tour.rating}
                                    duration={tour.duration}
                                    groupSize={tour.groupSize}
                                    location={tour.location}
                                    variant="detailed"
                                />
                            </div>
                        ))}
                    </SectionCarousel>
                </Container>
            </div>
        </section>
    );
}