import Container from "@/util/Container";
import Image from 'next/image';

export function TrustIndicators() {
  return (
    <Container className="py-20 z-20">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <TrustItem
          icon={
            <Image 
              src={"images/shield.svg"} 
              alt="Shield" 
              width={40} 
              height={40}
              className="object-contain"
            />
          }
          title="No Hidden Costs"
          desc="All-inclusive with transfers"
        />
        <TrustItem
          icon={
            <Image 
              src={"images/streamline.svg"} 
              alt="Flame" 
              width={50} 
              height={50}
              className="object-contain"
            />
          }
          title="Best Price Guarantee"
          desc="Unmatched quality & price"
        />
        <TrustItem
          icon={
            <Image 
              src={"images/star.svg"} 
              alt="Star" 
              width={35} 
              height={35}
              className="object-contain"
            />
          }
          title="Top Rated Reviews"
          desc="Real customer videos & reviews"
        />
        <TrustItem
          icon={
            <Image 
              src={"images/clock.svg"} 
              alt="Clock" 
              width={35} 
              height={35}
              className="object-contain"
            />
          }
          title="Flexible Policy"
          desc="Cancel 12h | Change 4h before"
        />
      </div>
    </Container>
  );
}

function TrustItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex items-center justify-center p-3">
        {icon}
      </div>
      <div className="flex flex-col justify-center text-center">
        <h3 className="mb-1 text-[#2A2A2A] font-normal text-base">
          {title}
        </h3>
        <p className="text-[#757575] font-normal text-sm">
          {desc}
        </p>
      </div>
    </div>
  ); 
}