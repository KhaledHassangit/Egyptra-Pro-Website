import Image from "next/image"
import { MapPin, Star, Gift } from "lucide-react"

export function WhyChooseUsSection() {
  return (
    <section className="bg-white py-16 w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-xl text-sm leading-relaxed">
            With over 15 years of experience and 100,000+ happy travelers, we've perfected the art of creating
            unforgettable Egyptian adventures. Our commitment to quality, safety, and authentic experiences sets us
            apart.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Features */}
          <div className="space-y-6">
            {/* Feature 1 - Location Icon with Primary Background */}
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white p-3 rounded-xl flex-shrink-0 flex items-center justify-center w-12 h-12">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Expert Local Guides</h3>
                <p className="text-gray-600 text-sm">Professional Egyptologist guides.</p>
              </div>
            </div>

            {/* Feature 2 - Star Icon with Custom Orange/Tan */}
            <div className="flex items-start gap-4">
              <div
                className="text-white p-3 rounded-xl flex-shrink-0 flex items-center justify-center w-12 h-12"
                style={{ backgroundColor: "#EBB67E" }}
              >
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Average rating</h3>
                <p className="text-gray-600 text-sm">Rated 4.9/5 by our travelers.</p>
              </div>
            </div>

            {/* Feature 3 - Gift Icon with Primary Background */}
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white p-3 rounded-xl flex-shrink-0 flex items-center justify-center w-12 h-12">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Best Price Guarantee</h3>
                <p className="text-gray-600 text-sm">Best prices guaranteed.</p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-1">15+</p>
                <p className="text-xs text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-1">100K+</p>
                <p className="text-xs text-gray-600">Happy Travelers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-1">24/7</p>
                <p className="text-xs text-gray-600">Expert Support</p>
              </div>
            </div>
          </div>

          {/* Right Column - Images with Overlapping Staggered Layout */}
          <div className="relative w-full" style={{ height: "650px" }}>
            {/* SVG 1 - "egypt" text - Behind first image, top-right corner */}
            <div className="absolute top-12 right-12 w-56 pointer-events-none z-0">
              <Image
                src="/images/Egypt.svg"
                alt=""
                width={200}
                height={120}
                className="opacity-30 w-full h-auto"
                unoptimized
              />
            </div>

            {/* First Image - 444x499 - Top Left with Blue Border */}
            <div
              className="absolute top-0 left-0 rounded-3xl overflow-hidden border-4 border-primary shadow-lg z-10"
              style={{ width: "280px", height: "315px" }}
            >
              <Image
                src="/images/dest4.jpg"
                alt="Egypt tourist destination"
                width={444}
                height={499}
                className="object-cover w-full h-full"
              />
            </div>

            {/* SVG 2 - "eg" text - Behind second image, left-center */}
            <div className="absolute top-48 left-20 w-48 pointer-events-none z-20">
              <Image
                src="/images/Egypt1.svg"
                alt=""
                width={150}
                height={100}
                className="opacity-30 w-full h-auto"
                unoptimized
              />
            </div>

            {/* Second Image - 444x669 - Bottom Right with Tan/Orange Border */}
            <div
              className="absolute bottom-0 right-0 rounded-3xl overflow-hidden border-4 shadow-lg z-30"
              style={{ borderColor: "#EBB67E", width: "280px", height: "420px" }}
            >
              <Image
                src="/images/5.jpg"
                alt="Egypt coastal view"
                width={444}
                height={669}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
