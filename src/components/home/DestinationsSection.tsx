// DestinationsSection.tsx
import Image from "next/image"
import Container from "@/util/Container"
import UIButton from "@/util/UIButton"
import SectionHeader from "@/util/SectionHeader"

export function DestinationsSection() {
  return (
    <Container className="py-16">
      {/* Header Section - SectionHeader and button in flex with justify-between */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        <div className="mb-4 sm:mb-0">
          <SectionHeader
            title="Top Egypt Destinations"
            description="Top Ranked Egypt Things to do, Tours."
          />
        </div>
        
        <div className="flex-shrink-0">
          <UIButton className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3">
            View All Destinations
          </UIButton>
        </div>
      </div>

      {/* City Tabs */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {/* Your city tabs content here */}
      </div>

      {/* Images Grid - Keep existing structure */}
      <div className="flex w-full flex-wrap mx-auto justify-center lg:flex-nowrap gap-4 overflow-x-auto ml-4 sm:ml-0 mr-4 sm:mr-0">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 w-full sm:w-72 flex-shrink-0">
          {/* Image 1 */}
          <div className="relative w-full h-84 overflow-hidden group">
            <Image
              src="/images/dest1.png"
              alt="Beach walkway"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          {/* Label 1 */}
          <div className="w-full h-24 sm:h-28 md:h-32 bg-primary rounded-bl-[60px] sm:rounded-bl-[88px] flex items-center justify-center">
            <span className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl px-2 sm:px-0">
              Hurghada
            </span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 w-full sm:w-72 flex-shrink-0">
          {/* Image 2 */}
          <div className="relative w-full h-56 rounded-tr-[20px] overflow-hidden group">
            <Image
              src="/images/dest2.jpg"
              alt="Beach"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          {/* Image 5 */}
          <div className="relative w-full h-56 rounded-br-[20px] overflow-hidden group">
            <Image
              src="/images/dest5.jpg"
              alt="Beach destination"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4 w-full sm:w-72 flex-shrink-0">
          {/* Image 3 */}
          <div
            className="relative w-full h-56 rounded-tr-[20px] overflow-hidden group"
            style={{ transform: "rotateY(180deg)" }}
          >
            <Image
              src="/images/dest3.jpg"
              alt="Suspension bridge"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          {/* Image 6 */}
          <div
            className="relative w-full h-56 rounded-br-[20px] overflow-hidden group"
            style={{ transform: "rotateY(180deg)" }}
          >
            <Image
              src="/images/dest6.jpg"
              alt="Sharm el shakh"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-4 w-full sm:w-72 flex-shrink-0">
          <div className="relative w-full h-84 overflow-hidden group" style={{ transform: "rotateY(180deg)" }}>
            <Image
              src="/images/dest4.jpg"
              alt="Lake and mountains"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div
            className="w-full h-24 sm:h-28 md:h-32 bg-[#D0A87D] rounded-bl-[60px] sm:rounded-bl-[88px] flex items-center justify-center"
            style={{ transform: "rotateY(-180deg)" }}
          >
            <span className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl px-2 sm:px-0" style={{ transform: "rotateY(180deg)" }}>
              Sharm El Sheikh
            </span>
          </div>
        </div>
      </div>
    </Container>
  )
}