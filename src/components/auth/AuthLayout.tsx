"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { AuthLayoutProps } from '@/constants/types';
import { Star, Shield, Award } from 'lucide-react';

const carouselImages = [
  { src: '/images/1.jpg', alt: 'Egyptian Temple 1' },
  { src: '/images/2.jpg', alt: 'Egyptian Temple 2' },
  { src: '/images/3.jpg', alt: 'Egyptian Temple 3' }
];

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality for the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex w-full">
        {/* Left Section: Carousel */}
        <div className="hidden lg:flex lg:w-1/2 relative items-end p-6 sm:p-8 lg:p-12 text-white overflow-hidden">
          <div className="absolute inset-0">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  currentSlide === index ? "opacity-100" : "opacity-0"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 overlay-bg"></div>
              </div>
            ))}
          </div>

          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
            <div className="flex items-center gap-1 px-3 h-[35px] rounded-[10px] bg-[#FFFFFF1A]">
              <Star size={14} color="#FDC700" fill="#FDC700" />
              <span className="text-white text-[14px] font-normal text-nowrap">4.9/5 Rating</span>
            </div>
            
            <div className="flex items-center gap-1 px-3 h-[35px] rounded-[10px] bg-[#FFFFFF1A]">
              <Shield size={14} className="text-white" />
              <span className="text-white text-[14px] font-normal text-nowrap">Secure Booking</span>
            </div>
            
            <div className="flex items-center gap-1 px-3 h-[35px] rounded-[10px] bg-[#FFFFFF1A]">
              <Award size={14} className="text-white" />
              <span className="text-white text-[14px] font-normal text-nowrap">10,000+ Travelers</span>
            </div>
          </div>

          <div className="relative z-10 ps-4 sm:ps-8 lg:ps-22 max-w-screen-xl mb-8 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-normal leading-tight lg:leading-[40px] mb-4">Walk Among History</h1>
            <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-relaxed lg:leading-[28px]" style={{ color: '#FFFFFFE5' }}>
              Visit the majestic temples of Luxor
            </p>

            <div className="flex gap-2 mt-6 sm:mt-8">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "h-1 w-6 sm:w-8 rounded-full transition-all duration-200",
                    currentSlide === index ? "bg-white" : "bg-white/50"
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-background">
          {children}
        </div>
      </main>
    </div>
  );
};