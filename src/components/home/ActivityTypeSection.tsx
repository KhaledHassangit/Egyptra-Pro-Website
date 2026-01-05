import Image from "next/image";
import { Star } from "lucide-react";

export function ActivityTypeSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Explore Egypt by Activity Type</h2>
        <p className="text-gray-600 mb-6">From thrilling desert safaris to serene Nile cruises - find your perfect Egyptian adventure</p>
        <div className="flex justify-center flex-wrap gap-2">
          {['Hurghada', 'Sharm', 'Cairo', 'Luxor', 'Giza'].map((tag, idx) => (
            <span key={tag} className={`px-4 py-1 rounded-full text-sm border cursor-pointer ${idx === 0 ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-300 hover:border-primary'}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[500px]">
        {/* Activity Grid */}
        <div className="relative rounded-2xl overflow-hidden h-64 md:h-auto md:col-span-1 group">
          <Image src="https://z-cdn-media.chatglm.cn/files/d3becfa8-953b-455b-b8ec-c0311e2ebc12.png?auth_key=1867634055-4418feee338e41268eb659084e507c64-0-7d87120c94984c2ca1fea24748bc837d" alt="Boat Tour" fill className="object-cover transition-transform group-hover:scale-105" />
          <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 rounded-md text-xs font-bold">4.8</div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <h3 className="font-bold text-xl">Boat Tour</h3>
            <p className="text-sm opacity-90">Hurghada</p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden h-96 md:h-auto md:col-span-1 md:row-span-2 group">
          <Image src="https://z-cdn-media.chatglm.cn/files/d3becfa8-953b-455b-b8ec-c0311e2ebc12.png?auth_key=1867634055-4418feee338e41268eb659084e507c64-0-7d87120c94984c2ca1fea24748bc837d" alt="Safari" fill className="object-cover transition-transform group-hover:scale-105" />
          <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 rounded-md text-xs font-bold">4.9</div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <h3 className="font-bold text-xl">Desert Safari</h3>
            <p className="text-sm opacity-90">Hurghada</p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden h-64 md:h-auto md:col-span-1 group">
          <Image src="https://z-cdn-media.chatglm.cn/files/d3becfa8-953b-455b-b8ec-c0311e2ebc12.png?auth_key=1867634055-4418feee338e41268eb659084e507c64-0-7d87120c94984c2ca1fea24748bc837d" alt="Hiking" fill className="object-cover transition-transform group-hover:scale-105" />
          <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 rounded-md text-xs font-bold">4.7</div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <h3 className="font-bold text-xl">Hiking</h3>
            <p className="text-sm opacity-90">Sinai</p>
          </div>
        </div>
      </div>
    </section>
  );
}