import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { allDestinations } from '@/constants/data';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface HeroImageMosaicProps {
  className?: string;
}

export function HeroImageMosaic({ className }: HeroImageMosaicProps) {
  const [currentIndex, setCurrentIndex] = useState(2); 
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentDestination = allDestinations[currentIndex];

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? allDestinations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === allDestinations.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 400);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className={cn("relative", className)}>
      <div className="lg:block hidden relative">
        <div className="flex justify-center gap-2 sm:gap-3">
          <div className="flex flex-col items-center justify-center mt-8 sm:mt-24">
            <div className="relative w-[175px] h-[270px] rounded-xl sm:rounded-2xl overflow-hidden shadow-card">
              <Image
                src={currentDestination.images[0]}
                alt={`${currentDestination.name} view 1`}
                fill
                className={cn(
                  "object-cover transition-all duration-500",
                  isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
                )}
              />
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="bg-transparent rounded-full  flex items-center ">
                <button
                  onClick={handlePrev}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                  aria-label="Previous destination"
                >
                  <ChevronLeft className="h-4 w-4 " />
                </button>
                <div className="flex items-center gap-1 sm:gap-1.5 min-w-[90px] sm:min-w-[110px] justify-center">
                  <span className="text-primary text-sm  font-medium" >
                    {currentDestination.name}
                  </span>
                </div>
                <button
                  onClick={handleNext}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                  aria-label="Next destination"
                >
                  <ChevronRight className="h-4 w-4 "  />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-24">
            <div className="relative w-[175px] h-[270px] rounded-xl sm:rounded-2xl overflow-hidden shadow-card">
              <Image
                src={currentDestination.images[1]}
                alt={`${currentDestination.name} view 2`}
                fill
                className={cn(
                  "object-cover transition-all duration-500 delay-75",
                  isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
                )}
              />
            </div>
            <div className="relative w-[175px] h-[175px] rounded-xl sm:rounded-2xl overflow-hidden shadow-card">
              <Image
                src={currentDestination.images[2]}
                alt={`${currentDestination.name} view 3`}
                fill
                className={cn(
                  "object-cover transition-all duration-500 delay-100",
                  isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
                )}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="relative w-[175px] h-[270px] rounded-xl sm:rounded-2xl overflow-hidden shadow-card">
              <Image
                src={currentDestination.images[3]}
                alt={`${currentDestination.name} view 4`}
                fill
                className={cn(
                  "object-cover transition-all duration-500 delay-150",
                  isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
                )}
              />
            </div>
            <div className="relative w-[175px] h-[270px] rounded-xl sm:rounded-2xl overflow-hidden shadow-card">
              <Image
                src={currentDestination.images[4]}
                alt={`${currentDestination.name} view 5`}
                fill
                className={cn(
                  "object-cover transition-all duration-500 delay-200",
                  isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex justify-center gap-4 h-[500px]">
        <div className="flex flex-col gap-4 w-[175px]">
          <div className="relative w-full h-[270px] rounded-xl overflow-hidden shadow-card">
            <Image
              src={currentDestination.images[0]}
              alt={`${currentDestination.name} view 1`}
              fill
              className={cn(
                "object-cover transition-all duration-500",
                isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
              )}
            />
          </div>
          <div className="relative w-full h-[270px] rounded-xl overflow-hidden shadow-card">
            <Image
              src={currentDestination.images[1]}
              alt={`${currentDestination.name} view 2`}
              fill
              className={cn(
                "object-cover transition-all duration-500 delay-75",
                isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[175px] items-center justify-center">
          <div className="relative w-full h-[270px] rounded-xl overflow-hidden shadow-card">
            <Image
              src={currentDestination.images[2]}
              alt={`${currentDestination.name} main`}
              fill
              className={cn(
                "object-cover transition-all duration-500 delay-100",
                isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
              )}
            />
          </div>
          <div className="bg-transparent rounded-xl py-2 px-3 w-full">
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                aria-label="Previous destination"
              >
                <ChevronLeft className="h-4 w-4 "  />
              </button>
              <div className="flex items-center gap-1.5 flex-1 justify-center min-w-0">
                <span className="text-primary text-sm font-medium  text-center">
                  {currentDestination.name}
                </span>
              </div>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                aria-label="Next destination"
              >
                <ChevronRight className="h-4 w-4 " />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[175px]">
          <div className="relative w-full h-[270px] rounded-xl overflow-hidden shadow-card">
            <Image
              src={currentDestination.images[3]}
              alt={`${currentDestination.name} view 4`}
              fill
              className={cn(
                "object-cover transition-all duration-500 delay-150",
                isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
              )}
            />
          </div>
          <div className="relative w-full h-[270px] rounded-xl overflow-hidden shadow-card">
            <Image
              src={currentDestination.images[4]}
              alt={`${currentDestination.name} view 5`}
              fill
              className={cn(
                "object-cover transition-all duration-500 delay-200",
                isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}