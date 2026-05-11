// DestinationsSection.tsx
import Image from "next/image"
import Link from "@/components/shared/link"
import Container from "@/util/Container"
import UIButton from "@/util/UIButton"
import SectionHeader from "@/util/SectionHeader"

export function DestinationsSection() {
  return (
    <Container className="py-20 overflow-x-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        <div className="mb-4 sm:mb-0">
          <SectionHeader
            title="Top Egypt Destinations"
            description="Top Ranked Egypt Things to do, Tours."
          />
        </div>
        
        <div className="flex-shrink-0">
          <Link href="/destination-tours" className="inline-block">
            <UIButton className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3">
              View All Destinations
            </UIButton>
          </Link>
        </div>
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="flex flex-col gap-4 order-1 lg:order-1">
          <div className="lg:hidden w-full h-24 sm:h-28 md:h-32 bg-primary 
                         rounded-tr-[60px] sm:rounded-tr-[88px] md:rounded-tr-[88px] 
                         flex items-center justify-center" 
               style={{ transform: "rotateY(180deg)" }}>
            <span className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-xl px-2 sm:px-0" 
                  style={{ transform: "rotateY(180deg)" }}>
              Hurghada
            </span>
          </div>
          
          <div className="relative w-full h-64 lg:h-[336px] overflow-hidden group">
            <Image
              src="/assets/destinations/hurghada-1.jpg"
              alt="Hurghada"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
          
          <div className="hidden lg:flex w-full h-24 sm:h-28 md:h-32 lg:h-28 
                         bg-primary rounded-bl-[60px] sm:rounded-bl-[88px] lg:rounded-bl-[88px] 
                         items-center justify-center">
            <span className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-xl px-2 sm:px-0 text-center">
              Hurghada
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 order-2 lg:order-2">
          <div className="relative w-full h-64 lg:h-[224px] overflow-hidden group">
            <Image
              src="/assets/destinations/hurghada-2.jpg"
              alt="Hurghada beach"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="relative w-full h-64 lg:h-[224px] overflow-hidden group">
            <Image
              src="/assets/destinations/hurghada-3.jpg"
              alt="Hurghada destination"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 order-3 lg:order-3">
          <div className="relative w-full hidden lg:flex h-64 lg:h-[224px] overflow-hidden group"
               style={{ transform: "rotateY(180deg)" }}>
            <Image
              src="/assets/destinations/sharm-1.jpg"
              alt="Sharm El Sheikh"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="relative hidden lg:flex w-full h-64 lg:h-[224px] overflow-hidden group"
               style={{ transform: "rotateY(180deg)" }}>
            <Image
              src="/assets/destinations/sharm-2.jpg"
              alt="Sharm El Sheikh"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 order-4 lg:order-4">
          <div className="relative w-full h-64 lg:h-[336px] overflow-hidden group"
               style={{ transform: "rotateY(180deg)" }}>
            <Image
              src="/assets/destinations/sharm-3.jpg"
              alt="Sharm El Sheikh"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          {/* Label 2 - Sharm El Sheikh */}
          <div className="w-full h-24 sm:h-28 md:h-32 lg:h-28 
                         bg-[#D0A87D] rounded-bl-[60px] sm:rounded-bl-[88px] lg:rounded-bl-[88px] 
                         flex items-center justify-center"
               style={{ transform: "rotateY(-180deg)" }}>
            <span className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-xl px-2 sm:px-0 text-center" 
                  style={{ transform: "rotateY(180deg)" }}>
              Sharm El Sheikh
            </span>
          </div>
        </div>
      </div>
    </Container>
  )
}