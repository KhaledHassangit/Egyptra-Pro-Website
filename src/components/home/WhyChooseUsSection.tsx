import Image from "next/image"
import { MapPin, Star, Gift } from "lucide-react"

export function WhyChooseUsSection() {
  return (
    <section className="bg-white py-16 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-xl text-sm leading-relaxed">
            With over 15 years of experience and 100,000+ happy travelers, we've perfected the art of creating
            unforgettable Egyptian adventures. Our commitment to quality, safety, and authentic experiences sets us
            apart.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Features */}
          <div className="space-y-6">
            {/* Feature 1 - Blue */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-xl flex-shrink-0 flex items-center justify-center w-12 h-12">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Expert Local Guides</h3>
                <p className="text-gray-600 text-sm">Professional Egyptologist guides bring.</p>
              </div>
            </div>

            {/* Feature 2 - Orange/Tan */}
            <div className="flex items-start gap-4">
              <div className="bg-amber-400 text-white p-3 rounded-xl flex-shrink-0 flex items-center justify-center w-12 h-12">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Average rating</h3>
                <p className="text-gray-600 text-sm">Set the date you want</p>
              </div>
            </div>

            {/* Feature 3 - Blue */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 text-white p-3 rounded-xl flex-shrink-0 flex items-center justify-center w-12 h-12">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Best Price Guarantee</h3>
                <p className="text-gray-600 text-sm">Get discount for every services</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600 mb-1">15+</p>
                <p className="text-xs text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600 mb-1">100K+</p>
                <p className="text-xs text-gray-600">Response Time</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-1">24/7</p>
                <p className="text-xs text-gray-600">Expert Support</p>
              </div>
            </div>
          </div>

          {/* Right Column - Images with Decorative Elements */}
          <div className="relative h-full">
            {/* Decorative "egypt" text - Top */}
            <div className="absolute -top-8 right-12 pointer-events-none">
              <svg viewBox="0 0 200 80" className="w-32 h-auto opacity-30">
                <text x="0" y="60" fontSize="60" fontStyle="italic" fontFamily="cursive" fill="#1e40af">
                  egypt
                </text>
              </svg>
            </div>

            {/* Images Container */}
            <div className="relative h-96 mt-8">
              {/* Top Image - Blue Border */}
              <div className="absolute top-0 right-0 w-64 h-48 rounded-3xl overflow-hidden border-4 border-blue-600 shadow-lg z-20">
                <Image src="/placeholder.jpg" alt="Egypt tourist destination" fill className="object-cover" />
              </div>

              {/* Bottom Image - Tan/Beige Border */}
              <div className="absolute bottom-0 left-0 w-64 h-48 rounded-3xl overflow-hidden border-4 border-amber-400 shadow-lg z-10">
                <Image src="/placeholder.jpg" alt="Egypt coastal view" fill className="object-cover" />
              </div>
            </div>

            {/* Decorative "eg" text - Bottom */}
            <div className="absolute bottom-4 left-4 pointer-events-none">
              <svg viewBox="0 0 150 80" className="w-24 h-auto opacity-30">
                <text x="0" y="60" fontSize="50" fontStyle="italic" fontFamily="cursive" fill="#1e40af">
                  eg
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
