import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" id="about">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4 mt-8">
          <div className="relative h-64 rounded-2xl overflow-hidden">
            <Image src="https://z-cdn-media.chatglm.cn/files/70cb93e9-ea2d-4c23-b298-c4d1ac35ccd2.png?auth_key=1867634055-7216d1bfd65643c6acd4a7d69fe3c690-0-eb003bcdd2d8a655c7d3722f6771f9fb" alt="Plane Wing" fill className="object-cover" />
          </div>
          <div className="relative h-48 rounded-2xl overflow-hidden">
            <Image src="https://z-cdn-media.chatglm.cn/files/95e451a7-0934-4240-9740-73962d2a1e8b.png?auth_key=1867634055-46db1b827aeb4f2d9e23b206e8844c15-0-01869dffc3aa09a0db84e5cdb4704d0c" alt="Pyramids" fill className="object-cover" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-primary p-6 rounded-2xl text-center text-white flex flex-col items-center justify-center h-48">
            <span className="text-4xl font-bold">+ 100,000</span>
            <span className="text-lg">Happy traveler</span>
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden">
            <Image src="https://z-cdn-media.chatglm.cn/files/91337a7d-0db5-4bd3-aa4e-4d7411fc94d4.png?auth_key=1867634055-672442e1908043c499bafd4151952672-0-9d6cacdfcd88cb88e5385d9f0c0d8791" alt="Bridge Adventure" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-sm font-bold tracking-wider text-secondary uppercase">About Us</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
          Discover Egypt&apos;s top-ranked experiences
        </h3>
        <p className="text-gray-600 leading-relaxed">
          With Egyptra, <span className="font-semibold text-primary">trusted by 100,000+ happy travelers.</span> Enjoy all-inclusive pricing with transfers and no hidden costs, a best price guarantee for unmatched quality and value, and a flexible policy allowing cancellation up to 12h or changes up to 4h before.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Get instant booking confirmations with online or cash payment options.
        </p>
        <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg">About US</Button>
      </div>
    </section>
  );
}