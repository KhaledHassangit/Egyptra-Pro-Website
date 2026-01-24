"use client"
import Container from "@/util/Container";
import { useState } from "react";

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState("Travel Support");
  
  const categories = [
    "Travel Support",
    "Getting Started",
    "Pricing and Payment",
    "Cancellation and Changes"
  ];
  
  const faqs = [
    {
      question: "Is there a tour guide with the group?",
      answer: "Yes, all our group tours include professional, multi-lingual tour guides. Our guides are experts in the destinations we visit and provide insightful commentary throughout your journey. They're also available to assist with any questions or concerns you may have during the trip."
    },
    {
      question: "What should I pack for my trip?",
      answer: "Packing recommendations vary by destination and season. Generally, we suggest comfortable walking shoes, weather-appropriate clothing, a day bag for excursions, and any personal medications. Approximately 30 days before your departure, we'll send you a detailed packing list specific to your itinerary."
    },
    {
      question: "Are meals included in the tour price?",
      answer: "Most of our tours include breakfast daily, and many also include additional meals as specified in your itinerary. We typically leave some meals free for you to explore local cuisine on your own. Your detailed itinerary will clearly indicate which meals are included."
    },
    {
      question: "How much luggage can I bring?",
      answer: "Our standard luggage allowance is one checked bag (up to 50 lbs/23 kg) and one carry-on per person. For tours involving smaller vehicles or internal flights, there may be stricter limitations. We'll provide specific luggage information with your travel documents."
    },
    {
      question: "Is travel insurance recommended?",
      answer: "Yes, we strongly recommend travel insurance for all our tours. Travel insurance can protect you against unforeseen circumstances including trip cancellation, medical emergencies, lost luggage, and more. We offer comprehensive travel insurance options at the time of booking."
    }
  ];
  
  return (
    <Container>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 bg-gray-800 p-6">
          <h2 className="text-xl font-bold mb-6">Support Center</h2>
          <nav className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
        
        {/* FAQ Content */}
        <div className="flex-1 p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">{selectedCategory}</h1>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            {/* Contact Support Section */}
            <div className="mt-12 bg-gray-800 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-gray-300 mb-6">Can't find the answer you're looking for? Our customer support team is here to help.</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}