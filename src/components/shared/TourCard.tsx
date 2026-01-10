"use client";

import Image from "next/image";
import { Star, Clock, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { TourCardProps } from "@/constants/types";


export function TourCard({ 
    imagePath, 
    city, 
    title, 
    price, 
    rating, 
    duration,
    groupSize,
    location,
    variant = "default",
    className 
}: TourCardProps) {
    
    if (variant === "detailed") {
        return (
            <div
                className={cn(
                    "bg-white border text-left border-gray-200 overflow-hidden hover:shadow-lg transition-shadow h-[400px] flex flex-col ",
                    className
                )}
            >
                <div className="relative h-[200px] w-full">
                    <Image
                        src={imagePath}
                        alt={`${city} Tour`}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-xs font-medium">
                        {duration}
                    </div>
                </div>
                <div className="p-4 flex flex-col flex-1 justify-between">
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-black text-sm font-medium">{city}</span>
                            <div className="flex items-center gap-1">
                                <Star size={12} className="text-primary fill-current" />
                                <span className="text-black text-xs font-light">{rating}</span>
                            </div>
                        </div>
                        <h3 className="text-gray-700 text-base font-normal line-clamp-2">
                            {title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                            {location && (
                                <div className="flex items-center gap-1">
                                    <MapPin size={12} />
                                    <span>{location}</span>
                                </div>
                            )}
                            {groupSize && (
                                <div className="flex items-center gap-1">
                                    <Users size={12} />
                                    <span>{groupSize}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t">
                        <p className="text-primary text-base font-medium">{price}</p>
                        <button className="text-primary text-sm font-medium border border-primary px-3 py-1 rounded-md hover:bg-primary hover:text-white transition">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Default variant
    return (
        <div
            className={cn(
                "bg-white border text-left border-gray-200 overflow-hidden hover:shadow-lg transition-shadow h-[335px] flex flex-col ",
                className
            )}
        >
            <div className="relative h-[180px] w-full">
                <Image
                    src={imagePath}
                    alt={`${city} Tour`}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between">
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-black text-sm font-medium">{city}</span>
                        <div className="flex items-center gap-1">
                            <Star size={12} className="text-primary fill-current" />
                            <span className="text-black text-xs font-light">{rating}</span>
                        </div>
                    </div>
                    <h3 className="text-gray-700 text-base font-normal line-clamp-2">
                        {title}
                    </h3>
                </div>
                <p className="text-primary text-base font-medium">{price}</p>
            </div>
        </div>
    );
}