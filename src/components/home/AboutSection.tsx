import Image from "next/image";
import UIButton from "@/util/UIButton"; 
import Container from "@/util/Container"; 

export function AboutSection() {
  return (
    <Container className="py-8 md:py-16">
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12" id="about">
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          <div className="space-y-2 md:space-y-4">
            <div className="relative w-full h-[308px] md:h-[466px] rounded-[11px] overflow-hidden">
              <Image 
                src="/images/plane.jpg" 
                alt="Plane Wing" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2 md:space-y-4">
            <div className="bg-primary w-full h-[80px] md:h-[100px] rounded-[11px] text-center text-white flex flex-col items-center justify-center">
              <span className="text-2xl md:text-4xl font-bold">+100,000</span>
              <span className="text-sm md:text-lg">Happy traveler</span>
            </div>
            <div className="relative w-full h-[220px] md:h-[350px] rounded-[11px] overflow-hidden">
              <Image 
                src="/images/dest4.jpg" 
                alt="Pyramids" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between h-[308px] md:h-[466px]">
          <div className="space-y-4">
            <h2 className="text-[#2A2A2A] text-2xl md:text-[36px] font-medium tracking-wider">
              About Us
            </h2>
            <p className="text-[#2A2A2A] text-base md:text-[24px] tracking-[.5px] font-light leading-relaxed md:leading-[43px]">
              Discover Egypt&apos;s top-ranked experiences with Egyptra, <span className="text-primary font-semibold">trusted by 100,000+ happy travelers.</span> Enjoy all-inclusive pricing with transfers and no hidden costs, a best price guarantee for unmatched quality and value, and a flexible policy allowing cancellation up to 12h or changes up to 4h before. Get instant booking confirmations with online or cash payment options.
            </p>
          </div>
          <div className="flex justify-center md:justify-start max-w-[200px]">
            <UIButton className="w-full">About US</UIButton>
          </div>
        </div>
      </section>
    </Container>
  );
}