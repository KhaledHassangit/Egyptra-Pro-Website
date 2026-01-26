import { HeroSection } from "@/components/home/HeroSection";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { PopularTourSection } from "@/components/home/PopularTourSection";
import { ActivityTypeSection } from "@/components/home/ActivityTypeSection";
import { ExclusiveDealsSection } from "@/components/home/ExclusiveDealsSection";
import { CustomerTestimonials } from "@/components/home/CustomerTestimonials";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { AboutSection } from "@/components/home/AboutSection";
import { fetchTours } from "@/services/tourService";
import { fetchReviews } from "@/services/reviewsService";

export default async function Home() {
  const [Tours] = await Promise.all([
    fetchTours(),
  ]);
  const [Reviews] = await Promise.all([
    fetchReviews(),
  ]);
  
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <div className="pt-[260px]"></div>
      <TrustIndicators />
      <AboutSection />
      <DestinationsSection />
      <PopularTourSection tours={Tours.data.data} />
      <ActivityTypeSection tours={Tours.data.data} />
      <ExclusiveDealsSection />
      <CustomerTestimonials  Reviews={Reviews}/>
      <WhyChooseUsSection />
    </div>
  );
}