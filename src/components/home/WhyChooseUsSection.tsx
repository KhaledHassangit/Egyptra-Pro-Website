import { MapPin, Star, Gift } from "lucide-react"
import Container from "@/util/Container"
import SectionHeader from "@/util/SectionHeader"
import ImageBox from "../shared/ImageBox"

export function WhyChooseUsSection() {
  return (
    <section className=" py-16 ">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="flex-1 flex flex-col">
            <div className="mb-12">
              <SectionHeader 
                title="Why Choose Us"
                description="With over 15 years of experience and 100,000+ happy travelers, we've perfected the art of creating unforgettable Egyptian adventures. Our commitment to quality, safety, and authentic experiences sets us apart."
              />
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-2nd-primary text-white p-2.5 rounded-xl flex-shrink-0 flex items-center justify-center w-[60px] h-[60px]">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-[#3A3A3A] text-lg mb-1">Expert Local Guides</h3>
                  <p className="text-[#282828] text-sm font-medium">Professional Egyptologist guides.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="text-white bg-secondary p-2.5 rounded-xl flex-shrink-0 flex items-center justify-center w-[60px] h-[60px]"
                >
                  <Star className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-[#3A3A3A] text-lg mb-1">Average rating</h3>
                  <p className="text-[#282828] text-sm font-medium">Rated 4.9/5 by our travelers.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#2CAEF8] text-white p-2.5 rounded-xl flex-shrink-0 flex items-center justify-center w-[60px] h-[60px]">
                  <Gift className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-[#3A3A3A] text-lg mb-1">Best Price Guarantee</h3>
                  <p className="text-[#282828] text-sm font-medium">Best prices guaranteed.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center md:flex-row flex-col justify-between gap-4 mt-12">
              <div className="text-center">
                <p className="text-4xl font-bold text-2nd-primary mb-1">15+</p>
                <p className="text-lg text-[#282828] font-medium">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-2nd-primary mb-1">100K+</p>
                <p className="text-lg text-[#282828] font-medium">Happy Travelers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-2nd-primary mb-1">24/7</p>
                <p className="text-lg text-[#282828] font-medium">Expert Support</p>
              </div>
            </div>
          </div>

          <div className="flex-1 md:flex hidden items-center justify-center ">
           <ImageBox />
          </div>
        </div>
      </Container>
    </section>
  )
}