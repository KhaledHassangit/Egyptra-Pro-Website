"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tag, ChevronDown } from "lucide-react";

const AdvancedFilters = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4 space-y-4">
                    <div className="flex items-center gap-2 text-black font-semibold text-sm">
                        <Tag className="rotate-90" size={16} />
                        Price Range
                    </div>
                    <div className="h-1.5 w-full bg-blue-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0373DE] w-1/3" />
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
                                <Checkbox id={category} className="border-gray-300 data-[state=checked]:bg-[#0373DE] data-[state=checked]:border-[#0373DE]" />
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

                {/* Sort By */}
                <div className="md:col-span-4 space-y-4">
                    <h3 className="text-black font-semibold text-sm flex justify-between items-center w-full">
                        Sort By
                        <ChevronDown size={16} className="text-gray-400" />
                    </h3>
                    <Select defaultValue="popular">
                        <SelectTrigger className="w-full border-gray-200 focus:border-[#0373DE] focus:ring-[#0373DE] rounded-lg">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent 
                            className="border-gray-200 shadow-lg rounded-lg"
                            position="popper"
                            sideOffset={-1}
                        >
                            <SelectItem value="popular">Most Popular</SelectItem>
                            <SelectItem value="price_low">Price: Low to High</SelectItem>
                            <SelectItem value="price_high">Price: High to Low</SelectItem>
                            <SelectItem value="rating">Top Rated</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="h-px bg-gray-100 w-full my-2" />

            {/* Action Buttons */}
            <div className="flex gap-3 justify-start">
                <Button variant="outline" className="h-10 px-8 text-gray-600 border-gray-300 hover:bg-gray-50">
                    Clear All
                </Button>
                <Button className="h-10 px-8 bg-[#0373DE] hover:bg-[#025bb5] text-white flex-1 md:flex-none">
                    Apply Filters
                </Button>
            </div>
        </div>
    );
};

export default AdvancedFilters;