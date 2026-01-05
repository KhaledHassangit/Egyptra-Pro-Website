import Image from "next/image";
import { Button } from "@/components/ui/button";

export function DestinationsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 w-full" id="destinations">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Top Egypt Destinations</h2>
          <p className="text-gray-600">Top Ranked Egypt Things to do, Tours.</p>
        </div>
        <Button variant="outline" className="hidden sm:inline-flex border-primary text-primary hover:bg-primary hover:text-white">Explore Destinations</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[500px]">
        {/* Grid layout for destinations - custom grid similar to mockup */}
        <div className="md:col-span-1 md:row-span-2 relative h-64 md:h-full rounded-2xl overflow-hidden group">
          <Image src="https://z-cdn-media.chatglm.cn/files/95e451a7-0934-4240-9740-73962d2a1e8b.png?auth_key=1867634055-46db1b827aeb4f2d9e23b206e8844c15-0-01869dffc3aa09a0db84e5cdb4704d0c" alt="Hurghada" fill className="object-cover transition-transform group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <span className="text-white font-bold text-xl">Hurghada</span>
          </div>
        </div>

        <div className="md:col-span-1 md:row-span-1 relative h-64 md:h-full rounded-2xl overflow-hidden group">
          <Image src="https://z-cdn-media.chatglm.cn/files/95e451a7-0934-4240-9740-73962d2a1e8b.png?auth_key=1867634055-46db1b827aeb4f2d9e23b206e8844c15-0-01869dffc3aa09a0db84e5cdb4704d0c" alt="Desert" fill className="object-cover transition-transform group-hover:scale-105" />
        </div>

        <div className="md:col-span-1 md:row-span-1 relative h-64 md:h-full rounded-2xl overflow-hidden group">
          <Image src="https://z-cdn-media.chatglm.cn/files/95e451a7-0934-4240-9740-73962d2a1e8b.png?auth_key=1867634055-46db1b827aeb4f2d9e23b206e8844c15-0-01869dffc3aa09a0db84e5cdb4704d0c" alt="Marsa Alam" fill className="object-cover transition-transform group-hover:scale-105" />
        </div>

        <div className="md:col-span-1 md:row-span-2 relative h-64 md:h-full rounded-2xl overflow-hidden group">
          <Image src="https://z-cdn-media.chatglm.cn/files/95e451a7-0934-4240-9740-73962d2a1e8b.png?auth_key=1867634055-46db1b827aeb4f2d9e23b206e8844c15-0-01869dffc3aa09a0db84e5cdb4704d0c" alt="Luxor" fill className="object-cover transition-transform group-hover:scale-105" />
        </div>

        <div className="md:col-span-1 md:row-span-1 relative h-64 md:h-full rounded-2xl overflow-hidden group">
          <Image src="https://z-cdn-media.chatglm.cn/files/95e451a7-0934-4240-9740-73962d2a1e8b.png?auth_key=1867634055-46db1b827aeb4f2d9e23b206e8844c15-0-01869dffc3aa09a0db84e5cdb4704d0c" alt="Diving" fill className="object-cover transition-transform group-hover:scale-105" />
        </div>

        <div className="md:col-span-1 md:row-span-1 relative h-64 md:h-full rounded-2xl overflow-hidden group bg-primary">
          {/* Fallback or colored Text Box like 'Sharm el shakh' in mockup */}
          <Image src="https://z-cdn-media.chatglm.cn/files/95e451a7-0934-4240-9740-73962d2a1e8b.png?auth_key=1867634055-46db1b827aeb4f2d9e23b206e8844c15-0-01869dffc3aa09a0db84e5cdb4704d0c" alt="Sharm el shakh" fill className="object-cover transition-transform group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <span className="text-white font-bold text-xl">Sharm el shakh</span>
          </div>
        </div>
      </div>
      <div className="mt-4 sm:hidden">
        <Button variant="outline" className="w-full border-primary text-primary">Explore Destinations</Button>
      </div>
    </section>
  );
}