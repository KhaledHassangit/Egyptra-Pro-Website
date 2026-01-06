import { HeroSection } from "@/components/home/HeroSection";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { PopularTourSection } from "@/components/home/PopularTourSection";
import { ActivityTypeSection } from "@/components/home/ActivityTypeSection";
import { ExclusiveDealsSection } from "@/components/home/ExclusiveDealsSection";
import { CustomerTestimonials } from "@/components/home/CustomerTestimonials";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <div className="pt-[260px]"></div>
      <DestinationsSection />
      <PopularTourSection />
      <ActivityTypeSection />
      <ExclusiveDealsSection />
      <CustomerTestimonials />
      <WhyChooseUsSection />
    </div>
  );
}