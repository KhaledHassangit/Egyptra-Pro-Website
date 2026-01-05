import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function PopularTourSection() {
  return (
    <section className="bg-gray-50 py-16 w-full" id="trips">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Most Popular tour</h2>
            <p className="text-gray-600">Discover our most loved tours and unforgettable experiences in Egypt</p>
            <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
              {['Cairo', 'Hurghada', 'Luxor', 'Aswan'].map((city, idx) => (
                <button key={city} className={`flex items-center gap-2 px-1 pb-2 border-b-2 transition-colors whitespace-nowrap ${idx === 0 ? 'border-primary text-primary font-bold' : 'border-transparent text-gray-500 hover:text-gray-900'}`}>
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative">
                    <Image src={`https://z-cdn-media.chatglm.cn/files/91337a7d-0db5-4bd3-aa4e-4d7411fc94d4.png?auth_key=1867634055-672442e1908043c499bafd4151952672-0-9d6cacdfcd88cb88e5385d9f0c0d8791`} alt={city} fill className="object-cover" />
                  </div>
                  {city}
                </button>
              ))}
            </div>
          </div>
          <Button className="bg-primary text-white">Explore Tours</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <TourCard key={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TourCard() {
  return (
    <div className="bg-white border text-left border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src="https://z-cdn-media.chatglm.cn/files/91337a7d-0db5-4bd3-aa4e-4d7411fc94d4.png?auth_key=1867634055-672442e1908043c499bafd4151952672-0-9d6cacdfcd88cb88e5385d9f0c0d8791" alt="Tour" fill className="object-cover" />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center text-xs text-gray-500 font-semibold uppercase tracking-wider">
          <span>Cairo</span>
          <div className="flex items-center gap-1 text-primary">
            <Star size={12} fill="currentColor" />
            <span>4.2 (200)</span>
          </div>
        </div>
        <h3 className="font-bold text-gray-900 line-clamp-2">Hurghada: Dolphin watching boat tour with snorkeling</h3>
        <p className="text-primary font-bold text-lg">$ 254</p>
      </div>
    </div>
  );
}