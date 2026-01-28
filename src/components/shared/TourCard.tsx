// TourCard.tsx - Minimal version
"use client";

import Image from "next/image";
import { 
    Star, Clock, MapPin, Users, Heart, Share2, 
    ArrowRight, LayoutGrid, Facebook, Twitter, 
    MessageCircle, Copy, Check 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TourCardProps } from "@/constants/types";
import { useState } from "react";

// Import shadcn/ui components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function TourCard({ 
    imagePath, city, title, price, rating, 
    duration, groupSize, location, variant = "default", className 
}: TourCardProps) {
    const [isHeartFilled, setIsHeartFilled] = useState(true); // Set to true for wishlist page
    const [copied, setCopied] = useState(false);
    
    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };
    
    const handleSocialClick = (platform: string) => {
        console.log(`Sharing to ${platform}`);
    };
    
    if (variant === "detailed") {
        return (
            <div
                className={cn(
                    "bg-white border text-left mx-auto border-gray-200 overflow-hidden hover:shadow-lg transition-shadow h-[400px] flex flex-col w-full relative",
                    className
                )}
                style={{ maxWidth: "340px" }}
            >
                <div className="relative h-[200px] w-full overflow-hidden">
                    <Image
                        src={imagePath}
                        alt={`${city} Tour`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 340px, (max-width: 1200px) 50vw, 25vw"
                    />
                    
                    {/* Action buttons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                        {/* Heart button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 bg-white/90 backdrop-blur-sm hover:bg-white rounded-[4px] shadow-md"
                            onClick={() => setIsHeartFilled(!isHeartFilled)}
                            title="Save to favorites"
                        >
                            <Heart 
                                size={16} 
                                strokeWidth={2.5}
                                // --- KEY CHANGE IS HERE ---
                                className={cn(
                                    "text-primary transition-colors",
                                    isHeartFilled && "fill-current" 
                                )}
                            />
                        </Button>
                        
                        {/* Share dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 bg-white/90 backdrop-blur-sm hover:bg-white rounded-[4px] shadow-md"
                                    title="Share this tour"
                                >
                                    <Share2 size={16} strokeWidth={2.5} className="text-primary" />
                                </Button>
                            </DropdownMenuTrigger>
                            
                            <DropdownMenuContent 
                                align="end" 
                                sideOffset={8}
                                className="w-48 bg-white border border-gray-200 rounded-lg shadow-xl"
                            >
                                <DropdownMenuItem 
                                    onClick={() => handleSocialClick('Facebook')}
                                    className="flex items-center gap-3 px-3 py-2.5 cursor-pointer focus:bg-gray-50"
                                >
                                    <Facebook size={18} className="text-blue-600" />
                                    <span className="text-sm">Facebook</span>
                                </DropdownMenuItem>
                                
                                <DropdownMenuItem 
                                    onClick={() => handleSocialClick('Twitter')}
                                    className="flex items-center gap-3 px-3 py-2.5 cursor-pointer focus:bg-gray-50"
                                >
                                    <Twitter size={18} className="text-sky-500" />
                                    <span className="text-sm">Twitter</span>
                                </DropdownMenuItem>
                                
                                <DropdownMenuItem 
                                    onClick={() => handleSocialClick('WhatsApp')}
                                    className="flex items-center gap-3 px-3 py-2.5 cursor-pointer focus:bg-gray-50"
                                >
                                    <MessageCircle size={18} className="text-green-500" />
                                    <span className="text-sm">WhatsApp</span>
                                </DropdownMenuItem>
                                
                                <DropdownMenuItem 
                                    onClick={handleCopyLink}
                                    className="flex items-center gap-3 px-3 py-2.5 cursor-pointer focus:bg-gray-50"
                                >
                                    {copied ? (
                                        <>
                                            <Check size={18} className="text-green-500" />
                                            <span className="text-sm text-green-600 font-medium">Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={18} className="text-gray-500" />
                                            <span className="text-sm">Copy link</span>
                                        </>
                                    )}
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                
                {/* Rest of the card content remains the same */}
                <div className="flex justify-between px-2.5 py-2">
                    <div className="bg-[#D0A87D] px-2 rounded flex items-center gap-1">
                        <Clock size={13} className="text-white font-medium" />
                        <span className="text-white font-medium text-xs">{duration || "N/A"}</span>
                    </div>
                    <div className="px-3 py-1 rounded flex items-center gap-1 text-primary ">
                        <LayoutGrid size={13} />
                        <span className="font-medium text-xs">{location || city}</span>
                    </div>
                </div>
                
                <div className="p-4 flex flex-col flex-1 justify-between">
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-black text-sm font-medium">{city}</span>
                            <div className="flex items-center gap-1">
                                <Star size={13} className="fill-current" style={{ color: '#0373DE' }} />
                                <span className="text-black text-xs font-light">{rating || "0.0"}</span>
                            </div>
                        </div>
                        
                        <h3 className="text-gray-700 text-base font-normal line-clamp-2">
                            {title}
                        </h3>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3">
                        <p className="text-primary text-base font-medium h-[24px]">{price}</p>
                        <Button
                            variant="default"
                            size="sm"
                            className="bg-primary hover:bg-primary/90 rounded-[2px] h-[24px] px-3"
                        >
                            <ArrowRight size={13} className="text-white" />
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    // Default variant remains the same
    return (
        <div
            className={cn(
                "bg-white border text-left border-gray-200 overflow-hidden hover:shadow-lg transition-shadow h-[335px] flex flex-col w-full",
                className
            )}
            style={{ maxWidth: "340px" }}
        >
            <div className="relative h-[180px] w-full overflow-hidden">
                <Image
                    src={imagePath}
                    alt={`${city} Tour`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 340px, (max-width: 1200px) 50vw, 25vw"
                />
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between">
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-black text-sm font-medium">{city}</span>
                        <div className="flex items-center gap-1">
                            <Star size={12} className="text-primary fill-current" />
                            <span className="text-black text-xs font-light">{rating || "0.0"}</span>
                        </div>
                    </div>
                    <h3 className="text-gray-700 text-base font-normal line-clamp-2">
                        {title}
                    </h3>
                    {duration && (
                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                            <Clock size={12} />
                            <span>{duration}</span>
                        </div>
                    )}
                    {groupSize && (
                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                            <Users size={12} />
                            <span>Max group: {groupSize}</span>
                        </div>
                    )}
                </div>
                <p className="text-primary text-base font-medium">{price}</p>
            </div>
        </div>
    );
}