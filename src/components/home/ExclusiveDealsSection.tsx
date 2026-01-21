import { ExclusiveDealsSectionProps } from "@/constants/types";
import Container from "@/util/Container";
import UIButton from "@/util/UIButton";

export function ExclusiveDealsSection({
  backgroundImage = "/images/banner.png" 
}: ExclusiveDealsSectionProps) {
  return (
    <Container className="py-8 px-4">
      <section className="relative rounded-[10px] overflow-hidden h-[200px] sm:h-[220px] md:h-[243px] w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        />
        
        {/* Overlay Container */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div 
            className="bg-[#FFFFFFE5]  px-4 sm:px-6 md:px-10 rounded-[20px] h-auto min-h-[150px] md:h-[192px] sm:w-[85%] md:w-[calc(100%-100px)] max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-4 p-4 sm:p-6 md:p-8"
          >
            {/* Text Content */}
            <div className="text-center md:text-left flex-1">
              <h3 
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-2"
                style={{ 
                  color: "#000000",
                  fontWeight: 700 
                }}
              >
                Exclusive Egypt Deals
              </h3>
              <p 
                className="text-base sm:text-lg"
                style={{ 
                  color: "#D0A87D",
                  fontWeight: 400 
                }}
              >
                Save Up to 40% on select tours
              </p>
            </div>
            
            {/* Button - Aligned with the paragraph text */}
            <UIButton 
              className="bg-primary hover:bg-primary/90 text-white min-w-[120px] sm:min-w-[150px] flex-shrink-0"
              style={{ 
                height: "44px sm:50px", 
                borderRadius: "4px", 
                fontWeight: 500, 
                fontSize: "14px sm:16px",
              }}
            >
              Explore Tours
            </UIButton>
          </div>
        </div>
      </section>
    </Container>
  );
}