import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Container from '@/util/Container';

export function HeroSection() {
  return (
    <section className="bg-primary pt-20 pb-8 relative z-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10 max-w-lg pt-4">
            <h1 className="text-[48px] font-medium text-white leading-[1.3]">
              Discover Egypt&apos;s Top<br />Ranked Egypt
            </h1>
            <p className="text-[#EDEDED] text-[26px] font-light leading-relaxed">
              Top Ranked Egypt Things to do, Tours and Activities.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-xl flex items-center relative" style={{ width: '555px', height: '55px' }}>
              <input
                type="text"
                placeholder="Where are you going?"
                className="flex-1  px-3 py-1.5 text-gray-600 focus:outline-none bg-transparent"
              />
              <Button
                className="bg-[#D0A87D] hover:bg-[#C89A68] h-[55px] text-white rounded-md flex items-center justify-center gap-2 whitespace-nowrap "
                style={{ width: '181px', borderRadius: '8px' }}
              >
                <Search className="h-4 w-4" />
                Search
              </Button>
            </div>
          </div>

          {/* Right Images Mosaic */}
          <div className="relative h-[400px] hidden lg:block z-50">
            {/* First Column - Tall image with city name button */}
            <div className="!mt-30">
              <div className="absolute top-0 left-0 w-[186px] h-[304px] rounded-xl overflow-hidden shadow-lg z-20">
                <Image
                  src="/images/1.jpg"
                  alt="Egypt destination"
                  fill
                  className="object-cover"
                />
              </div>

              {/* City Navigation Button */}
              <div className="absolute top-[314px] left-0 w-[186px] h-[67px] flex items-center justify-center bg-white rounded-xl shadow-lg z-20">
                <div className="flex items-center justify-center gap-2 w-full">
                  <button className="w-8 h-8 rounded-full bg-gray-100 shadow-md flex items-center justify-center hover:bg-gray-200 transition">
                    <ChevronLeft className="h-4 w-4 text-gray-700" />
                  </button>
                  <span className="text-gray-800 text-sm font-medium">Hurghada</span>
                  <button className="w-8 h-8 rounded-full bg-gray-100 shadow-md flex items-center justify-center hover:bg-gray-200 transition">
                    <ChevronRight className="h-4 w-4 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>

            {/* Second Column - First image */}
            <div className="absolute top-0 left-[200px] w-[185px] h-[351px] rounded-xl overflow-hidden shadow-lg z-10">
              <Image
                src="/images/2.jpg"
                alt="Egypt landscape"
                fill
                className="object-cover"
              />
            </div>

            {/* Second Column - Second image */}
            <div className="absolute top-[361px] left-[200px] w-[185px] h-[212px] rounded-xl overflow-hidden shadow-lg z-10">
              <Image
                src="/images/3.jpg"
                alt="Egypt tourist attraction"
                fill
                className="object-cover"
              />
            </div>

            {/* Third Column - First image */}
            <div className="absolute top-0 right-0 w-[186px] h-[351px] rounded-xl overflow-hidden shadow-lg z-10">
              <Image
                src="/images/4.png"
                alt="Egypt beach view"
                fill
                className="object-cover"
              />
            </div>

            {/* Third Column - Second image */}
            <div className="absolute top-[361px] right-0 w-[186px] h-[318px] rounded-xl overflow-hidden shadow-lg z-10">
              <Image
                src="/images/5.jpg"
                alt="Egypt coastal scenery"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}