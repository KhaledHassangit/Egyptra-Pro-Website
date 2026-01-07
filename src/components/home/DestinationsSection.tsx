import Image from "next/image"
import Container from "@/util/Container"
import UIButton from "@/util/UIButton"
import SectionHeader from "@/util/SectionHeader"

export function DestinationsSection() {
  return (
    <Container className="py-12 ">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 ml-4 sm:ml-0 mr-4 sm:mr-0">
        <div>
          <SectionHeader
            title="Top Egypt Destinations"
            description="Top Ranked Egypt Things to do, Tours."
          />
        </div>
        <UIButton className="me-12">
          View All Destinations
        </UIButton>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-4 overflow-x-auto ml-4 sm:ml-0 mr-4 sm:mr-0">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 w-full sm:w-72 flex-shrink-0">
          {/* Image 1 - 287x324 */}
          <div className="relative w-full h-84 overflow-hidden group">
            <Image
              src="/images/dest1.png"
              alt="Beach walkway"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          {/* Label 1 - Blue box 287x108 with bottom-left radius */}
          <div className="w-full h-28 bg-primary rounded-bl-[88px] flex items-center justify-center">
            <span className="text-white font-bold text-[20px]">Hurghada</span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 w-full sm:w-72 flex-shrink-0">
          {/* Image 2 - 287x216 with top-right radius */}
          <div className="relative w-full h-56 rounded-tr-[20px] overflow-hidden group">
            <Image
              src="/images/dest2.jpg"
              alt="Beach"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          {/* Image 5 - 287x216 with bottom-right radius */}
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
          {/* Image 3 - 287x216 with top-right radius and -180 rotation */}
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
          {/* Image 6 - 287x216 with bottom-right radius and -180 rotation */}
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
            className="w-full h-28 bg-[#D0A87D] rounded-bl-[88px] flex items-center justify-center"
            style={{ transform: "rotateY(-180deg)" }}
          >
            <span className="text-white font-bold text-[20px]" style={{ transform: "rotateY(180deg)" }}>
              Sharm El Sheikh
            </span>
          </div>
        </div>
      </div>

      {/* Single mobile button - only visible on small screens */}
      <div className="mt-8 sm:hidden mx-4">
        <UIButton className="w-full">
          Explore Destinations
        </UIButton>
      </div>
    </Container>
  )
}