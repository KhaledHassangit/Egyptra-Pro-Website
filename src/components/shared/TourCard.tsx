"use client";

import Image from "next/image";
import { 
    Star, 
    Clock, 
    MapPin, 
    Users, 
    Heart, 
    Share2, 
    ChevronRight, 
    Bookmark, 
    ArrowRight, 
    LayoutGrid,
    Facebook,
    Twitter,
    MessageCircle,
    Copy,
    Check
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TourCardProps } from "@/constants/types";
import { useState, useEffect, useRef } from "react";

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
    const [showShareDropdown, setShowShareDropdown] = useState(false);
    const [isHeartFilled, setIsHeartFilled] = useState(false);
    const [copied, setCopied] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowShareDropdown(false);
            }
        };

        if (showShareDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showShareDropdown]);
    
    // Handle copy link
    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
                setShowShareDropdown(false);
            }, 1500);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };
    
    // Handle social media clicks
    const handleSocialClick = (platform: string) => {
        console.log(`Sharing to ${platform}`);
        setShowShareDropdown(false);
    };
    
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
                    {/* Heart and Share Icons */}
                    <div className="absolute top-3 right-3 flex gap-2 flex-col">
                        <div className="bg-white p-1.5 rounded-[4px] flex items-center justify-center">
                            <Heart 
                                size={16} 
                                strokeWidth={2.5}
                                className={cn(
                                    "text-primary transition-all duration-300 cursor-pointer hover:scale-110",
                                    isHeartFilled ? "fill-current" : ""
                                )}
                                onClick={() => setIsHeartFilled(!isHeartFilled)}
                            />
                        </div>
                        <div className="relative" ref={dropdownRef}>
                            <div 
                                className="bg-white p-1.5 rounded-[4px] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                                onClick={() => setShowShareDropdown(!showShareDropdown)}
                            >
                                <Share2 size={16} strokeWidth={2.5} className="text-primary" />
                            </div>
                            {/* Share Dropdown */}
                            {showShareDropdown && (
                                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                                    <div className="py-1">
                                        <button 
                                            onClick={() => handleSocialClick('Facebook')}
                                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                                        >
                                            <Facebook size={16} className="text-blue-600" />
                                            Facebook
                                        </button>
                                        <button 
                                            onClick={() => handleSocialClick('Twitter')}
                                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                                        >
                                            <Twitter size={16} className="text-sky-500" />
                                            Twitter
                                        </button>
                                        <button 
                                            onClick={() => handleSocialClick('WhatsApp')}
                                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                                        >
                                            <MessageCircle size={16} className="text-green-500" />
                                            WhatsApp
                                        </button>
                                        <button 
                                            onClick={handleCopyLink}
                                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                                        >
                                            {copied ? (
                                                <>
                                                    <Check size={16} className="text-green-500" />
                                                    <span className="text-green-500">Copied!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy size={16} className="text-gray-500" />
                                                    Copy Link
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Duration and Category */}
                <div className="flex justify-between px-2.5 py-2">
                    <div className="bg-[#D0A87D] px-2 rounded flex items-center gap-1">
                        <Clock size={13} className="text-white font-medium" />
                        <span className="text-white font-medium text-xs">3 Hours</span>
                    </div>
                    <div className="px-3 py-1 rounded flex items-center gap-1 text-primary ">
                        <LayoutGrid size={13} />
                        <span className="font-medium text-xs">Historical</span>
                    </div>
                </div>
                
                <div className="p-4 flex flex-col flex-1 justify-between">
                    <div className="space-y-3">
                        {/* Location and Rating */}
                        <div className="flex justify-between items-center">
                            <span className="text-black text-sm font-medium">{city}</span>
                            <div className="flex items-center gap-1">
                                <Star size={13} className="fill-current" style={{ color: '#0373DE' }} />
                                <span className="text-black text-xs font-light">{rating}</span>
                            </div>
                        </div>
                        
                        {/* Title/Description */}
                        <h3 className="text-gray-700 text-base font-normal line-clamp-2">
                            {title}
                        </h3>
                    </div>
                    
                    {/* Price with Arrow */}
                    <div className="flex justify-between items-center pt-3">
                        <p className="text-primary text-base font-medium h-[24px]">{price}</p>
                        <div className="bg-primary rounded-[2px] w-[40px] h-[24px] flex items-center justify-center px-2 transition-all duration-300 hover:scale-105">
                            <ArrowRight size={13} className="text-white" />
                        </div>
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