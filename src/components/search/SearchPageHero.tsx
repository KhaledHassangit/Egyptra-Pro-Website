"use client";

import { useState } from "react";
import Container from "@/util/Container";
import { Search,  Ship, Mountain, Bike, Building2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import AdvancedFilters from "./AdvancedFilters";

const SearchPageHero = () => {
    const [isAdvancedFiltersOpen, setIsAdvancedFiltersOpen] = useState(false);

    return (
        <section className="relative w-full">
            <div
                className="relative w-full h-[550px] md:h-[600px] text-white overflow-hidden"
                style={{ 
                    backgroundImage: `url('/images/1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div
                    className="absolute inset-0 z-0"
                    style={{ backgroundColor: '#0373DECC' }}
                />

                <Container className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-4 md:gap-6 pt-6 md:pt-10 px-4">
                    <h1 className="font-medium text-[28px] md:text-[40px] leading-[1.2]">
                        Discover Egypt's Wonders
                    </h1>
                    <p className="text-[16px] md:text-[18px] font-normal text-white/90 max-w-md">
                        Find and book the most amazing tours and activities across Egypt
                    </p>
                    
                    <div className={cn(
                        "bg-white shadow-lg p-4 md:p-6 flex flex-col gap-4 md:gap-6 w-full max-w-4xl",
                        isAdvancedFiltersOpen ? "rounded-t-[16px]" : "rounded-[16px]"
                    )}>
                        {/* Search Bar */}
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <Input
                                    placeholder="Search destinations..."
                                    className="pl-10 h-10 md:h-12 rounded-[14px] text-sm md:text-base border border-[#D1D5DC]"
                                />
                            </div>
                            <Button className="h-10 md:h-12 px-4 md:px-8 rounded-[16px] bg-[#155DFC] hover:bg-[#025bb5] text-white text-sm md:text-base">
                                Search
                            </Button>
                        </div>

                        {/* Popular Searches */}
                        <div className="flex flex-col gap-3">
                            <span className="text-[#4A5565] text-sm font-medium text-left">Popular searches:</span>
                            <div className="flex flex-wrap gap-2">
                                {["Hurghada", "Luxor", "Cairo", "Sharm", "Safari"].map((tag) => (
                                    <button key={tag} className="px-3 py-1.5 md:px-4 md:py-2 border bg-[#F3F4F6] hover:bg-gray-200 border-[#E5E7EB] rounded-full text-xs md:text-sm text-[#364153] transition-colors">
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Things To Do */}
                        <div className="flex flex-col gap-3">
                            <span className="text-[#101828] text-left text-sm font-bold">Things To Do</span>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {[
                                    { icon: Ship, label: "Snorkeling" },
                                    { icon: Bike, label: "Quad Safari" },
                                    { icon: Ship, label: "Boat Trips" }, 
                                    { icon: Building2, label: "City Tours" },
                                    { icon: Mountain, label: "Desert" },
                                ].map((item, index) => (
                                    <button
                                        key={index}
                                        className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 border border-[#D1D5DC] rounded-full hover:border-[#0373DE] hover:text-[#0373DE] text-gray-600 transition-colors"
                                    >
                                        <item.icon size={14} />
                                        <span className="text-xs md:text-sm font-medium">{item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="h-[1px] bg-[#E5E7EB] w-full" />

                        <div>
                            <button
                                onClick={() => setIsAdvancedFiltersOpen(!isAdvancedFiltersOpen)}
                                className="flex items-center gap-2 text-[#0373DE] font-medium text-sm"
                            >
                                Advanced Filters
                                <span className={cn("transition-transform", isAdvancedFiltersOpen ? "rotate-180" : "")}>
                                    <ChevronDown size={16} />
                                </span>
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            {isAdvancedFiltersOpen && (
                <div className="relative z-30 -mt-6">
                    <Container>
                        <div className="bg-white rounded-b-xl shadow-lg p-4 md:p-6 max-w-4xl mx-auto">
                            <AdvancedFilters />
                        </div>
                    </Container>
                </div>
            )}
        </section>
    );
};

export default SearchPageHero;