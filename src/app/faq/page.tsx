"use client"
import Container from "@/util/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import UIButton from "@/util/UIButton";
import Link from "@/components/shared/link";
import PageHero from "@/util/PageHero";
import { CircleHelp } from "lucide-react";

export default function FaqPage() {
  const faqs = [
    {
      question: "What is included in the boat trip package?",
      answer: "Our boat trip package includes round-trip transportation from your hotel, a professional guide, snorkeling equipment, life jackets, and lunch on board. We also provide soft drinks and water throughout the trip. For full-day excursions, we include a stop at a beautiful island or reef for swimming and snorkeling."
    },
    {
      question: "Can I cancel or reschedule my booking?",
      answer: "Yes, you can cancel or reschedule your booking up to 24 hours before the trip date for a full refund. Cancellations made less than 24 hours before the trip may incur a 50% cancellation fee. To reschedule, please contact our customer service team at least 24 hours in advance, and we'll be happy to accommodate your request based on availability."
    },
    {
      question: "What should I bring with me?",
      answer: "We recommend bringing sunscreen, a hat, sunglasses, a towel, and your swimwear. If you're planning to snorkel, you might want to bring an underwater camera. Don't forget to bring some cash for any additional purchases or tips. During winter months (November-March), we also suggest bringing a light jacket as it can get cooler on the water."
    },
    {
      question: "Is the trip suitable for children?",
      answer: "Yes, our boat trips are family-friendly and suitable for children of all ages. We have life jackets in various sizes, including for children. However, please note that children must be supervised by an adult at all times during the trip, especially when swimming or snorkeling. We offer discounted rates for children under 12."
    },
    {
      question: "Do you provide transportation from hotels?",
      answer: "Yes, we provide complimentary round-trip transportation from most hotels in the area. Our air-conditioned vehicles will pick you up from your hotel lobby in the morning and return you after the trip. When booking, please provide your hotel details, and we'll confirm the exact pickup time. For hotels located outside our standard pickup zones, additional charges may apply."
    }
  ];

  return (
    <section>
      <PageHero currentPageUrl="faq" currentPage="FAQ" title="FAQ" />
      <Container className="py-16">
        <div className="border border-[#E5E7EB] border-[0.8px] shadow-[0px_1px_3px_0px_rgba(51,51,51,0.1)] p-[50px] rounded-[16px]">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Section */}
            <div className="lg:w-1/3">
              <h2 className="font-bold text-[32px] leading-[40px] mb-4 text-[#101828]">Have Any Questions?</h2>
              <p className="text-[14px] leading-[20px] text-[#4A5565] mb-8">
                Our team is here to help you with any questions about your booking, travel plans, or anything else you need to know about your trip. We're committed to making your experience as smooth as possible.
              </p>
              <UIButton className="!rounded-[10px]">
                <Link href="/contact_us">
                  Contact Us
                </Link>
              </UIButton>
            </div>

            {/* Right Section - FAQ Accordion */}
            <div className="lg:w-2/3">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-[10px] overflow-hidden px-0 bg-[#F9FAFB] data-[state=open]:border-[#155DFC] data-[state=open]:border-[0.8px]"
                  >
                    <AccordionTrigger className="px-5 py-5 text-left bg-[#F9FAFB] hover:bg-[#F9FAFB] hover:no-underline transition-colors group">
                      <div className="flex items-center gap-3 w-full">
                        <div className="w-8 h-8 rounded-full bg-[#6B7280] flex items-center justify-center flex-shrink-0 transition-colors group-data-[state=open]:bg-[#155DFC]">
                          <CircleHelp className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-[#101828] text-[16px] text-left pr-4">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-[#F9FAFB] text-[#4A5565] text-[14px]  data-[state=open]:border-t-[#155DFC] data-[state=open]:border-t-[0.8px] ml-11">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}