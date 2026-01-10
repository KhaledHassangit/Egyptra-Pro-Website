import { ExclusiveDealsSectionProps } from "@/constants/types";
import Container from "@/util/Container";
import UIButton from "@/util/UIButton";



export function ExclusiveDealsSection({
  backgroundImage = "/images/banner.png" 
}: ExclusiveDealsSectionProps) {
  return (
    <Container className="py-8">
      <section className="relative rounded-[10px] overflow-hidden h-[243px] w-full">
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
            className="bg-[#FFFFFFE5] rounded-[20px] h-[192px] w-full max-w-[calc(100%-100px)] flex flex-col md:flex-row items-center justify-between gap-4 p-8"
          >
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h3 
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ 
                  color: "#000000",
                  fontWeight: 700 
                }}
              >
                Exclusive Egypt Deals
              </h3>
              <p 
                className="text-lg"
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
              className="bg-primary hover:bg-primary/90 text-white min-w-[150px]"
              style={{ 
                height: "50px", 
                borderRadius: "4px", 
                fontWeight: 500, 
                fontSize: "16px",
                marginTop: "auto",
                marginBottom: "auto"
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