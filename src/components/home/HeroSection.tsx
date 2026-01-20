"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Container from '@/util/Container'
import { HeroImageMosaic } from "../shared/HeroImageMosaic"

export function HeroSection() {
  return (
    <section className="bg-primary pt-12 sm:pt-16 md:pt-20 pb-8 relative z-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10 mx-auto lg:mx-0 text-center lg:text-left pt-4 w-full max-w-lg lg:max-w-none">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-[1.3]">
              Discover Egypt&apos;s Top<br />Ranked Egypt
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#EDEDED] font-light leading-relaxed">
              Top Ranked Egypt Things to do, Tours and Activities.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-full shadow-xl flex items-center w-full max-w-full md:max-w-[500px] lg:max-w-[555px] mx-auto lg:mx-0">
              <Input
                type="text"
                placeholder="Where are you going?"
                className="flex-1 m-1 px-4 py-1.5 bg-[#fafafa] text-gray-600 focus:outline-none  border-0 h-[55px] focus-visible:ring-0 focus-visible:border-transparent rounded-full"
              />
              <Button
                className="bg-[#D0A87D] hover:bg-[#C89A68] max-w-[120px] me-2 w-full h-[50px] text-white rounded-full  flex items-center justify-center gap-2 whitespace-nowrap px-4 sm:px-6 "
              >
                <Search className="h-4 w-4" />
                <span className="hidden sm:inline">Search</span>
              </Button>
            </div>
          </div>

          {/* Right Images Mosaic */}
          <div className="relative h-[300px]  z-10">
            <HeroImageMosaic />
          </div>
        </div>
      </Container>
    </section>
  )
}