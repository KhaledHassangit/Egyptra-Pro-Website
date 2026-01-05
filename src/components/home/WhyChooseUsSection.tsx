import Image from "next/image";
import { Shield, Star, Flame } from "lucide-react";

export function WhyChooseUsSection() {
  return (
    <section className="bg-gray-50 py-16 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
          <p className="text-gray-600">Experience the best of Egypt with our trusted services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white p-3 rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Expert Local Guides</h3>
                <p className="text-gray-600">Our knowledgeable guides bring Egypt's history to life with fascinating stories and insights.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary text-white p-3 rounded-lg">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Average Rating</h3>
                <p className="text-gray-600">Consistently rated 4.8/5 by our satisfied customers who trust us with their travel experiences.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary text-white p-3 rounded-lg">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Best Price Guarantee</h3>
                <p className="text-gray-600">Find a lower price? We'll match it and give you an additional 10% off.</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100K+</p>
                <p className="text-sm text-gray-600">Happy Travelers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-gray-600">Expert Support</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image src="https://z-cdn-media.chatglm.cn/files/2d1cbfcb-36d4-4e5f-ad6a-a04ca6f1fb29.png?auth_key=1867634055-ad43e1e77b544969b8c5929c5ca9a77f-0-4d9d44bda1ab7ae2f12fd8f37c606178" alt="Egypt Tour" fill className="object-cover" />
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-md text-sm font-bold">Egypt</div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image src="https://z-cdn-media.chatglm.cn/files/2d1cbfcb-36d4-4e5f-ad6a-a04ca6f1fb29.png?auth_key=1867634055-ad43e1e77b544969b8c5929c5ca9a77f-0-4d9d44bda1ab7ae2f12fd8f37c606178" alt="Red Sea" fill className="object-cover" />
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-md text-sm font-bold">Eg</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}