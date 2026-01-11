"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tag, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const AdvancedFilters = () => {
    const [sortValue, setSortValue] = useState("popular");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const sortOptions = [
        { value: "popular", label: "Most Popular" },
        { value: "price_low", label: "Price: Low to High" },
        { value: "price_high", label: "Price: High to Low" },
        { value: "rating", label: "Top Rated" }
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4 space-y-4">
                    <div className="flex items-center gap-2 text-black font-semibold text-sm">
                        <Tag  size={16} />
                        Price Range
                    </div>
                    <div className="h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0373DE] w-100" />
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex-1 space-y-1">
                            <span className="text-xs text-gray-500">Min Price</span>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                <Input type="number" placeholder="0" className="pl-6" />
                            </div>
                        </div>
                        <div className="flex-1 space-y-1">
                            <span className="text-xs text-gray-500">Max Price</span>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                <Input type="number" placeholder="500" className="pl-6" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="md:col-span-4 space-y-4">
                    <h3 className="text-black font-semibold text-sm">Categories</h3>
                    <div className="flex flex-col gap-3">
                        {[
                            "Activity",
                            "Boat Tour",
                            "Historical",
                            "Multi Day",
                            "Safari"
                        ].map((category) => (
                            <div key={category} className="flex items-center gap-2">
                                <Checkbox id={category} className="border-[#0373DE] data-[state=checked]:bg-[#0373DE] data-[state=checked]:border-[#0373DE]" />
                                <label
                                    htmlFor={category}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600"
                                >
                                    {category}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sort By - Custom Dropdown */}
                <div className="md:col-span-4 space-y-4">
                    <h3 className="text-black font-semibold text-sm flex justify-between items-center w-full">
                        Sort By
                    </h3>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            className="w-full px-3 py-2 text-left bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0373DE] focus:border-[#0373DE] flex items-center justify-between"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span className="text-gray-700">
                                {sortOptions.find(option => option.value === sortValue)?.label || "Sort by"}
                            </span>
                            <ChevronDown 
                                size={16} 
                                className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                            />
                        </button>
                        
                        {isDropdownOpen && (
                            <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                                {sortOptions.map((option) => (
                                    <div
                                        key={option.value}
                                        className="px-3 py-2 cursor-pointer hover:bg-gray-50 text-gray-700"
                                        onClick={() => {
                                            setSortValue(option.value);
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        {option.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="h-px bg-gray-100 w-full my-2" />

            {/* Action Buttons */}
            <div className="flex gap-3 justify-start">
                <Button variant="outline" className="h-12 px-8 text-gray-600 border-gray-300 hover:bg-gray-50">
                    Clear All
                </Button>
                <Button className="h-12 px-8 w-100 bg-[#0373DE] hover:bg-[#025bb5] text-white flex-1 md:flex-none">
                    Apply Filters
                </Button>
            </div>
        </div>
    );
};

export default AdvancedFilters;