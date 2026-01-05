import { Star } from "lucide-react";

export function CustomerTestimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
        <p className="text-gray-600">Real experiences from our valued travelers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <h3 className="font-bold text-lg mb-3">Great experience</h3>
            <p className="text-gray-600 mb-4">
              The tour was well-organized and our guide was knowledgeable. We saw all the major attractions and had plenty of time for photos. Highly recommend!
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <p className="font-medium">Mohamed Ahmed</p>
                <p className="text-sm text-gray-500">Roma • September 21, 2023</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}