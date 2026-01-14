import Image from "next/image";
import UIButton from "@/util/UIButton";
import Container from "@/util/Container";

export function AboutSection() {
  return (
    <Container className="py-8 sm:py-12 md:py-16 lg:py-20">
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16" id="about">
        {/* Left side - Image Grid - Hidden on md and below */}
        <div className="hidden lg:grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* First image - should match total height of right column */}
          <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/images/plane.jpg"
                alt="Plane Wing"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority
              />
            </div>
          </div>

          {/* Right column with Happy Traveler div and second image */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
            {/* Happy Traveler div */}
            <div className="bg-primary w-full h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] rounded-lg sm:rounded-xl md:rounded-2xl text-center text-white flex flex-col items-center justify-center">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">+100,000</span>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg">Happy traveler</span>
            </div>
            
            {/* Second image */}
            <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden flex-grow">
              <Image
                src="/images/dest4.jpg"
                alt="Pyramids"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </div>
        </div>

        {/* Right side - Content - Full width on md and below */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-[#2A2A2A] text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium tracking-tight sm:tracking-normal">
              About Us
            </h2>
            <p className="text-[#2A2A2A] text-base sm:text-lg md:text-xl lg:text-[24px] font-light leading-relaxed md:leading-[43px] tracking-tight sm:tracking-[.5px]">
              Discover Egypt&apos;s top-ranked experiences with Egyptra,{" "}
              <span className="text-primary font-semibold">
                trusted by 100,000+ happy travelers.
              </span>{" "}
              Enjoy all-inclusive pricing with transfers and no hidden costs, a best price guarantee for unmatched quality and value, and a flexible policy allowing cancellation up to 12h or changes up to 4h before. Get instant booking confirmations with online or cash payment options.
            </p>
          </div>
          <div className="flex justify-start pt-2 sm:pt-4">
            <UIButton className="w-full sm:w-auto min-w-[140px] px-6 py-3">
              About US
            </UIButton>
          </div>
        </div>
      </section>
    </Container>
  );
}